<?php
error_reporting(0);

function langDirection(){
<<<<<<< HEAD
    include dirname(__FILE__) . '/../lang/supportedLanguages.php';
    $currentLang = isset($_SESSION['language']) ? $_SESSION['language'] : 'sq';
    return isset($supportedLanguages[$currentLang]['direction']) ? $supportedLanguages[$currentLang]['direction'] : 'ltr';
=======
    include 'lang/supportedLanguages.php';
    return $supportedLanguages[$_SESSION['language']]['direction'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
}
?>