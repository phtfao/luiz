<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTarefasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('periodo', [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'L',
                'M'

            ])->comment('
                        A => todos os dias
						B => todas as manhas
						C => todas as tardes
						D => de segunda a sexta
						E => sabado e domingo
						F => domingo
						G => segunda
						H => terça
						I => quarta
						J => quinta
						L => sexta
						M => sabado
            ');
            $table->string('descricao', 200);
            $table->integer('prioridade_id');
            $table->integer('projeto_id');
            $table->integer('usuario_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarefas');
    }
}
