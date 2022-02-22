# Teste prático

Projeto Teste prático.

## 🚀 Começando

Essas instruções são as instruções para execução do projeto.

Consulte **Instalação** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
- PHP 7+ (versão utilizada 7.4.20)
- MySQL 5.7+
```


### 🔧 Instalação

Para realizar a instalação, seguir os seguintes passos:

```
1) Realizar instalação dos pré-requisitos
2) Configurar o arquivo .env com as informações do seu banco (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
3) Executar no terminal (composer install)
4) Exectuar as Migrations/Seeders do laravel (php artisan migrate --seed)
    -- Se as tabelas já existirem em seu banco (php artisan migrate:refresh --seed)
5) Gerar as chaves do laravel (php artisan key:generate)
6) Finalizada a instalação, para visualizar o projeto basta executar: php artisan serve
```


### SQL - Relatório de relevancia de produtos

```
SELECT
tag.name as tag_name,
COUNT(product_tag.product_id) AS qtd_products
FROM tag INNER JOIN product_tag ON tag.id = product_tag.tag_id
GROUP BY tag.name
```


## 🛠️ Construído utilizando


- [Laravel](https://laravel.com/) - Framework PHP livre para o desenvolvimento de sistemas web

- [Vue.js](https://cli.vuejs.org/) - Framework para desenvolvimento da interface
- [Vuetify](https://vuetifyjs.com/en/) - Biblioteca UI para Vue.js

