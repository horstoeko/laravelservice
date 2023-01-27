<?php

namespace horstoeko\laravelservicerepository;

use Illuminate\Support\ServiceProvider;
use horstoeko\laravelservicerepository\Console\ServiceMakeCommand;
use horstoeko\laravelservicerepository\Console\RepositoryMakeCommand;

/**
 * Class LSRServiceProvider
 */
class LSRServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register(): void
    {
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                ServiceMakeCommand::class,
                RepositoryMakeCommand::class,
            ]);
        }
    }
}