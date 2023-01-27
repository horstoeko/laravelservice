<?php

namespace horstoeko\laravelservice\Exceptions;

use Exception;
use Illuminate\Http\Response;

class ModelClassNotFoundException extends Exception
{
    public function __construct()
    {
        parent::__construct("Model class not found", Response::HTTP_BAD_REQUEST);
    }
}