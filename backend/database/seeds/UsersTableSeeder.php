<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Luiz Junior',
            'email' => 'luiz.mendanha@gmail.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Priscila Nunes',
            'email' => 'priscila.l.nunes@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
