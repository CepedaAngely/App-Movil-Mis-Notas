import { useRouter } from 'expo-router';

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NoteCard from '@/components/NoteCard';
import { useNotes } from '@/context/NotesContext';

export default function HomeScreen() {

  const router = useRouter();
  const { notas, eliminarNota } = useNotes();
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.image}
        />

        <Text style={styles.title}>
          Mis Notas
        </Text>

        <Text style={styles.subtitle}>
          Organiza tus tareas y pendientes
        </Text>
        <Button
         title="Crear nueva nota"
         onPress={() => router.push('/crear-nota')}
        />

        <View style={styles.list}>
        {notas.map((nota) => (
        <NoteCard
          key={nota.id}
          title={nota.title}
          description={nota.description}
          status={nota.status}
          onEditar={() =>
          router.push({ pathname: '/editar-nota', params: { id: nota.id } })
        }
          onEliminar={() => eliminarNota(nota.id)}
       />
        ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    padding: 20,
    paddingTop: 50,
  },

  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 25,
  },
  
  list: {
    width: '100%',
  },
  
});