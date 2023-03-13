<?php

namespace App\Config;

use Symfony\Component\Config\Loader\FileLoader;
use Symfony\Component\Yaml\Yaml;

class ConfigLoader
{
    /**
     * @var array The configuration file loaded
     */
    private $config;

    private function load(string $resource)
    {
        $configValues = Yaml::parse(file_get_contents($resource));
        if (!is_null($configValues)) {
            if (is_array($configValues)) {
                return $configValues;
            } else {
                throw new \Exception('Le fichier de configuration n\'est pas un tableau valide.');
            }
        } else {
            throw new \Exception('Fichier de configuration vide.');
        }
    }

    private function supports(string $resource)
    {
        if (is_string($resource) && 'yaml' === pathinfo(
            $resource,
            PATHINFO_EXTENSION
        )) {
            return true;
        } else {
            throw new \Exception('Fichier de configuration invalide.');
        }
    }

    public function loadConfig(string $configFile)
    {
        try {
            if ($this->supports($configFile)) {
                $config = $this->load($configFile);
                $this->config = $config;
            }
        } catch (\Exception $e) {
            throw new \Exception($configFile .' : ' . $e->getMessage());
        }

        return $this;
    }

    public function get(?string $key)
    {
        if ((string) $key !== '' && isset($this->config[$key])) {
            return $this->config[$key];
        } else {
            throw new \Exception('Clé ' . $key . ' du tableau introuvable');
        }
    }
}