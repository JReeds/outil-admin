<?php

namespace App\Service;

use App\Config\ConfigLoader;

class AdminManager
{
    /**
     * @var ConfigLoader Administration config
     */
    private $adminConfig;

    /**
     * @var string Administration config file
     */
    private $adminConfigFile;

    public function __construct(ConfigLoader $loader, string $adminConfigFile)
    {
        $this->adminConfigFile = $adminConfigFile;
        $this->adminConfig = $loader->loadConfig($this->adminConfigFile);
    }

    private function get(?string $key)
    {
        try {
            $item = $this->adminConfig->get($key);

            return $item;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    public function getSiteName()
    {
        return (string) $_ENV['SITE_NAME'];
    }

    public function getMainMenu()
    {
        return $menu = $this->adminConfig->get('menu');
    }
}