# Laravel Sanctum SPA and React

![image](https://user-images.githubusercontent.com/61328786/177199014-1e75d7cb-3bac-4e05-82c1-29c18930f54a.png)


## Features

-   Laravel 9 (backend)
-   ReactJS (frontend)
-   Login, register, update profile
-   password reset
-   Authentication with Sanctum


### Requires

````
PHP 8 >
composer
npm 
````

## Installation

-   `git clone https://github.com/JohnClaudio/Laravel-Sanctum-SPA.git`  
-   `cd Laravel-Sanctum-SPA`
-   `php artisan key:generate`
-   `php artisan migrate`

-   Edit `.env` and set your database connection details and **your APP_URL** 

**IMPORTANT**  it is important to create and configure your .env file
add SESSION_DOMAIN and SANCTUM_STATEFUL_DOMAINS variables to localhost or to the url of your application

```
APP_URL=http://127.0.0.1
SESSION_DOMAIN=127.0.0.1
SANCTUM_STATEFUL_DOMAINS=127.0.0.1:3000
```

  still in the .env file configure your database authentication
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1 (localhost)
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=password
```



