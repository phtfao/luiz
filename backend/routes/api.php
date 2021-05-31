<?php
    Route::apiResources(
        [
            'tarefas' => 'Api\TarefaController',
            'projetos' => 'Api\ProjetoController',
            'prioridades' => 'Api\PrioridadeController',
            'users' => 'Api\UserController',
        ]
    );
