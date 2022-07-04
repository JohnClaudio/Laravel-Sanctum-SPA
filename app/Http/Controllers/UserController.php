<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){

      //  $USER_AUTHENTICAD = auth('sanctum')->check();

        if(auth("sanctum")->check()){
            $user = User::all();
            return response($user,'202');
        }

        return response()->json('user not authenticad','401');
    }

    public function store(Request $request){

        $data  = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            ]);

        try {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            return response()->json('user created', 203);
        }
        catch (\Exception){
            return response()->json('failed', 400);
        }



    }

    public  function updateUser(Request $request){

        $user = $request->user();
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id
        ]);





        $user->update($request->only('name', 'email'));
    }

    public  function getUserByEmail(Request $request){

        $data  = $request->validate([

            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],

        ]);
            $user = User::select('name','email')->where('email',$request->get('email'));

    }
}
