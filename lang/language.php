<?php
error_reporting(0);
if($_REQUEST['modfunc'] != 'logout'){
    
<<<<<<< HEAD
include(dirname(__FILE__) . '/supportedLanguages.php');
=======
include('lang/supportedLanguages.php');
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

if(isset($_REQUEST['language']) && in_array($_REQUEST['language'], array_keys($supportedLanguages))){
    $langCode = $_REQUEST['language'];
} elseif(isset($_SESSION['language'])){
    $langCode = $_SESSION['language'];
} elseif (isset($_COOKIE['remember_me_lang'])){
    if(in_array($_COOKIE['remember_me_lang'], array_keys($supportedLanguages))){
        $langCode = $_COOKIE['remember_me_lang'];
    }
}

if(!isset($langCode)){
    $langCode = 'sq';
}

<<<<<<< HEAD
include dirname(__FILE__) . "/lang_".$langCode.".php";
=======
include "lang/lang_".$langCode.".php";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    $_SESSION['language'] = $langCode;

}

?>