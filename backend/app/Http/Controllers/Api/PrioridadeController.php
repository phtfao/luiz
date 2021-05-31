<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\MasterController;
use App\Models\Prioridade;


class PrioridadeController extends MasterController
{
    protected $model;

    public function __construct(Prioridade $prioridade)
    {
        $this->model = $prioridade;
    }
}
