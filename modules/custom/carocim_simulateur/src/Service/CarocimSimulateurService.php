<?php

namespace Drupal\carocim_simulateur\Service;

use Drupal\node\Entity\Node;

class CarocimSimulateurService {

    public function getAllCarreaux() {

        // Get an array of all 'carreau' node ids.
        $carreau_nids = \Drupal::entityQuery('node')
            ->condition('type', 'carreau')
            ->execute();

        // Load all the carreaux.
        $carreaux = Node::loadMultiple($carreau_nids);

        return $carreaux;
    }
}