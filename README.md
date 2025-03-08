# Mocksy - Frontend

Breve descripción del proyecto y su propósito.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración del Entorno](#configuración-del-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Herramientas de Calidad de Código](#herramientas-de-calidad-de-código)
  - [ESLint y Prettier](#eslint-y-prettier)
  - [Commitlint y Husky](#commitlint-y-husky)
- [Storybook](#storybook)
- [Tailwind CSS](#tailwind-css)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/tu-proyecto.git
   cd tu-proyecto
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración del Entorno

Asegúrate de tener instalado Node.js (versión recomendada 22.x o superior).

### Plugins de Visual Studio Code

- Eslint
- Prettier: Seleccionar "Prettier - Code Formater" como default

### Scripts Disponibles

Estos son los comandos principales que puedes utilizar:

- npm run lint: Ejecuta ESLint en los archivos de src/ y tests/.
- npm run lint:fix: Ejecuta ESLint con auto-fix.
- npm run format: Ejecuta Prettier para formatear el código.
- npm run test: Ejecuta la suite de tests (Jest).
- npm run storybook: Inicia Storybook para ver los componentes de forma aislada.
- npm run build-storybook: Genera la versión estática de Storybook.

## Herramientas de Calidad de Código

### ESLint y Prettier

El proyecto usa ESLint en modo flat con TypeScript, React Hooks y Prettier.

ESLint se configura para:
Aplicar reglas de estilo y detectar errores.
Validar que se usen buenas prácticas (por ejemplo, prohibir var, exigir tipos explícitos, etc.).
Prettier se usa para formatear el código de forma consistente.
Ambas herramientas se integran mediante la extensión de VSCode y scripts de npm.
Para ejecutar ESLint, utiliza:

```bash
npx eslint --fix --max-warnings=0
```

### Commitlint y Husky

El proyecto utiliza Commitlint junto con Husky para validar que los mensajes de commit sigan el estándar Conventional Commits.

El archivo de configuración de Commitlint se encuentra en commitlint.config.cjs.
Husky está configurado para ejecutar el hook commit-msg y validar el mensaje de commit:
Archivo .husky/commit-msg

```bash
#!/usr/bin/env sh
npx commitlint --edit "$1"
```

### Storybook

Storybook está configurado para documentar y probar los componentes de la aplicación de forma aislada.

Los archivos de configuración se encuentran en la carpeta .storybook/.
Para iniciar Storybook, usa:

```bash
npm run storybook
```

### Tailwind CSS

El proyecto utiliza Tailwind CSS para el estilizado, junto con PostCSS y Autoprefixer.

La configuración de Tailwind se encuentra en tailwind.config.ts (usando TypeScript).
La configuración de PostCSS está en postcss.config.js.
En tu CSS principal (por ejemplo, src/index.css), se incluyen las directivas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
