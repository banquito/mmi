<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

$app->get('/', function () use ($app) {
    $html = $app['twig']->render('home.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('homepage');

$app->get('/provincial', function () use ($app) {
    $html = $app['twig']->render('detalle_provincial.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('provincial');

$app->get('/odm', function () use ($app) {
    $html = $app['twig']->render('odm.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('odm');

$app->get('/contexto', function () use ($app) {
    $html = $app['twig']->render('contexto.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('contexto');

$app->get('/nosotros', function () use ($app) {
    $html = $app['twig']->render('nosotros.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('nosotros');

$app->get('/proyecto', function () use ($app) {
    $html = $app['twig']->render('proyecto.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('proyecto');

$app->get('/ayuda', function () use ($app) {
    $html = $app['twig']->render('ayuda.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('ayuda');

$app->get('/contacto', function () use ($app) {
    $html = $app['twig']->render('contacto.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('contacto');

$app->get('/popup/{template}', function ($template) use ($app) {
    $html = $app['twig']->render('popups/'.$template.'.html.twig');
    return new Response($html, 200, array('Cache-Control' => 's-maxage=3600, public'));
})->bind('popup');

$app->error(function (\Exception $e, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    $page = 404 == $code ? '404.html.twig' : '500.html.twig';

    return new Response($app['twig']->render($page, array('code' => $code)), $code);
});
