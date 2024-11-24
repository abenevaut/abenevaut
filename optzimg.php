<?php

$dir = getcwd();
$path = $dir . '/images/';
$files = scandir($path);

foreach ($files as $file) {

    echo "{$path}{$file}" . PHP_EOL;

    if (is_file("{$path}{$file}") && preg_match('/\.(png)$/', $file)) {
        $image = imagecreatefrompng("{$path}{$file}");
        imagewebp($image, "{$path}{$file}.webp");
        imagedestroy($image);
    }

    if (is_file("{$path}{$file}") && preg_match('/\.(jpg|jpeg)$/', $file)) {
        $image = imagecreatefromjpeg("{$path}{$file}");
        imagewebp($image, "{$path}{$file}.webp");
        imagedestroy($image);
    }

//    if (is_file("{$path}{$file}") && preg_match('/\.(svg)$/', $file)) {
//        $svg = file_get_contents("{$path}{$file}");
//        $image = new Imagick();
//        $image->readImageBlob($svg);
//        $image->setImageFormat("webp");
//        $image->writeImage("{$path}{$file}.webp");
//        $image->clear();
//    }
}
