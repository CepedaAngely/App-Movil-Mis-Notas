import { create } from 'zustand';

export type Nota = {
  id: string;
  title: string;
  description: string;
  status: string;
};

type NotesStore = {
  notas: Nota[];
  agregarNota: (titulo: string, descripcion: string) => void;
  editarNota: (id: string, titulo: string, descripcion: string) => void;
  cambiarEstado: (id: string) => void;
  eliminarNota: (id: string) => void;
};

const ESTADOS = ['Pendiente', 'En curso', 'Hecho'];

export const useNotesStore = create<NotesStore>((set) => ({
  notas: [
    {
      id: '1',
      title: 'Comprar alimentos',
      description: 'Comprar las cosas necesarias para la semana.',
      status: 'Pendiente',
    },
    {
      id: '2',
      title: 'Estudiar React',
      description: 'Repasar componentes, props y estados.',
      status: 'En curso',
    },
    {
      id: '3',
      title: 'Trabajo práctico',
      description: 'Terminar la documentación del proyecto.',
      status: 'Hecho',
    },
    {
      id: '4',
      title: 'Organizar apuntes',
      description: 'Ordenar los apuntes de la materia.',
      status: 'Pendiente',
    },
  ],

  agregarNota: (titulo, descripcion) => {
    const nuevaNota: Nota = {
      id: Date.now().toString(),
      title: titulo,
      description: descripcion,
      status: 'Pendiente',
    };

    set((state) => ({ notas: [...state.notas, nuevaNota] }));
  },

  editarNota: (id, titulo, descripcion) => {
    set((state) => ({
      notas: state.notas.map((nota) =>
        nota.id === id
          ? { ...nota, title: titulo, description: descripcion }
          : nota
      ),
    }));
  },

  cambiarEstado: (id) => {
    set((state) => ({
      notas: state.notas.map((nota) => {
        if (nota.id !== id) {
          return nota;
        }

        const posicion = ESTADOS.indexOf(nota.status);
        const siguiente = ESTADOS[(posicion + 1) % ESTADOS.length];

        return { ...nota, status: siguiente };
      }),
    }));
  },

  eliminarNota: (id) => {
    set((state) => ({
      notas: state.notas.filter((nota) => nota.id !== id),
    }));
  },
}));