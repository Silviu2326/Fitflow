# FitFlow Pro

## Descripción
Una plataforma todo-en-uno diseñada para entrenadores personales independientes que buscan optimizar su negocio. Combina la gestión de clientes, la creación de planes personalizados y la automatización de pagos en una interfaz simple e intuitiva.

## Páginas
1. **Página de Inicio (Landing Page)** (/)
   - Página principal de marketing que presenta la propuesta de valor de FitFlow Pro. Destaca características clave, beneficios, testimonios y contiene llamadas a la acción (CTA) claras para el registro. Es el primer punto de contacto para atraer a nuevos entrenadores.

2. **Registro de Entrenador** (/signup)
   - Formulario donde los entrenadores personales pueden crear una nueva cuenta. Solicita información esencial (nombre, email, contraseña) y puede incluir la selección de un plan de suscripción para iniciar el periodo de prueba o el pago.

3. **Dashboard Principal** (/dashboard)
   - La primera pantalla que ve el entrenador al iniciar sesión. Ofrece una vista general y rápida de su negocio: clientes activos, próximas sesiones, ingresos del mes, y notificaciones importantes. Actúa como el centro de mando de la aplicación.

4. **Gestión de Clientes** (/clients)
   - Un listado completo y centralizado de todos los clientes del entrenador. Permite añadir nuevos clientes, buscar, filtrar y acceder al perfil detallado de cada uno con un solo clic.

5. **Perfil del Cliente** (/clients/{clientId})
   - Vista detallada de un cliente específico. Muestra su información de contacto, los planes de entrenamiento y nutrición asignados, seguimiento de progreso (fotos, medidas, etc.), historial de pagos y notas privadas del entrenador.

6. **Creador de Planes** (/plans/builder)
   - Herramienta interactiva para diseñar planes de entrenamiento y/o nutrición personalizados. Debe tener una biblioteca de ejercicios, permitir definir series, repeticiones, descansos y la capacidad de guardar planes como plantillas reutilizables.

7. **Pagos y Facturación** (/billing)
   - Sección para gestionar el aspecto financiero del negocio. El entrenador puede ver sus ingresos, conectar su cuenta de pagos (ej. Stripe), gestionar las suscripciones de sus clientes y ver un historial detallado de transacciones.

## Componentes Globales
- **Button**: Componente reutilizable para botones
- **Table**: Componente reutilizable para tablas
- **Sidebar**: Navegación principal

## Arquitectura
- Basada en features
- Cada feature en su propia carpeta
- Componentes globales mínimos

## Estructura de Carpetas
```
src/
├── components/           # Componentes globales reutilizables
├── features/            # Features organizadas por funcionalidad
│   ├── pagina-de-inicio-landing-page/
│   ├── registro-de-entrenador/
│   ├── dashboard-principal/
│   ├── gestion-de-clientes/
│   ├── perfil-del-cliente/
│   ├── creador-de-planes/
│   └── pagos-y-facturacion/
├── hooks/               # Hooks globales
└── styles/              # Estilos adicionales
```

## Tecnologías
- React + TypeScript
- React Router DOM
- Tailwind CSS
- Lucide React (iconos)