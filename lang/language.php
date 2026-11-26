<?php
error_reporting(0);

if (session_status() === PHP_SESSION_NONE && !headers_sent()) {
    session_start();
}

$supportedLanguages = array(
    'sq' => array('name' => 'Shqip', 'direction' => 'ltr'),
    'en' => array('name' => 'English', 'direction' => 'ltr'),
    'fr' => array('name' => 'French', 'direction' => 'ltr'),
    'es' => array('name' => 'Spanish', 'direction' => 'ltr'),
    'ar' => array('name' => 'Arabic', 'direction' => 'rtl')
);

if (file_exists(dirname(__FILE__) . '/supportedLanguages.php')) {
    include_once dirname(__FILE__) . '/supportedLanguages.php';
}

$langCode = 'sq';
if (isset($_REQUEST['language']) && isset($supportedLanguages[$_REQUEST['language']])) {
    $langCode = $_REQUEST['language'];
} elseif (isset($_SESSION['language']) && isset($supportedLanguages[$_SESSION['language']])) {
    $langCode = $_SESSION['language'];
} elseif (isset($_COOKIE['remember_me_lang']) && isset($supportedLanguages[$_COOKIE['remember_me_lang']])) {
    $langCode = $_COOKIE['remember_me_lang'];
}

$langFile = dirname(__FILE__) . "/lang_" . $langCode . ".php";
if (file_exists($langFile)) {
    include_once $langFile;
} else {
    $fallbackFile = dirname(__FILE__) . "/lang_sq.php";
    if (file_exists($fallbackFile)) {
        include_once $fallbackFile;
    }
}

if (session_status() === PHP_SESSION_ACTIVE) {
    $_SESSION['language'] = $langCode;
}
?>
