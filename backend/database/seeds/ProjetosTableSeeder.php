<?php

use Illuminate\Database\Seeder;

class ProjetosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projetos')->insert([
            'nome_projeto' => 'Trabalho',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('projetos')->insert([
            'nome_projeto' => 'Casa',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
