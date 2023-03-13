# outil-admin
Un outil d'administration sous Symfony

Environment variables to update (.env)
DB_USER
DB_PASS
DB_HOST
DB_NAME
SITE_NAME

By default database is set to mariadb-10.11.2
To change it, completely edit the DATABASE_URL environment variable. Ex: DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8"

A fixture to create a user is present.
To generate the database and load the fixture, issue the following commands :
php bin/console make:migration
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
