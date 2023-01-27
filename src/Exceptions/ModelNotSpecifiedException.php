<?php

namespace horstoeko\laravelservice\Exceptions;

use Exception;
use Illuminate\Http\Response;

class ModelNotSpecifiedException extends Exception
{
    public function __construct()
    {
        parent::__construct("No model class specified", Response::HTTP_BAD_REQUEST);
    }
}