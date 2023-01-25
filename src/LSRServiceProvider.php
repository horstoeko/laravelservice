<?php

namespace horstoeko\laravelservicerepository;

use Illuminate\Support\ServiceProvider;
use horstoeko\laravelservicerepository\console\ServiceMakeCommand;
use horstoeko\laravelservicerepository\console\RepositoryMakeCommand;

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