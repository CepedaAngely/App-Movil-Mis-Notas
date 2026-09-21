# 📝 Mis Notas

Aplicación móvil desarrollada como proyecto ABP para la gestión y organización de notas y tareas.

La aplicación permite visualizar, crear, editar y eliminar notas, cambiar su estado y filtrarlas por estado. El proyecto se irá ampliando progresivamente durante la cursada a medida que se incorporen nuevos contenidos y funcionalidades.

## 👤 Integrante

- Angely Cepeda

## 📱 Descripción

**Mis Notas** es una aplicación móvil orientada a la organización de tareas y pendientes mediante notas.

Cada nota contiene:

- Título
- Descripción
- Estado

Los estados utilizados son:

- Pendiente
- En curso
- Hecho

## ✅ Features

### Completadas

- [x] Consultar el listado de notas
- [x] Crear una nueva nota
- [x] Editar una nota
- [x] Eliminar una nota
- [x] Cambiar el estado de una nota (Pendiente → En curso → Hecho)
- [x] Filtrar notas por estado

### Previstas

- [ ] Incorporar persistencia de datos
- [ ] Incorporar nuevas funcionalidades a medida que avance la cursada

## 🧩 Contenidos aplicados

- View, Text, Image, ScrollView, TextInput
- Componentes reutilizables y props
- useState y useContext
- FlatList (`data`, `keyExtractor`, `renderItem`)
- TouchableOpacity para botones personalizados
- Íconos con `@expo/vector-icons` (Ionicons)
- Navegación con expo-router
- Inmutabilidad del estado con `.map()`, `.filter()` y spread operator

## ▶️ Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```