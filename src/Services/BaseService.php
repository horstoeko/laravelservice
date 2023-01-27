<?php

namespace horstoeko\laravelservice\Services;

use Illuminate\Support\Arr;
use horstoeko\laravelservice\Concerns\RaisesExceptions;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use horstoeko\laravelservice\Concerns\HandlesTransactions;
use horstoeko\laravelservice\Exceptions\ModelNotSpecifiedException;
use horstoeko\laravelservice\Exceptions\ModelClassNotFoundException;

class BaseService
{
    use AuthorizesRequests,
        HandlesTransactions,
        RaisesExceptions;

    /**
     * The model class to use
     *
     * @var string
     */
    protected $modelClass;

    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Resolve the classname of the repository
     *
     * @return string
     */
    protected function resolveModelClass(): string
    {
        if (!isset($this->modelClass) || is_null($this->modelClass) || (string)$this->modelClass == "" ) {
            throw new ModelNotSpecifiedException();
        }
        if (!class_exists($this->modelClass)) {
            throw new ModelClassNotFoundException();
        }

        return (string)$this->modelClass;
    }

    /**
     * Authorize request
     *
     * @param string $ability
     * @param int|null $for
     * @return void
     */
    public function authorizeRequest(string $ability, ?int $for = null)
    {
        if (app()->runningInConsole()) {
            return;
        }

        $for = is_null($for) ? $this->resolveModelClass() : $this->getSingle($for);

        $this->authorize($ability, $for);
    }


    /**
     * Return all records
     *
     * @return \Illuminate\Database\Eloquent\Collection|\App\Models\User[]
     */
    public function getAll()
    {
        $this->authorizeRequest("viewAny");

        return $this->resolveModelClass()::query()->orderBy('id', 'desc')->get();
    }

    /**
     * Return all records in a paginated way
     *
     * @param integer $page
     * @param integer $limit
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getAllPaginated(int $page = 1, int $limit = 20)
    {
        $this->authorizeRequest("viewAny");

        return $this->resolveModelClass()::query()->orderBy('id', 'desc')->paginate($limit, ['*'], 'page', $page);
    }

    /**
     * Check if a record exists
     *
     * @param integer $recordId
     * @return bool
     */
    public function exists(int $recordId)
    {
        return $this->resolveModelClass()::where("id", $recordId)->exists();
    }

    /**
     * Get a single record
     *
     * @param integer $recordId
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getSingle(int $recordId)
    {
        $this->authorizeRequest("view", $recordId);

        return $this->resolveModelClass()::findOrFail($recordId);
    }

    /**
     * Get a fresh empty instance
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function new()
    {
        $this->authorizeRequest("create");

        return app()->make($this->resolveModelClass());
    }

    /**
     * Store a new download
     *
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function store(array $data)
    {
        $this->authorizeRequest("create");

        $model = $this->new();
        $model->fill(
            Arr::except(
                $data,
                [
                    $model->getKeyName(),
                    $this->resolveModelClass()::CREATED_AT,
                    $this->resolveModelClass()::UPDATED_AT,
                ]
            )
        );
        $model->save();

        return $model;
    }
}