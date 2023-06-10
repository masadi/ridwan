<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Rap2hpoutre\FastExcel\FastExcel;
use App\Models\Kategori;
use App\Models\Pesan;

class GenerateKonten extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:konten';

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
        $collections = (new FastExcel)->import(public_path('/templates/faq.xlsx'));
        foreach($collections as $data){
            $new = $this->kategori($data['KATEGORI']);
            $sub = $this->sub_kategori($data['TOPIK'], $new->id);
            $deskripsi = $data['JAWABAN'];
            //$deskripsi = str_replace('<br />', '', $deskripsi);
            //$deskripsi = nl2br($deskripsi);
            $this->pesan([
                'judul' => $data['PERTANYAAN'],
                'deskripsi' => $deskripsi,
            ], $sub->id);
            /*if($k['childs']){
                foreach($k['childs'] as $childs){
                    $sub = $this->kategori($childs, $new->id);
                    if($childs['pesan']){
                        foreach($childs['pesan'] as $pesan){
                            $this->pesan($pesan, $sub->id);
                        }
                    }
                }
            }
            foreach($k['pesan'] as $pesan){
                $this->pesan($pesan, $new->id);
            }*/
        }
        return Command::SUCCESS;
    }
    private function sub_kategori($k, $kategori_id){
        return Kategori::updateOrCreate(
            [
                'judul' => $k,
                'induk' => $kategori_id,
            ],
            [
                'deskripsi' => 'Informasi Seputar '.$k,
            ]
        );
    }
    private function kategori($k, $kategori_id = NULL){
        $deskripsi = ($kategori_id) ? 'INFORMASI SEPUTAR '.$k : 'Informasi Seputar '.$k;
        return Kategori::updateOrCreate(
            [
                'judul' => $k,
            ],
            [
                'deskripsi' => $deskripsi,
                'induk' => $kategori_id,
            ]
        );
    }
    private function pesan($pesan, $kategori_id){
        return Pesan::updateOrCreate(
            [
                'judul' => $pesan['judul'],
            ],
            [
                'deskripsi' => trim($pesan['deskripsi']),
                'kategori_id' => $kategori_id,
            ]
        );
    }
}
