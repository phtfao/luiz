<?php

use Illuminate\Database\Seeder;

class PrioridadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('prioridades')->insert([
            'nome_prioridade' => 'Baixa',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('prioridades')->insert([
            'nome_prioridade' => 'Média',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('prioridades')->insert([
            'nome_prioridade' => 'Alta',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
