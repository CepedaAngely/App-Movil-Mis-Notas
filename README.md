# 📝 Mis Notas

Aplicación móvil desarrollada como proyecto ABP para la gestión y organización de notas y tareas.

La aplicación permite visualizar, crear, editar y eliminar notas, cambiar su estado, filtrarlas por estado y sumar ideas de tareas obtenidas desde una API pública. El proyecto se amplía progresivamente durante la cursada a medida que se incorporan nuevos contenidos.

## 👤 Integrante

- Angely Cepeda

## 📱 Descripción

**Mis Notas** es una aplicación móvil orientada a la organización de tareas y pendientes mediante notas.

Cada nota contiene título, descripción y estado. Los estados son **Pendiente**, **En curso** y **Hecho**.

La app tiene dos pestañas:

- **Mis notas:** listado de notas con filtro por estado y acceso a crear y editar.
- **Ideas:** tareas sugeridas obtenidas de la API pública [DummyJSON](https://dummyjson.com/docs/todos), con carga paginada. Cada idea se puede agregar a Mis notas.

## ✅ Features

### Completadas

- [x] Consultar el listado de notas
- [x] Crear una nueva nota
- [x] Editar una nota
- [x] Eliminar una nota
- [x] Cambiar el estado de una nota (Pendiente → En curso → Hecho)
- [x] Filtrar notas por estado
- [x] Navegación por pestañas (Mis notas / Ideas)
- [x] Respetar las zonas seguras de la pantalla (SafeArea)
- [x] Obtener ideas de tareas desde una API pública (fetch + TanStack Query)
- [x] Paginación con scroll infinito en Ideas
- [x] Agregar una idea sugerida como nota

### Previstas

- [ ] Persistencia de datos (que las notas no se pierdan al cerrar la app)
- [ ] Nuevas funcionalidades a medida que avance la cursada

## 🧩 Contenidos aplicados

| Clase | Contenido | Dónde se aplica |
|---|---|---|
| 1 | View, Text, Image, ScrollView, TextInput, componentes y props | `NoteCard`, `IdeaCard`, pantallas de crear y editar |
| 2 | StyleSheet, TouchableOpacity y ThemeProvider | Estilos y botones de todas las pantallas; tema en `app/_layout.tsx` |
| 3 | Navegación con expo-router: Stack, parámetros y Tabs | `app/_layout.tsx`, `app/(tabs)/_layout.tsx`; `editar-nota` recibe el `id` |
| 4 | FlatList, íconos, filtros, SafeArea y paginación | Listas de notas e ideas, `SafeAreaView`, `onEndReached` |
| 5 | Estado global con Zustand, fetch y TanStack Query | `store/useNotesStore.ts`, `services/ideasApi.ts`, `useInfiniteQuery` |

## 🛠️ Tecnologías

- React Native con Expo y TypeScript
- expo-router (Stack y Tabs)
- Zustand (estado global de las notas)
- TanStack Query (datos de la API, caché y paginación)
- react-native-safe-area-context (SafeArea)
- @expo/vector-icons (íconos)

## 📂 Estructura

```
src/
├── app/
│   ├── _layout.tsx        # Stack raíz y proveedores (TanStack Query, SafeArea, tema)
│   ├── crear-nota.tsx
│   ├── editar-nota.tsx
│   └── (tabs)/
│       ├── _layout.tsx    # Barra de pestañas
│       ├── index.tsx      # Mis notas
│       └── ideas.tsx      # Ideas (API y paginación)
├── components/
│   ├── NoteCard.tsx
│   └── IdeaCard.tsx
├── services/
│   └── ideasApi.ts        # fetch a la API de DummyJSON
└── store/
    └── useNotesStore.ts   # store de Zustand
```

