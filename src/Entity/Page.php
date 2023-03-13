<?php

namespace App\Entity;

use App\Model\Item;
use App\Repository\PageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PageRepository::class)]
class Page extends Item
{
    #[ORM\Column(length: 20)]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    protected ?string $cover;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'children')]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $children;

    #[ORM\OneToMany(mappedBy: 'Page', targetEntity: PageArticle::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $pageArticles;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->pageArticles = new ArrayCollection();
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

    /**
     * Get the value of cover
     */ 
    public function getCover(): ?string
    {
        return $this->cover;
    }

    /**
     * Set the value of cover
     *
     * @return  self
     */ 
    public function setCover(?string $cover): self
    {
        $this->cover = $cover;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChildren(self $children): self
    {
        if (!$this->children->contains($children)) {
            $this->children->add($children);
            $children->setParent($this);
        }

        return $this;
    }

    public function removeChildren(self $children): self
    {
        if ($this->children->removeElement($children)) {
            // set the owning side to null (unless already changed)
            if ($children->getParent() === $this) {
                $children->setParent(null);
            }
        }

        return $this;
    }

    public function setChildren(?string $children): self
    {
        $this->children = $children;

        return $this;
    }

    /**
     * @return Collection<int, PageArticle>
     */
    public function getPageArticles(): Collection
    {
        return $this->pageArticles;
    }

    public function addPageArticle(PageArticle $pageArticle): self
    {
        if (!$this->pageArticles->contains($pageArticle)) {
            $this->pageArticles->add($pageArticle);
            $pageArticle->setPage($this);
        }

        return $this;
    }

    public function removePageArticle(PageArticle $pageArticle): self
    {
        if ($this->pageArticles->removeElement($pageArticle)) {
            // set the owning side to null (unless already changed)
            if ($pageArticle->getPage() === $this) {
                $pageArticle->setPage(null);
            }
        }

        return $this;
    }
}
