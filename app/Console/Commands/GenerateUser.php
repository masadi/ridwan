<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Role;

class GenerateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $roles = [
            [
                'name' => 'admin',
                'display_name' => 'Administrator',
                'description' => 'Admin Role',
            ],
            [
                'name' => 'member',
                'display_name' => 'Member',
                'description' => 'Member Role',
            ],
            [
                'name' => 'user',
                'display_name' => 'User',
                'description' => 'User Role',
            ],
        ];
        foreach($roles as $role){
            Role::updateOrCreate($role);
        }
        $user = User::updateOrCreate(
            [
                'name' => 'Administrator',
                'email' => 'masadi.com@gmail.com',
            ],
            [
                'password' => bcrypt('#Bismill4h$'),
            ]
        );
        $user->attachRole('admin');
        return Command::SUCCESS;
    }
}
