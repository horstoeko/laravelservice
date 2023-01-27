<?php

namespace horstoeko\laravelservice\Concerns;

trait RaisesExceptions
{
    /**
     * Raises an exception when $condition is true
     *
     * @param  boolean $condition
     * @param  string  $message
     * @param  integer $code
     * @return void
     */
    public function exceptionIf(bool $condition, string $message, int $code = 500): void
    {
        if (!$condition) {
            return;
        }

        throw new \Exception($message, $code);
    }

    /**
     * Raises an exception by $class when $condition is true
     *
     * @param  boolean $condition
     * @param  string  $class
     * @return void
     */
    public function exceptionWithClassIf(bool $condition, string $class): void
    {
        if (!$condition) {
            return;
        }

        throw new $class;
    }
}