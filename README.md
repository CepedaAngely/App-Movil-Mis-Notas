# 📝 Mis Notas

Aplicación móvil desarrollada como proyecto ABP para la gestión y organización de notas y tareas.

La aplicación permite visualizar notas, crear nuevas notas y eliminar notas. El proyecto se irá ampliando progresivamente durante la cursada a medida que se incorporen nuevos contenidos y funcionalidades.

## 👤 Integrante

- Angely Cepeda

## 📱 Descripción

**Mis Notas** es una aplicación móvil orientada a la organización de tareas y pendientes mediante notas.

Cada nota contiene:

- Título
- Descripción
- Estado

Los estados utilizados actualmente son:

- Pendiente
- En curso
- Hecho

La aplicación cuenta con una pantalla principal donde se visualizan las notas y un formulario para crear nuevas notas.



### Features Completadas

- [x] Visualizar listado de notas
- [x] Crear una nueva nota
- [x] Eliminar una nota
- [x] Mostrar título, descripción y estado de cada nota
- [x] Utilizar un componente reutilizable para representar las notas

### Previstas

- [ ] Editar notas
- [ ] Cambiar el estado de una nota
- [ ] Filtrar notas por estado
- [ ] Mejorar la organización visual del tablero
- [ ] Incorporar persistencia de datos
- [ ] Incorporar nuevas funcionalidades a medida que avance la cursada

## 🧩 Contenidos aplicados

En esta primera versión se aplican los siguientes contenidos trabajados durante la cursada:

- View
- Text
- Image
- ScrollView
- TextInput
- Button
- Componentes reutilizables
- Props
- useState
- useContext
- Context API
- Navegación entre pantallas

## 🗂️ Componente reutilizable

La aplicación utiliza el componente `NoteCard`, encargado de representar cada nota dentro del listado.

El componente recibe información mediante **props**, como:

- `title`
- `description`
- `status`
- `onEliminar`

Esto permite reutilizar el mismo componente para representar todas las notas de la aplicación.

## 🛠️ Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router

## 📌 Estado actual del proyecto

**Versión:** 1.0 - Unidad I

La primera versión de la aplicación se encuentra funcional y cumple con los contenidos solicitados para la Unidad I.

El proyecto continuará evolucionando durante la cursada mediante la incorporación progresiva de nuevas funcionalidades.