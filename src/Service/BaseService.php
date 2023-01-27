<?php

namespace horstoeko\laravelservice\Service;

use Illuminate\Support\Facades\App;

class BaseService
{
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
        //return $this->repositoryClass;
    }
}