<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230310180014 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE page CHANGE `delete` trash TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE page_article CHANGE `delete` trash TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE page_article_media CHANGE `delete` trash TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE `delete` trash TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE page CHANGE trash `delete` TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE page_article CHANGE trash `delete` TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE page_article_media CHANGE trash `delete` TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE trash `delete` TINYINT(1) NOT NULL');
    }
}
