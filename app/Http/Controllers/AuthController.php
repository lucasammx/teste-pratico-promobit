<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['authenticate']]);
    }


    public function authenticate(AuthRequest $request)
    {
        try {
            $request->validated();

            if (!$token = Auth::attempt($request->all())) {
                throw new Exception("Email ou senha incorretos", 401);
            }

            return response()->json(['token' => $token], 200);
        } catch (\Exception $e) {
            return response()->json(['errors' => ["data" => [$e->getMessage()]]], 401);
        }
    }


    public function check(Request $request)
    {
        try {
            return response()->json(['authenticated' => true], 200);
        } catch (\Exception $e) {
            return response()->json(['errors' => ["data" => [$e->getMessage()]]], 401);
        }
    }
}
