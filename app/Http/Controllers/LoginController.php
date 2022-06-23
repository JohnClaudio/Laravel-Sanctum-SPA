<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function authenticate(Request $request)
    {
       $credentials = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

      //  $credentials = ['email'=>'lowell01@example.com','password'=>'password'];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json('autorizado', '202');
        }

        return response()->json('acess not allowed', '401');
}
    public function authenticate2(Request $request)
    {
    /*    $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'password'],
        ]);
*/
        $credentials = ['email'=>'lowell01@example.com','password'=>'password'];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json('autorizado', '202');
        }

        return response()->json('acess not allowed', '401');
    }
}
