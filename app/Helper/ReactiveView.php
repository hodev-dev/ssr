<?php

namespace App\Helper;

class ReactiveView
{
    public $blade;
    public $config;
    
    function __construct($_config,$_blade= '_app')
    {
        $this->config = $_config;
        $this->blade = $_blade;
    }

    public function page(){
        return view($this->blade)->with('page',$this->config['page'].'.js')->with('config',json_encode($this->config));
    }
} 