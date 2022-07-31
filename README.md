# Corralón

## Instalaciones
**NOTA:** Si tienes algun problema al clonar el repositorio contacte al administrador de sistemas.
1. Clonear el repositorio.
    ```bash
   git clone git@github.com:matieckhardt/corralon.v2.1
    ```

2. `cd` al repositorio creado
    ```bash
    cd corralon.v2.1
    ```

3. Instalar dependencias.
    ```bash
    npm install
    ```

4. Correr server de desarrollo.
    ```bash
    npm start
    ```
    Esta aplicación correra en el puerto [`3000`](http://localhost:3000).

## Estructura
* `apis`: funciones que tocan el backend.

* `components`: componentes **reusables**.

* `contexts`: contextos.

* `helpers`: funciones de conveniencia reutilizables.

* `routes`: ruteo de la página.
  * `home`: página pública.
  * `admin`: panel de administrador. Debe estar protegido por login.
