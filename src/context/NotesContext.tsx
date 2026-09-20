import { createContext, useContext, useState } from 'react';

export type Nota = {
  id: string;
  title: string;
  description: string;
  status: string;
};

type NotesContextType = {
  notas: Nota[];
  agregarNota: (titulo: string, descripcion: string) => void;
  editarNota: (id: string, titulo: string, descripcion: string) => void;
  eliminarNota: (id: string) => void;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notas, setNotas] = useState<Nota[]>([
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
  ]);

  const agregarNota = (titulo: string, descripcion: string) => {
    const nuevaNota: Nota = {
      id: Date.now().toString(),
      title: titulo,
      description: descripcion,
      status: 'Pendiente',
  
    };

   
    setNotas((notasActuales) => [...notasActuales, nuevaNota]);
  };

   const editarNota = (
    id: string,
    titulo: string,
    descripcion: string
) => {
  setNotas((notasActuales) =>
    notasActuales.map((nota) =>
      nota.id === id
        ? {
            ...nota,
            title: titulo,
            description: descripcion,
          }
        : nota
    )
  );
};
const eliminarNota = (id: string) => {
    setNotas((notasActuales) =>
    notasActuales.filter((nota) => nota.id !== id)
    );
    };

  return (
  <NotesContext.Provider value={{ notas, agregarNota, editarNota, eliminarNota }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error('useNotes debe utilizarse dentro de NotesProvider');
  }

  return context;
}