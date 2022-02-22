<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Resources\TagResource;
use App\Http\Requests\TagRequest;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Tag;
use Exception;

class TagController extends Controller
{

    public function index()
    {
        try {

            $tags = Tag::all();

            return (new TagResource($tags))->response()->setStatusCode(Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json(['errors' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function store(TagRequest $request)
    {
        try {
            $request->validated();

            $tag = Tag::create([
                "name" => $request->name,
                "description" => $request->description,
                "color" => $request->color
            ]);

            return (new TagResource($tag))->response()->setStatusCode(Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json(['errors' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    public function show($id)
    {
        try {
            $tag = Tag::findOrFail($id);

            return (new TagResource($tag))->response()->setStatusCode(Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Tag não encontrada"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function update($id, TagRequest $request)
    {

        try {
            $request->validated();

            $tag = Tag::findOrFail($id);

            $tag->update($request->all());
            $tag->save();

            return (new TagResource($tag))->response()->setStatusCode(Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Tag não encontrada"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id)
    {
        try {
            $tag = Tag::findOrFail($id);

            foreach ($tag->products()->get() as $product) {
                $tag->products()->detach($product->id);
            }

            $deleted = $tag->delete();

            return (new TagResource(["deleted" => $deleted]))->response()->setStatusCode(Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $e) {
            return response()->json(["errors" => "Tag não encontrada"], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json(["errors" => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
