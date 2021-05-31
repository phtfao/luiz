<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tarefa extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'periodo',
        'prioridade_id',
        'projeto_id',
        'usuario_id',
        'descricao',
    ];

    public function rules()
    {
        return [
            'periodo' => 'required',
            'prioridade_id' => 'required',
            'projeto_id' => 'required',
            'usuario_id' => 'required',
            'descricao' => 'required',
        ];
    }
}
