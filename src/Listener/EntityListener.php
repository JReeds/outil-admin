<?php

namespace App\Listener;

use Doctrine\Orm\Event\PrePersistEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;

class EntityListener
{
    public function prePersist(PrePersistEventArgs $args)
    {
        $entity = $args->getObject();
        
        $entity->setCreatedAt(new \DateTimeImmutable());
        $entity->setUpdatedAt(new \DateTimeImmutable());
        $entity->setTrash(false);
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        $entity->setUpdatedAt(new \DateTimeImmutable());
    }
}
