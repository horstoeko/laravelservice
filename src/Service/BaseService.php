<?php

namespace horstoeko\laravelservicerepository\Service;

use Illuminate\Support\Facades\App;

class BaseService
{
    /**
     * The repository class
     *
     * @var string
     */
    protected $repositoryClass = "";

    /**
     * The repository
     *
     * @var BaseRepository
     */
    protected $repository;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->repository = App::make($this->resolveRepositoryClass());
    }

    /**
     * Resolve the classname of the repository
     *
     * @return string
     */
    protected function resolveRepositoryClass(): string
    {
        return $this->repositoryClass;
    }
}