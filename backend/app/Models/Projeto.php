<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome_projeto',
    ];

    public function rules()
    {
        return [
            'nome_projeto' => 'required',
        ];
    }
}
