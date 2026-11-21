<?php
error_reporting(0);

function langDirection(){
    include dirname(__FILE__) . '/../lang/supportedLanguages.php';
    $currentLang = isset($_SESSION['language']) ? $_SESSION['language'] : 'sq';
    return isset($supportedLanguages[$currentLang]['direction']) ? $supportedLanguages[$currentLang]['direction'] : 'ltr';
}
?>