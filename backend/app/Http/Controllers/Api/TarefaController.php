<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\MasterController;
use Illuminate\Http\Request;
use App\Models\Tarefa;

class TarefaController extends MasterController
{
    protected $model;

    public function __construct(Tarefa $tarefa)
    {
        $this->model = $tarefa;
    }

    public function index(Request $request)
    {
        $data = $this->model::select(
            'tarefas.*',
            'u.name AS nome_usuario',
            'pri.nome_prioridade',
            'pro.nome_projeto',
        )
            ->join('users as u', 'u.id', '=', 'tarefas.usuario_id')
            ->join('prioridades as pri', 'pri.id', '=', 'tarefas.usuario_id')
            ->join('projetos as pro', 'pro.id', '=', 'tarefas.usuario_id')
            ->get();

        return response()->json($data);
    }
}
