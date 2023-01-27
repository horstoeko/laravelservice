<?php

namespace horstoeko\laravelservicerepository\Repository;

use horstoeko\laravelservicerepository\Concerns\HandlesTransactions;
use horstoeko\laravelservicerepository\Concerns\RaisesExceptions;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class BaseRepository
{
    use AuthorizesRequests,
        HandlesTransactions,
        RaisesExceptions;

    /**
     * The model class
     *
     * @var string
     */
    protected $modelClass = "";

    /**
     * Resolve the classname of the repository
     *
     * @return string
     */
    protected function resolveModelClass(): string
    {
        return $this->modelClass;
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
        return $this->resolveModelClass()::findOrFail($recordId);
    }

    /**
     * Get a fresh empty instance
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function new()
    {
        return App::make($this->resolveModelClass());
    }

    /**
     * Store a new download
     *
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function store(array $data)
    {
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
