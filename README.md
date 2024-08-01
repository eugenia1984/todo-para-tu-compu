# Trabajo integrador

## Proyecto: Desarrollo de un sitio web para una tienda online

---

### <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="libreta"/> CONSIGNA:

#### Descripción del Proyecto: 

Desarrollar un sitio web responsivo para una tienda online que permita a los usuarios explorar los productos desde diferentes dispositivos, como computadoras de escritorio, tablets y celulares (3 resoluciones).

#### Características del Sitio Web:

-<img width="48" height="48" src="https://img.icons8.com/fluency/48/monitor--v1.png" alt="monitor"/> **Frontend**:

-Diseño responsivo utilizando Bootstrap para garantizar una experiencia de usuario consistente en diferentes dispositivos y tamaños de pantalla.

-Página principal que muestra los productos destacados y las promociones actuales de la tienda.

-Páginas de categorías que permiten a los usuarios explorar productos por categorías específicas (definan máximo 2 categorías)

-Página de detalles del producto que muestra información detallada sobre un producto seleccionado (pueden trabajar con un máximo de 3 productos por categoría).

-<img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/> **Git**:

- Utilización de Git para el control de versiones del código fuente del proyecto.

- Implementación de ramas para trabajar en diferentes características o correcciones de forma aislada.

- Uso de commits descriptivos y mensajes claros para documentar los cambios realizados.

-**Entrega del Proyecto**:

- Desarrollo del sitio web completo, incluyendo frontend responsivo y optimizado para distintos dispositivos y orientaciones.

- Documentación del código que explique la estructura del proyecto, las decisiones de diseño y las funcionalidades implementadas.
Implementación de Git para el control de versiones del código y la colaboración entre los miembros del equipo.

---

## TECNOLOGÍAS UTILIZADAS:

<img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/>  HTML5 

<img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/> CSS3 

<img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v1.png" alt="bootstrap"/> BOOTSTRAP 

<img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript"/> JAVASCRIPT

---

## ¿ CÓMO NOS ORGANIZAMOS ?

- Creamos **issues** para repartirnos las tareas.

![image](https://github.com/user-attachments/assets/6f5fb3ac-1c8a-46e6-b333-bac313bd587e)

- En base a cada issue se crea una **branch** desde la branch **main**:

![image](https://github.com/user-attachments/assets/d291bbe3-f444-4d29-afb0-8548e3ed7490)

- Una vez que se completa una de las tareas se crea el **pull request** para poder hacer el merge con la branch **main**.

--- 

## ESTRUCTURA DEL PROYECTO

En al carpeta **assets** se guardaron todas las imagenes de los productos que se utilizan en la web.

En la carpeta **data** de creoa el archivo `products.json` con toda la informacón de los productos, para poder mostrar las páginas dinámicamente, creando parte del HTML con JavaScript, para no tener que repetir tanto cédigo de HTMl y no tener tantos archivos, como el caso del detalle del producto que mediante un parámetro de `id`en la URL se carga el producto correspondiente al id, reutilizndo el mismo archivo `product.html` para el detalle de todos los productos.

Pra hacer el proyecto escalable, se creo un archivo de `.css` para cada una de las páginas, en vez de tenerlo todo junto en un archivo, lo mismo con los archivos de `javascript`.


```
/tODO-PARA-TU-COMPU
│
├── /assets  // Para guardar imagenes
│   └── img // Todas las imagenes del proyecto
│
├── /css  // CSS personalizado
│   └── home.css
│   └── product.css
│   └── products.css
│   └── styles.css    
│
├── /data // El archivo JSON que tiene la informacion de los productos
│   └── products.json
│
├── /js
│   └── main.js // Archivo JavaScript personalizado para la home page
│   └── product.js // Archivo JavaScript personalizado para la página del detalle del producto
│   └── products.js // Archivo JavaScript personalizado para la página de productos
│
│
├── index.html        // Página principal
├── products.html     // Página de productos
├── product.html      // Página de detalles de producto
└── README.md         // Documentación del proyecto
```

---

## INTEGRANTES DLE PROYECTO:

- María Eugenia Costa
  
---

## <img width="48" height="48" src="https://img.icons8.com/cotton/48/paint-bucket.png" alt="paint-bucket"/> DISEÑO

En cuanto al diseño nos insporamos en las páginas de Nike, ADidas o Apple, donde utilizan principalmente los colores Blancos y Negros, y a veces destacan algún título con color.

Queríamso que sea una página sencilla, para que el usuario no se pierda entre tantas cosas e intuitivamente la pueda utilizar facilmente.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/play--v1.png" alt="play--v1"/> DEMO


Se puede ver en: [eugenia1984.github.io/todo-para-tu-compu](eugenia1984.github.io/todo-para-tu-compu)

- Página principal - Modo Desktop:


<img src="https://github.com/user-attachments/assets/ea042b9e-8deb-4c5e-b197-03183aa144fc" width="700" alt="pagina de inicio, vista desktop"/>

<img src="https://github.com/user-attachments/assets/66eb798e-2ee0-4e08-aef1-4bd95d63e735" width="700" alt="pagina de inicio, vista desktop"/>

- Página principal - Modo Mobil / Tablet:

<img src="https://github.com/user-attachments/assets/c59a5b4a-92e0-4f1e-97de-4d1f6e96e3a1" width="700" alt="pagina de inicio, vista celuar y tablet"/>

<img src="https://github.com/user-attachments/assets/eb549c72-208f-426f-a558-3844fcae9e43" width="700" alt="pagina de inicio, vista celuar y tablet"/>

En la parte de **productos destacados** el botnón de **Más info** lleva a al página de detalle del producto.

- Página de productos:

<img src="https://github.com/user-attachments/assets/7e9e65ca-5ba1-4742-993e-9a3430cb4b9c" width="700" alt="pagina de productos"/>

Haciendo click en el boton de **Más info** se va a la página del detalle del producto.

- Página de detalle del producto:

<img src="https://github.com/user-attachments/assets/01623f42-6dff-4800-adec-23f35ab63c62" width="700" alt="pagina de producto"/>

-> Siempre manteniendo el diseño responsive, vista de ejemplo en celular:

<img src="https://github.com/user-attachments/assets/f5d9194e-9960-46e7-9cca-d7842c48ce86" width="400" alt="pagina de producto, en celular"/>


---
