export type Idea = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type RespuestaIdeas = {
  todos: Idea[];
  total: number;
  skip: number;
  limit: number;
};

const URL_IDEAS = 'https://dummyjson.com/todos';
export const IDEAS_POR_PAGINA = 10;

export async function obtenerIdeas(skip: number): Promise<RespuestaIdeas> {
  const respuesta = await fetch(`${URL_IDEAS}?limit=${IDEAS_POR_PAGINA}&skip=${skip}`);

  // fetch no da error por su cuenta si el servidor responde 404 o 500: hay que revisarlo
  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar las ideas.');
  }

  return respuesta.json();
}