// Forma de cada tarea que devuelve la API
export type Idea = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

// Forma de la respuesta completa
export type RespuestaIdeas = {
  todos: Idea[];
  total: number;
  skip: number;
  limit: number;
};

const URL_IDEAS = 'https://dummyjson.com/todos';

export async function obtenerIdeas(): Promise<RespuestaIdeas> {
  const respuesta = await fetch(`${URL_IDEAS}?limit=10&skip=0`);

  // fetch no da error por su cuenta si el servidor responde 404 o 500: hay que revisarlo
  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar las ideas.');
  }

  return respuesta.json();
}