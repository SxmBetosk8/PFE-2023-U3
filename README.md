
# Repositorio Unidad III: Framework Javascript  
# Ejemplos y ejercicios  
>Docente: Enrique Palacios  
___  
## Proyecto de demostraciones  
### Objetivo general  
Establecer un repositorio centralizado y versionado, que permita facilitar la entrega de material de forma pragmática enfocado en la adquisición de competencias asociadas al framework javascript.  
### Objetivos específicos  
1) Interiorizar acerca de los procedimientos de uso para repositorios de control de versiones remotos en los alumnos  
2) Presentar el flujo de trabajo de proyectos asociados al entorno de trabajo en Javascript con NodeJs y la librería ReactJs  
3) Comprender e implementar características básicas como componentes, estados, rutas y hooks desde la librería de ReactJs  
4) Simular la interacción entre entornos Frontend y Backend a través de peticiones de cliente en Javascript  
### Requisitos  
- (entorno) NodeJs 18.16.1 LTS (soporte extendido)  
- (gestor de paquetes) Npm 8.3.1 ó Yarn 1.22.19  
  
> Pueden existir diferencias menores de versiones entre las presentadas. Considere que sean versiones con numeración cercana y actualizada, nunca inferiores a los requisitos.  
  
  
### Instalación de Yarn  
De preferencia, se utilizará el gestor de paquetes [Yarn](https://yarnpkg.com/getting-started/install).  
```  
corepack enable  
npm i -g corepack  
```  
  
### Comandos de diagnóstico y verificación  
Versión de NodeJS  
```  
node -v  
v18.16.1  
```  
Versión de NPM  
```  
npm -v  
8.3.1  
```  
Versión de Yarn  
```  
yarn -v  
1.22.19  
```  
  
## Recrear el proyecto  
Desde el CLI, acceder al directorio local de este proyecto una vez clonado para restablecer las dependencias.  
  
Usando Yarn (_recomendado_)  
```  
yarn  
```  
  
Usando Npm  
  
`npm i` ó  
`npm install`  
___  
## Ejecutar el servidor web del proyecto  
En el directorio del proyecto se ejecutará el servidor en entorno de desarrollo a través del siguiente comando:  
```  
yarn dev  
```  
  
Resultado aproximado:  
```  
yarn run v1.22.19  
$ vite  
  
VITE v4.3.9 ready in 608 ms  
  
➜ Local: http://localhost:5173/  
➜ Network: use --host to expose  
➜ press h to show help  
```  
  
> #### Acceder a la aplicación web  
> La url presentada en `Local` será el servidor web por donde se accede al sitio web / aplicación de React. En este caso, se debe ingresar desde un navegador web a `http://localhost:5173`  
  
> #### ¿Cómo detener el servidor en React?  
> Al igual que casi cualquier app en CLI, se utiliza la combinación de teclas `Ctrl+C`  
  
### Estructura del proyecto  
La estructura del nuevo proyecto debería ser aproximadamente la siguiente:  
  
```  
.  
├── dist/  
├── node_modules/  
├── public/  
│ └── vite.svg  
├── documentacion/  
│ ├── inicio_rapido.html  
│ ├── estados.html  
│ ├── estados.html  
├── src/  
│ ├── assets/  
│ │ └── react.svg  
│ ├── App.css  
│ ├── App.jsx  
│ ├── index.css  
│ └── main.jsx  
├── .eslintrc.cjs  
├── .gitignore  
├── index.html  
├── package.json  
├── vite.config.js  
└── yarn.lock  
```  
  
Cabe señalar la funcionalidad de cada directorio y/o archivo:  
  
- `dist/`: Directorio generado cuando se genera un compilado para producción, puede que no sea mostrado si nunca se ha ejecutado `yarn build`  
- `node_modules/`: Directorio donde se almacenan las librerías necesarias para el funcionamiento del servidor web y la aplicación de React. No se debe modificar ni tampoco enviar para la evaluación.  
  
- `public/`: Directorio donde se almacenan elementos que deseamos importar desde la página web desde su `index.html`, aquí se incluyen archivos css externos como íconos a través de hojas de estilo, algunas imágenes como el ícono del sitio y webfonts.  
- `src/`: Directorio donde se trabajará todo el código fuente relativo a la aplicación de React por sí. En este directorio existen archivos importantes, tales como:  
- `main.jsx`: Punto de entrada de la aplicación, es el primer elemento de Javascript que será cargado y que posteriormente invocará a la "`App`" (componente)  
- `App.jsx`: Componente principal donde se muestra la página web. Es el punto de partida para el desarrollador.  
  
  
* `.eslintrc.cjs`: Archivo de reglas para la escritura estricta de Javascript.  
  
* `.gitignore`: Archivo de configuración git que permite indicar archivos y/o directorios que se omitirán al subir el repositorio a un servidor remoto. Se suele recomendar a los alumnos añadir al comienzo las siguientes líneas (si es que utilizan Visual Studio Code o Webstorm) para omitir directorios creados por editores o IDE's.  
```  
.vscode/  
.idea/  
```  
  
* `index.html`: Documento de hipertexto que se cargará al inicio de la aplicación, donde se encuentra la etiqueta de origen que cargará los componentes de React.  
  
* `package.json`: Documento propio de proyectos de node que indica configuraciones, librerías, dependencias y compiladores de aplicaciones javascript.  
  
* `vite.config.js`: Configuración para plantilla inicial vite.  
___  
  
## Librerías utilizadas  
| Nombre | Tipo | Enlace |  
| :------------------------------------------------- |  
| react-router-dom | Enrutador | [https://reactrouter.com/en/main/start/tutorial]() |  
___  
## Enlaces relacionados  
- [NodeJS Oficial](https://www.nodejs.org/)  
- [Yarn Package Manager](https://yarnpkg.com)
