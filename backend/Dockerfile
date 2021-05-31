FROM php:7.4-apache
WORKDIR /var/www/html
RUN docker-php-ext-install mysqli pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get update && apt-get --assume-yes install zip
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
COPY . .
RUN a2enmod rewrite
RUN composer install
#RUN php artisan migrate --seed
#RUN service apache2 restart
#RUN service apache2 restart
#ENTRYPOINT ["a2enmod", "rewrite"]
#ENTRYPOINT ["service", "apache2", "restart"]
#ENTRYPOINT ["composer", "install"]
#ENTRYPOINT ["php", "artisan", "migrate", "--seed"]
#ENTRYPOINT ["tail", "-f", "/var/log/apache2/access.log"]