<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Resources\ProductResource;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Tag;
use Exception;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    public function index()
    {
        try {

            $products = Product::all();

            foreach ($products as $key => $product) {
                $product->tags = $product->tags()->get();
            }

            return (new ProductResource($products))->response()->setStatusCode(Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json(['errors' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function store(ProductRequest $request)
    {
        try {
            $request->validated();

            $product = Product::firstOrCreate([
                "name" => $request->name,
                "description" => $request->description
            ]);

            if ($request->has("tags") && count($request->tags) > 0) {
                foreach ($request->tags as $tag_id) {
                    $tag = Tag::findOrFail($tag_id);
                    $tag->products()->syncWithoutDetaching($product->id);
                }
            }

            $product->tags = $product->tags()->get();

            return (new ProductResource($product))->response()->setStatusCode(Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json(['errors' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function show($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->tags = $product->tags()->get();

            return (new ProductResource($product))->response()->setStatusCode(Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Produto não encontrado"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function update(ProductRequest $request, $id)
    {

        try {
            $request->validated();
            $product = Product::findOrFail($id);


            $product->tags()->detach();
            if ($request->has("tags") && count($request->tags) > 0) {
                foreach ($request->tags as $tag_id) {
                    $tag = Tag::findOrFail($tag_id);
                    $product->tags()->attach($tag->id);
                }
            }



            $data = $request->all();
            $product->update($data);
            $product->save();

            $product->tags = $product->tags()->get();

            return (new ProductResource($product))->response()->setStatusCode(Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Produto não encontrado"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);

            foreach ($product->tags()->get() as $tag) {
                $product->tags()->detach($tag->id);
            }

            $deleted = $product->delete();

            return response()->json(["data" => ["deleted" => $deleted]], Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Produto não encontrado"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
