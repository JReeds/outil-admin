<?php

namespace App\Form\Admin;

use App\Entity\PageArticle;
use App\Entity\PageArticleMedia;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class AdminPageArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('status', ChoiceType::class, [
                'choices' => $this->getStatus()
            ])
            ->add('position', NumberType::class, [
                'empty_data' => 0
            ])
            ->add('type', ChoiceType::class, [
                'choices'    => $this->getType($options['page-type']),
                'empty_data' => 'default'
            ])
            ->add('content', CKEditorType::class, array(
                'enable'    => false,
                'config'    => ['language' => 'fr'],
                'required'  => false,
                'attr'      => ['class' => 'ck-area']
            ));

        // $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
        //     $article = $event->getData();
        //     $form = $event->getForm();
        // });
    }

    public function getStatus() {
        $status = ['Inactive' => 0, 'Active' => 1];
        return $status;

        // $statuss = Page::STATUS;
        // $output = [];
        // foreach ($statuss as $k => $status) {
        //     $output[$status] = $k;
        // }
        // return $output;
    }

    public function getType($pageType = '') {
        $types = ["default" => "defaut"];
        return $types;

        // $types = Article::TYPES;
        // foreach ($types as $k => $type) {
        //     if (in_array($k, ['default', $pageType])) {
        //         foreach ($type['items'] as $i => $item) {
        //             $output[$type['name']][$item] = $i;
        //         }
        //     }
        // }
        // return $output;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PageArticle::class,
            'page-type' => null,
        ]);
    }
}
