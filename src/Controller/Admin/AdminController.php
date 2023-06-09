<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

#[Route('/admin', name: 'admin_')]
class AdminController extends AbstractController
{

    #[Route('/', name: 'index')]
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }
}