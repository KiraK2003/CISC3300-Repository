<?php

use Exception;
use Error;

try
{
    if(true)
    {
        throw new Exception('Error!');
    }
    
}

catch(Error $e)
    {
        echo 'Caught Exception' .$e->getMessage();
    }
?>