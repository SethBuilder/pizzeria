<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Pizza as PizzaResource;

class Order extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "firstName" => $this->firstName,
            "lastName" => $this->lastName,
            "address" => $this->address,
            "user" => $this->user,
            "user" => $this->user,
            "totalEuro" => $this->totalEuro(),
            "totalUSD" => $this->totalUSD(),
            "deliveryFeesEuro" => $this->deliveryFeesEuro(),
            "deliveryFeesUSD" => $this->deliveryFeesUSD(),
            "pizzas" => PizzaResource::collection($this->pizzas),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
