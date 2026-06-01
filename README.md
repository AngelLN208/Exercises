# Exercises
Presentación de ejercicios de la practica calificada 02

# 📚 Práctica Calificada — Gestor de Tareas Académicas

Sistema web para la gestión de tareas académicas, desarrollado como práctica del curso de Angular. Permite registrar, visualizar, editar y eliminar tareas con seguimiento de estado y prioridad.

---

## 🌐 Demo en producción

| Componente | URL |
|------------|-----|
| Frontend (Vercel) | [https://exercises-alpha.vercel.app](https://exercises-alpha.vercel.app/#/) |
| Backend / Swagger (Render) | [https://ejercicio4-ehjb.onrender.com/swagger-ui/index.html](https://ejercicio4-ehjb.onrender.com/swagger-ui/index.html) |

> El backend está alojado en Render (plan gratuito). La primera solicitud puede tardar unos segundos en responder si el servidor estuvo inactivo.

---

## 🛠️ Tecnologías utilizadas

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Lombok
- Jakarta Validation
- Springdoc OpenAPI (Swagger)

### Frontend
- Angular 19
- TypeScript
- Bootstrap 5
- RxJS

---

## 📁 Estructura del proyecto

```
Exercises/
├── backend/
│   └── src/main/java/com/UTP/PC02/
│       ├── config/        # Configuración CORS
│       ├── controller/    # TareaController
│       ├── dto/           # TareaDTO
│       ├── model/         # Tarea, Estado, Prioridad
│       ├── repository/    # TareaRepository
│       └── service/       # TareaService
└── frontend/
    └── src/app/
        ├── components/
        │   ├── inicio/
        │   ├── tareas/
        │   ├── nueva-tarea/
        │   └── editar-tarea/
        ├── models/        # tarea.model.ts
        └── services/      # tarea.service.ts
```

---

## 🗂️ Modelo de datos

### Tarea

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Long | Identificador único (autogenerado) |
| `titulo` | String | Título de la tarea |
| `curso` | String | Materia o curso asociado |
| `fechaEntrega` | LocalDate | Fecha límite de entrega |
| `fechaCreacion` | LocalDate | Fecha de registro (autogenerada) |
| `estado` | Enum | `PENDIENTE`, `ENTREGADO`, `VENCIDO`, `CANCELADO` |
| `prioridad` | Enum | `BAJA`, `MEDIA`, `ALTA` |

> `estado` y `fechaCreacion` se asignan automáticamente al crear una tarea (`@PrePersist`).

---

## 📡 Endpoints de la API

Base URL: `https://ejercicio4-ehjb.onrender.com/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/tareas` | Obtener todas las tareas |
| `GET` | `/tareas/{id}` | Obtener tarea por ID |
| `POST` | `/tareas` | Crear nueva tarea |
| `PUT` | `/tareas/{id}` | Actualizar tarea existente |
| `DELETE` | `/tareas/{id}` | Eliminar tarea |

### Ejemplo de body para POST

```json
{
  "titulo": "Resolver ejercicios de integrales",
  "curso": "Cálculo",
  "fechaEntrega": "2026-06-15",
  "prioridad": "ALTA"
}
```

### Ejemplo de body para PUT

```json
{
  "titulo": "Resolver ejercicios de integrales",
  "curso": "Cálculo",
  "fechaEntrega": "2026-06-15",
  "prioridad": "ALTA",
  "estado": "ENTREGADO"
}
```

---

## ✅ Validaciones

### Backend (DTO)
- `titulo` y `curso`: no pueden estar vacíos (`@NotBlank`)
- `fechaEntrega`: obligatoria y debe ser una fecha futura (`@NotNull`, `@Future`)
- `prioridad` y `estado`: obligatorios y deben coincidir con los valores del enum (`@NotNull`)

### Frontend (Angular)
- Todos los campos del formulario son requeridos
- Se muestra mensaje de error si se intenta guardar con campos vacíos
- Alerta de éxito o error tras cada operación

---

## 🚨 Alertas visuales

En la vista de tareas se muestran badges de alerta según el estado:

- **⚠️ Vencida** — cuando el estado es `VENCIDO`
- **🔥 Urgente** — cuando la prioridad es `ALTA` y el estado es `PENDIENTE`

---

## 🚀 Ejecución local

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Requiere PostgreSQL corriendo localmente. Configurar credenciales en `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_bd
spring.datasource.username=postgres
spring.datasource.password=tu_password
spring.jpa.hibernate.ddl-auto=update
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

Acceder en: `http://localhost:4200`

---

