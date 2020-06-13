<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function user() {
        return $this->belongsTo(USer::class)->withDefault([
            'name' => 'Guest Checkout'
        ]);
    }

    public function pizzas() {
        return $this->belongsToMany(Pizza::class);
    }

    public function totalEuro() {
        // It's assumend the price is in Euros then converted to USD
        $total = 0;
        $orderedPizzas = $this->pizzas;
        foreach($orderedPizzas as $pizza) {
            $total += $pizza->price;
        }
        return number_format($total, 2);
    }

    public function totalUSD() {
        // Ideally, exchange rate needs to be configured from an admin panel
        $total = $this->totalEuro() / .89;
        return number_format($total, 2);
    }

    public function deliveryFeesUSD() {
        // delivery costs 7% of total order (assumed business rule)
        return number_format($this->totalUSD() * .07, 2);
    }

    public function deliveryFeesEuro() {
        // delivery costs 7% of total order (assumed business rule)
        return number_format($this->totalEuro() * .07, 2);
    }
}
