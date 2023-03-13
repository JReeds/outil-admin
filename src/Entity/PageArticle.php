<?php

namespace App\Entity;

use App\Model\ItemArticle;
use App\Repository\PageArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PageArticleRepository::class)]
class PageArticle extends ItemArticle
{
    #[ORM\Column(length: 20)]
    private ?string $type = null;

    #[ORM\ManyToOne(inversedBy: 'pageArticles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Page $Page = null;

    #[ORM\OneToMany(mappedBy: 'PageArticle', targetEntity: PageArticleMedia::class, orphanRemoval: true)]
    private Collection $pageArticleMedia;

    public function __construct()
    {
        $this->pageArticleMedia = new ArrayCollection();
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getPage(): ?Page
    {
        return $this->Page;
    }

    public function setPage(?Page $Page): self
    {
        $this->Page = $Page;

        return $this;
    }

    /**
     * @return Collection<int, PageArticleMedia>
     */
    public function getPageArticleMedia(): Collection
    {
        return $this->pageArticleMedia;
    }

    public function addPageArticleMedium(PageArticleMedia $pageArticleMedium): self
    {
        if (!$this->pageArticleMedia->contains($pageArticleMedium)) {
            $this->pageArticleMedia->add($pageArticleMedium);
            $pageArticleMedium->setPageArticle($this);
        }

        return $this;
    }

    public function removePageArticleMedium(PageArticleMedia $pageArticleMedium): self
    {
        if ($this->pageArticleMedia->removeElement($pageArticleMedium)) {
            // set the owning side to null (unless already changed)
            if ($pageArticleMedium->getPageArticle() === $this) {
                $pageArticleMedium->setPageArticle(null);
            }
        }

        return $this;
    }
}
