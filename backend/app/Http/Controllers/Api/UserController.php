<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\MasterController;
use App\Models\User;


class UserController extends MasterController
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }
}
