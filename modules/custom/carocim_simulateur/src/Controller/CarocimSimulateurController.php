<?php

namespace Drupal\carocim_simulateur\Controller;

// Core
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Session\AccountInterface;

// Service
use Drupal\carocim_simulateur\Service\CarocimSimulateurService;

class CarocimSimulateurController extends ControllerBase {

    private $carocimSimulateurService;

    public function __construct() {

        // Injection de dépendances
        $this->carocimSimulateurService = new CarocimSimulateurService();
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function index() {

        // Get an array of all 'carreau' node ids.
        $carreau_nids = \Drupal::entityQuery('node')
            ->condition('type', 'carreau')
            ->execute();

        // Chargement multiple
        $nodes = \Drupal::entityTypeManager()->getStorage('node')->loadMultiple($carreau_nids);

        $carreaux = [];
        foreach($nodes as $node) {
            // le code html ne sera pas interprété par cette approche
            //array_push($items, '<a href="/node/'.$node->id().'">'. $node->getTitle() .'</a>');
            array_push($carreaux, $node->getTitle());
        }
        //return new Response($str);
        $render = [
            '#theme' => 'carocim_simulateur_theme_hook',
            '#carreaux' => $carreaux,
            '#attached' => [
                'library' => [
                    'carocim_simulateur/carocim-simulateur'
                ]
            ]
        ];

        return $render;
    }

    /**
     * Gère les accès (public dans un 1er temps)
     *
     * @param \Drupal\Core\Session\AccountInterface $account
     *
     * @return \Drupal\Core\Access\AccessResultInterface
     */
    public function access(AccountInterface $account) {
        return in_array('editor', $account->getRoles())
            ? AccessResult::forbidden()
            : AccessResult::allowed();
    }
}