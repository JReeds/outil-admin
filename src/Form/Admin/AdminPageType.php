<?php

namespace App\Form\Admin;

use App\Entity\Page;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AdminPageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                $builder->create('edition', FormType::class, [
                    'inherit_data' => true,
                    'label'        => false,
                    'row_attr'     => [
                        'class' => 'right_col'
                    ]
                ])
                ->add('status', ChoiceType::class, [
                    'choices'  => $this->getStatus(),
                    'expanded' => true,
                ])
                ->add('type', ChoiceType::class, [
                    'choices' => $this->getType(),
                ])
                ->add('parent', EntityType::class, [
                    'class'        => Page::class,
                    'required'     => false,
                    'choice_label' => 'getTitle'
                ])
                // ->add('cover')
                ->add('send', SubmitType::class, [
                    'label' => 'Send',
                ])
            )
            ->add(
                $builder->create('general', FormType::class, [
                    'inherit_data' => true,
                    'label'        => false,
                    'row_attr'     => [
                        'class' => 'content_col'
                    ]
                ])
                ->add(
                    $builder->create('general_infos', FormType::class, [
                        'inherit_data' => true,
                        'label'        => 'General Informations',
                    ])
                    ->add('title')
                    ->add('meta_title', TextType::class, [
                        'required' => false,
                    ])
                    ->add('meta_description', TextType::class, [
                        'required' => false,
                    ])
                )
                ->add(
                    $builder->create('general_articles', FormType::class, [
                        'inherit_data' => true,
                        'label'        => 'Articles',
                        'attr'         => [
                            'class' => 'clonable-lmt'
                        ]
                    ])
                    ->add('pageArticles', CollectionType::class, [
                        'entry_type'    => AdminPageArticleType::class,
                        'entry_options' => ['label' => false],
                        'allow_add'     => true,
                        'by_reference'  => false,
                        'attr'          => [
                            'class' => 'clonable-ctn'
                        ]
                    ])
                    ->add('add_article', ButtonType::class, [
                        'label' => 'Add article',
                        'attr'  => [
                            'class' => 'clonable-btn'
                        ]
                    ])
                )
            )
        ;

        // $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
        //     $page = $event->getData();
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

    public function getType() {
        $types = [
            "default" => "defaut",
            "home"    => "Page d'accueil",
        ];
        return $types;

        // $types = Page::TYPES;
        // $output = [];
        // foreach ($types as $k => $type) {
        //     $output[$type] = $k;
        // }
        // return $output;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Page::class,
            'attr' => [
                'class' => 'edit-form'
            ]
        ]);
    }
}
