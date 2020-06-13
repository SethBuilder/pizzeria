<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizza;
use Faker\Generator as Faker;

$factory->define(Pizza::class, function (Faker $faker) {
    return [
        'name' => $faker->text($maxNbChars = 20),
        'slug' =>$faker->slug,
        'price' => $faker->randomFloat($nbMaxDecimals = 4, $min = 2, $max = 40),
        'description' => $faker->sentence
    ];
});
