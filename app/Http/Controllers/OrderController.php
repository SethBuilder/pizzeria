<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrder;
use App\Order;
use App\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  TO DO: list logged in user order
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrder $request)
    {
        $order = Order::create($request->validated());

        $items = json_decode($request->get('cartItems'));
        $flattened = Arr::flatten($items);
        $pizzaIds = [];
        foreach ($flattened as $item) {
            array_push($pizzaIds, Pizza::where('slug', $item->slug)->first()->id);
        }

        $order->pizzas()->attach($pizzaIds);
        if ($order && $order->pizzas()->count()) {
            return response()->json([
                'success' => true,
                'message' => 'order processed',
            ], 201);
        }

        return response()->json([
            'success' => false,
            'message' => 'order failed',
        ], 400);
    }
}
