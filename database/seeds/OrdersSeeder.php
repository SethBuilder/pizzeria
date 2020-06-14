<?php

use Illuminate\Database\Seeder;

class OrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Order::class, 15)->create()->each(function($order) {
                $order->pizzas()->attach(App\Pizza::inRandomOrder()->limit(rand(1, 12))->pluck('id'));
        });
    }
}
