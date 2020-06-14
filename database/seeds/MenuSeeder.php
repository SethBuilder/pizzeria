<?php

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('menu.json');
        $data = json_decode($json);
        foreach($data->data as $menuItem) {
            $pizza = App\Pizza::create(array(
                'name' => $menuItem->name,
                'slug' => Str::of($menuItem->name)->slug(),
                'description' => $menuItem->description,
                'price' => $menuItem->price
            ));
            try {
                $pizza->addMediaFromUrl($menuItem->imageUrl)->toMediaCollection();
            } catch (\Throwable $th) {
                dd($menuItem->imageUrl);
            }
        }
    }
}
