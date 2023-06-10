<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use App\Models\User;
use App\Models\Role;
use App\Models\Team;
use Validator;
use Storage;

class AuthController extends Controller
{
    public function username()
    {
        $login = request()->input('username');
        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';        
        request()->merge([$field => $login]);
        return $field;
        //return 'username';
    }
    public function register(Request $request)
    {
        $request->validate(
            [
                'username' => 'required',
                'email'=>'required|string|unique:users',
                'password'=>'required|string',
            ],
            [
                'name.required' => 'Nama tidak boleh kosong',
                'email.required' => 'Email tidak boleh kosong',
                'email.unique' => 'Email telah terdaftar',
                'password.required' => 'Password tidak boleh kosong'
            ]
        );
        $user = User::create([
            'name' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $role = Role::where('name', 'user')->first();
        $user->attachRole($role);
        return response()->json([
            'error'=> FALSE,
            'message' => 'Register berhasil'
        ]);
    }
    public function login(Request $request)
    {
        $login = request()->input('email');
        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $namaField = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'Email' : 'NPSN';
        request()->merge([$field => $login]);
        $request->validate(
            [
                $field => 'required|string|exists:users,'.$field ,
                'password' => 'required|string',
                'remember_me' => 'boolean'
            ],
            [
                $field.'.required' => $namaField.' tidak boleh kosong',
                $field.'.exists' => $namaField.' tidak terdaftar',
                'password.required' => 'Password tidak boleh kosong'
            ]
        );
        $credentials = request([$field,'password']);
        //return response()->json($credentials);
        if(!Auth::attempt($credentials)){
            return response()->json([
                'user' => NULL,
                'message' => [
                    'password' => 'Password salah!',
                ]
            ],401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        $user->role = $user->roles->unique()->implode('display_name', ', ');
        $user->roles = $user->roles->unique()->pluck('name')->toArray();
        if($user->hasRole('admin')){
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Administrator'
                ],
            ];
        } elseif($user->hasRole('member')){
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Member'
                ],
            ];
        } else {
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
            ];
        }
        return response()->json([
            'accessToken' =>$token,
            'user' => $user,
            'token_type' => 'Bearer',
        ]);
    }
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
        'message' => 'Successfully logged out'
        ]);

    }
    private function loggedUser($user){
        $semester = Semester::find(request()->semester_id);
        if($user->sekolah_id && !$user->peserta_didik_id && !$user->guru_id){
            $team = Team::updateOrCreate([
                'name' => $semester->nama,
                'display_name' => $semester->nama,
                'description' => $semester->nama,
            ]);
            if(!$user->hasRole('admin', $semester->nama)){
                $user->attachRole('admin', $team);
            }
        }
        if($user->hasRole('admin', $semester->nama)){
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Administrator'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Akses'
                ]
            ];
        } elseif($user->hasRole('guru', $semester->nama)){
            $waka = [];
            $wali = [];
            $kaprog = [];
            $projek = [];
            $internal = [];
            $pembina_ekskul = [];
            if($user->hasRole('waka', $semester->nama)){ 
                $waka = [
                    [
                        'action' => 'read',
                        'subject' => 'Waka'
                    ],
                    [
                        'action' => 'read',
                        'subject' => 'Wali'
                    ],
                ];
            }
            if($user->hasRole('wali', $semester->nama)){
                if($semester->semester == 1){
                    $wali = [
                        [
                            'action' => 'read',
                            'subject' => 'Password_pd',
                        ],
                        [
                            'action' => 'read',
                            'subject' => 'Wali'
                        ],
                    ];
                } else {
                    $wali = [
                        [
                            'action' => 'read',
                            'subject' => 'Password_pd',
                        ],
                        [
                            'action' => 'read',
                            'subject' => 'Wali'
                        ],
                        [
                            'action' => 'read',
                            'subject' => 'Kenaikan'
                        ],
                    ];
                }
            }
            if($user->hasRole('kaprog', $semester->nama)){ 
                $kaprog = [
                    [
                        'action' => 'read',
                        'subject' => 'Kaprog'
                    ],
                ];
            }
            if($user->hasRole('guru-p5', $semester->nama)){ 
                $projek = [
                    [
                        'action' => 'read',
                        'subject' => 'Projek'
                    ],
                ];
            }
            if($user->hasRole('internal', $semester->nama)){ 
                $internal = [
                    [
                        'action' => 'read',
                        'subject' => 'Internal'
                    ],
                ];
            }
            if($user->hasRole('pembina_ekskul', $semester->nama)){ 
                $internal = [
                    [
                        'action' => 'read',
                        'subject' => 'Ekskul'
                    ],
                ];
            }
            $guru = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Guru'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Akses'
                ]
            ];
            $user->ability = array_filter(array_merge($guru, $waka, $wali, $kaprog, $projek, $internal));
        } elseif($user->hasRole('siswa', $semester->nama)){ 
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Siswa'
                ],
                [
                    'action' => 'read',
                    'subject' => 'Akses'
                ],
            ];
        } else { 
            $user->ability = [
                [
                    'action' => 'read',
                    'subject' => 'Web'
                ]
            ];
        }
        if($user->allPermissions('display_name', $semester->nama)->count()){
            $user->role = $user->allPermissions('display_name', $semester->nama)->implode('display_name', ', ');
            $user->roles = $user->allPermissions('name', $semester->nama)->pluck('name')->toArray();
            $user->check = 'ada';
        } else {
            $user->role = $user->roles->unique()->implode('display_name', ', ');
            $user->roles = $user->roles->unique()->pluck('name')->toArray();
            $user->check = 'ga ada';
        }
        $user->sekolah = $user->sekolah;
        $user->semester = $semester;
        return $user;
    }
    public function semester(){
        $data = [
            'semester' => Semester::whereHas('tahun_ajaran', function($query){
                $query->where('periode_aktif', 1);
              })->orderBy('semester_id', 'DESC')->get()
        ];
        return response()->json($data);
    }
    private function create_user($data, $email, $password){
        if(!$data->data){
            return response()->json([
                'error'=> TRUE,
                'message' => $data->message,
                'data' => $data,
            ]);
        }
        $set_data = $data->data->sekolah;
        if($set_data->bentuk_pendidikan_id == '15'){
            $get_kode_wilayah = $set_data->wilayah;
            $kode_wilayah = $set_data->kode_wilayah;
            $kecamatan = '-';
            $kabupaten = '-';
            $provinsi = '-';
            if($get_kode_wilayah){
                $kode_wilayah = $get_kode_wilayah->kode_wilayah;
                if($get_kode_wilayah->parrent_recursive){
                    $kecamatan = $get_kode_wilayah->parrent_recursive->nama;
                    if($get_kode_wilayah->parrent_recursive->parrent_recursive){
                        $kabupaten = $get_kode_wilayah->parrent_recursive->parrent_recursive->nama;
                        if($get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive){
                            $provinsi = $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->nama;
                            Mst_wilayah::updateOrCreate(
                                [
                                    'kode_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->kode_wilayah,
                                ],
                                [
                                    'nama' => $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->nama,
                                    'id_level_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->id_level_wilayah,
                                    'mst_kode_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->mst_kode_wilayah,
                                    'negara_id' => $get_kode_wilayah->parrent_recursive->parrent_recursive->parrent_recursive->negara_id,
                                    'last_sync' => now(),
                                ]
                            );
                        }
                        Mst_wilayah::updateOrCreate(
                            [
                                'kode_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->kode_wilayah,
                            ],
                            [
                                'nama' => $get_kode_wilayah->parrent_recursive->parrent_recursive->nama,
                                'id_level_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->id_level_wilayah,
                                'mst_kode_wilayah' => $get_kode_wilayah->parrent_recursive->parrent_recursive->mst_kode_wilayah,
                                'negara_id' => $get_kode_wilayah->parrent_recursive->parrent_recursive->negara_id,
                                'last_sync' => now(),
                            ]
                        );
                    }
                    Mst_wilayah::updateOrCreate(
                        [
                            'kode_wilayah' => $get_kode_wilayah->parrent_recursive->kode_wilayah,
                        ],
                        [
                            'nama' => $get_kode_wilayah->parrent_recursive->nama,
                            'id_level_wilayah' => $get_kode_wilayah->parrent_recursive->id_level_wilayah,
                            'mst_kode_wilayah' => $get_kode_wilayah->parrent_recursive->mst_kode_wilayah,
                            'negara_id' => $get_kode_wilayah->parrent_recursive->negara_id,
                            'last_sync' => now(),
                        ]
                    );
                }
                Mst_wilayah::updateOrCreate(
                    [
                        'kode_wilayah' => $get_kode_wilayah->kode_wilayah,
                    ],
                    [
                        'nama' => $get_kode_wilayah->nama,
                        'id_level_wilayah' => $get_kode_wilayah->id_level_wilayah,
                        'mst_kode_wilayah' => $get_kode_wilayah->mst_kode_wilayah,
                        'negara_id' => $get_kode_wilayah->negara_id,
                        'last_sync' => now(),
                    ]
                );
            }
            $sekolah = Sekolah::updateOrCreate(
                ['sekolah_id' => $set_data->sekolah_id],
                [
                    'npsn' 					=> $set_data->npsn,
                    'nss' 					=> $set_data->nss,
                    'nama' 					=> $set_data->nama,
                    'alamat' 				=> $set_data->alamat_jalan,
                    'desa_kelurahan'		=> $set_data->desa_kelurahan,
                    'kode_wilayah'			=> $kode_wilayah,
                    'kecamatan' 			=> $kecamatan,
                    'kabupaten' 			=> $kabupaten,
                    'provinsi' 				=> $provinsi,
                    'kode_pos' 				=> $set_data->kode_pos,
                    'lintang' 				=> $set_data->lintang,
                    'bujur' 				=> $set_data->bujur,
                    'no_telp' 				=> $set_data->nomor_telepon,
                    'no_fax' 				=> $set_data->nomor_fax,
                    'email' 				=> $set_data->email,
                    'website' 				=> $set_data->website,
                    'status_sekolah'		=> $set_data->status_sekolah,
                    'last_sync'				=> now(),
                ]
            );
            $semester = Semester::where('periode_aktif', 1)->first();
            $user = User::create([
                'sekolah_id' => $sekolah->sekolah_id,
                'name' => 'Administrator',
                'email' => $email,
                'password' => bcrypt($password),
            ]);
            $adminRole = Role::where('name', 'admin')->first();
            $team = Team::updateOrCreate([
                'name' => $semester->nama,
                'display_name' => $semester->nama,
                'description' => $semester->nama,
            ]);
            $user->attachRole($adminRole, $team);
            return response()->json([
                'error'=> FALSE,
                'message' => 'Register berhasil'
            ]);
        } else {
            return response()->json([
                'error'=> TRUE,
                'message' => 'Jenjang Sekolah Salah'
            ]);
        }
    }
    public function profil(){
        return response()->json(auth()->user());
    }
    public function update_profile(){
        $user = auth()->user();
        if(request()->has('name')){
            request()->validate(
                [
                    'name' => ['required', 'string', 'max:255'],
                    'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->user_id, 'user_id')],
                    'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
                ],
                [
                    'name.required' => 'Nama Lengkap tidak boleh kosong!',
                    'email.required' => 'Email tidak boleh kosong!',
                    'email.email' => 'Email tidak valid!',
                    'email.unique' => 'Email sudah terdaftar di Database!',
                    'photo.mimes' => 'Foto harus berekstensi jpg/jpeg/png',
                    'photo.max' => 'Ukuran foto tidak boleh lebih dari 1 MB!',
                ],
            );
            $user->name = request()->name;
            //$user->email = request()->email;
            $user->email = request()->email;
            //profile-photos
            if(request()->photo){
                $photo = request()->photo->store('public/profile-photos');
                $user->profile_photo_path = 'profile-photos/'.basename($photo);
            }
            if($user->save()){
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Profil Pengguna berhasil diperbaharui',
                ];
            } else {
                $data = [
                    'icon' => 'danger',
                    'title' => 'Gagal!',
                    'text' => 'Profil Pengguna gagal diperbaharui. Silahkan coba beberapa saat lagi!',
                ];
            }
        } else {
            $message = [
                //'current_password.required' => 'Kata sandi saat ini tidak boleh kosong',
                //'current_password.current_password' => 'Kata sandi salah',
                'password.required' => 'Kata sandi baru tidak boleh kosong',
                'password.confirmed' => 'Konfirmasi kata sandi tidak sesuai dengan Kata sandi baru',
                'password_confirmation.required' => 'Konfirmasi kata sandi tidak boleh kosong',
            ];
            $rules = [
                //'current_password' => ['required', 'current_password'],
                'password' => [
                    'required',
                    'confirmed',
                ],
                'password_confirmation' => ['required'],
            ];
            $validator = Validator::make(request()->all(), $rules, $message)->validated();
            $user->password = Hash::make(request()->password);
            if($user->save()){
                if(request()->password == $user->username){
                    $ability = [
                        [
                            'action' => 'read',
                            'subject' => 'Web'
                        ]
                    ];
                } else {
                    if($user->hasRole('administrator')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Administrator'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ]
                        ];
                    } elseif($user->hasRole('disprov')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Disprov'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Fire'
                            ],
                        ];
                    }
                    if($user->hasRole('diskab')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Diskab'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Referensi'
                            ]
                        ];
                    }
                    if($user->hasRole('sekolah')){
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Sekolah'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Blangko'
                            ],
                            [
                                'action' => 'read',
                                'subject' => ($user->fire) ? 'Fire' : 'NotFire',
                            ],
                        ];
                    }
                    if($user->hasRole('verifikator')){ //alumni_aktif
                        $ability = [
                            [
                                'action' => 'read',
                                'subject' => 'Web'
                            ],
                            [
                                'action' => 'read',
                                'subject' => 'Verifikator'
                            ]
                        ];
                    }
                }
                $data = [
                    'icon' => 'success',
                    'title' => 'Berhasil!',
                    'text' => 'Password Pengguna berhasil diperbaharui',
                    'ability' => $ability,
                ];
            } else {
                $data = [
                    'icon' => 'danger',
                    'title' => 'Gagal!',
                    'text' => 'Password Pengguna gagal diperbaharui. Silahkan coba beberapa saat lagi!',
                ];
            }
        }
        return response()->json($data);
        $data = [
            'icon' => 'success',
            'title' => 'Berhasil!',
            'text' => 'Profil Pengguna berhasil diperbaharui',
        ];
        return response()->json($data);
    }
}
