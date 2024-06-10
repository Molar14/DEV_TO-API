# DEV_TO-API

## Dependencies ussed:

bcryptjs: 2.4.3

cors: 2.8.5

dotenv: 16.4.5

express: 4.19.2

http-errors: 2.0.0

jsonwebtoken: 9.0.2

mongoose: 8.4.1


## Instalacion:

1. Crear el archivo **.env** 
2. Llenar el **.env** usando las variables que encontrarás en el archivo **example.env**.
3. Instalar las dependencias usando el sig **comando en terminal**:
~~~
npm install bcryptjs && npm install cors && npm install dotenv && npm install express && npm install http-errors && npm install jsonwebtoken && npm install mongoose
~~~
4. Usar el sig **comando en terminal**:
~~~
npm run dev
~~~

## REGISTRO DE USUARIOS:

Usar el sig endpoint usando el metodo POST:
~~~
http://localhost:PORT/user
~~~
Ejemplo de Json en body para el registro:
~~~
{
    "name":"lorem ipsum",
    "ProfilePic":"https://picsum.photos/200/300",
    "email":"Correofake@ejemplo.com",
    "password":"CONTRASEÑA123"
}
~~~

### CONSULTA UN USUARIO POR ID

Usar el sig endpoint usando el metodo POST:
~~~
http://localhost:PORT/user/ID
~~~
Sidenote: Remplazar ID con el ID del usuario que se necesita

### INICIAR SESIÓN

Usar el sig endpoint usando el metodo POST:
~~~
http://localhost:PORT/auth/login
~~~
Ejemplo de Json en body para el registro:
~~~
{
    "email":"Correofake@ejemplo.com",
    "password":"CONTRASEÑA123"
}
~~~
Sidenote: Copiar el **token** y pegarlo en la sección de **Headers** la opción de **Authorization** verifica que la casilla esté palomeada

### NUEVO POST

Usar el sig endpoint usando el metodo POST:
~~~
http://localhost:PORT/posts
~~~
Ejemplo de Json en body:
~~~
{
    "title": "TITULO LLAMATIVO",
    "image": "https://picsum.photos/200/300",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut justo in enim dapibus egestas in eu nisi."
}
~~~
Sidenote: Es necesario estar logeado para este metodo

### LISTAR POSTS

Usar el sig endpoint usando el metodo GET:
~~~
http://localhost:PORT/posts
~~~

### ACTUALIZAR POSTS

Usar el sig endpoint usando el metodo POST:
~~~
http://localhost:PORT/posts/ID
~~~ 
Ejemplo de Json en body:
~~~
{
    "title": "NUEVO TITULO LLAMATIVO",
    "image": "https://picsum.photos/200/300",
    "body": "Suspendisse ut justo in enim dapibus egestas in eu nisi."
}
~~~
Sidenote: Es necesario estar logeado con el usuario dueño del post para este metodo

Sidenote2: Reemplazar ID con el ID de la publicacion