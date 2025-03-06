<?php
$name = "Kira";
echo "Hi! My name is " . $name . "<br>";
include 'inclass14.html';

class Dog {

    //properties, with member visibility
    public $name;
    public $age;

    //constructor
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    //method
    public function bark() {
        echo 'bark';
    }



}
?>