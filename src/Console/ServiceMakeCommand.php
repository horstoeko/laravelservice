<?php

namespace horstoeko\laravelservice\Console;

use Illuminate\Console\GeneratorCommand;
use Symfony\Component\Console\Input\InputOption;

class ServiceMakeCommand extends GeneratorCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'lsr:make:service';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Service';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Service';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (parent::handle() === false && ! $this->option('force')) {
            return false;
        }

        if ($this->option('policy')) {
            $this->createPolicy();
        }
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['policy', null, InputOption::VALUE_NONE, 'Create a policy class'],
            ['force', null, InputOption::VALUE_NONE, 'Create the class even if the service already exists'],
        ];
    }

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        $relativePath = '/stubs/service.stub';

        return file_exists($customPath = $this->laravel->basePath(trim($relativePath, '/'))) ? $customPath : __DIR__ . $relativePath;
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Services';
    }

    /**
     * Get the desired class name from the input.
     *
     * @return string
     */
    protected function getNameInput()
    {
        return sprintf("%s%s", trim($this->argument('name')), "Service");
    }

    /**
     * Replace the class name for the given stub.
     *
     * @param  string  $stub
     * @param  string  $name
     * @return string
     */
    protected function replaceClass($stub, $name)
    {
        $stub = parent::replaceClass($stub, $name);

        $stub = str_replace('{{modelclass}}', trim($this->argument('name')), $stub);

        return $stub;
    }

    /**
     * Create policy
     *
     * @return void
     */
    protected function createPolicy()
    {
        $this->call('make:policy', array_filter([
            'name' => $this->argument('name') . "Policy",
            '--model' => $this->argument('name'),
        ]));
    }
}
