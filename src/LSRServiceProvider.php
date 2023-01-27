<?php

namespace horstoeko\laravelservice;

use Illuminate\Support\ServiceProvider;
use horstoeko\laravelservice\Console\ServiceMakeCommand;

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
                ServiceMakeCommand::class
            ]);
        }
    }
}