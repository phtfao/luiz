<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\MasterController;
use App\Models\Projeto;


class ProjetoController extends MasterController
{
    protected $model;

    public function __construct(Projeto $projeto)
    {
        $this->model = $projeto;
    }
}
