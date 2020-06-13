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
            for($i = 0; $i < 6; $i++) {
                $order->pizzas()->save(factory(App\Pizza::class)->make());
            }
        });
    }
}
