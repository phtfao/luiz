<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prioridade extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome_prioridade',
    ];

    public function rules()
    {
        return [
            'nome_prioridade' => 'required',
        ];
    }
}
