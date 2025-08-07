# Proyecto Cafetería - Barista

Una aplicación web moderna para una cafetería con funcionalidades de tienda, reservaciones y gestión de usuarios.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router v6** - Enrutamiento de la aplicación
- **Bootstrap 5** - Framework CSS para diseño responsive
- **SweetAlert2** - Librería para alertas y modales
- **React Calendly** - Integración de reservaciones

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd proyecto-cafeteria
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🚀 Despliegue en Vercel

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. La configuración está optimizada para el despliegue

### Configuración de Vercel

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── login/          # Páginas de autenticación
│   ├── register/       # Registro de usuarios
│   ├── tienda/         # Funcionalidades de tienda
│   └── seccion_1/      # Componentes de la página principal
├── assets/             # Imágenes y recursos estáticos
├── router/             # Configuración de rutas
└── services/           # Servicios y APIs
```

## 🔧 Configuración

El proyecto incluye:
- **Rutas protegidas** para usuarios autenticados
- **Responsive design** para móviles y tablets
- **Optimización de imágenes** y assets
- **Linting** con ESLint

## 📱 Características

- ✅ Autenticación de usuarios
- ✅ Catálogo de productos con categorías
- ✅ Sistema de carrito de compras
- ✅ Reservaciones online
- ✅ Diseño responsive
- ✅ Navegación intuitiva

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
