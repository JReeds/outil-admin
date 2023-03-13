<?php

namespace App\Controller\Admin;

use App\Entity\Page;
use App\Form\Admin\AdminPageType;
use App\Repository\PageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/pages', name: 'admin_page_')]
class AdminPageController extends AbstractController
{
    /**
     * @var PageRepository The Page Repository
     */
    private $repository;

    /**
     * @var EntityManagerInterface The entity manager interface
     */
    private $em;

    public function __construct(PageRepository $repository, EntityManagerInterface $em)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    #[Route('/', name: 'list')]
    public function list(): Response
    {
        $pages = $this->repository->findAll();

        return $this->render('admin/pages/index.html.twig', [
            'pages' => $pages,
        ]);
    }

    #[Route('/new', name: 'new')]
    public function new(Request $request): Response
    {
        $page = new Page();
        $form = $this->createForm(AdminPageType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($page);
            $this->em->flush();
            $this->addFlash('success', 'Page ajoutée avec succès');

            return $this->redirectToRoute('admin_page_list');
        }

        return $this->render('admin/pages/new.html.twig', [
            'page' => $page,
            'form' => $form->createView()
        ]);
    }

    #[Route('/{id}', name: 'edit', requirements: ['id' => '\d+'])]
    public function edit(Page $page, Request $request): Response
    {
        if (null === $task = $this->em->getRepository(Page::class)->find($page->getId())) {
            throw $this->createNotFoundException('No task found for id '.$page->getId());
        }

        $form = $this->createForm(AdminPageType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($page);
            $this->em->flush();
            $this->addFlash('success', 'Page modifiée avec succès');

            return $this->redirectToRoute('admin_page_list');
        }

        return $this->render('admin/pages/edit.html.twig', [
            'page' => $page,
            'form' => $form->createView()
        ]);
    }
}