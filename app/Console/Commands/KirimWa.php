<?php

namespace App\Console\Commands;

use Illuminate\Http\Request;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class KirimWa extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kirim:wa {id}';

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
        $data_post = [
            'receiver' => hp('087864496339'),
            'isGroup' => FALSE,
            'message' => [
                'text' => 'test',
            ],
        ];
        //$url = 'http://localhost:4000/chats/send?id=adi';
        $url = config('app.webhook_url').'/chats/send?id='.$this->argument('id');
        $response = Http::post($url, $data_post);
        dump($response->object());
        return Command::SUCCESS;
    }
}
