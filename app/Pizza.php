<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Pizza extends Model implements HasMedia
{
    use InteractsWithMedia;
    
    public function orders() {
        return $this->belongsToMany(Order::class)->withTimestamps();
    }
}
