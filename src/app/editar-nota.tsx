import { useNotes } from '@/context/NotesContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function EditarNotaScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notas, editarNota } = useNotes();

  const nota = notas.find((n) => n.id === id);

  const [titulo, setTitulo] = useState(nota?.title ?? '');
  const [descripcion, setDescripcion] = useState(nota?.description ?? '');

  if (!nota) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No se encontró la nota</Text>
        <Button title="Volver" onPress={() => router.replace('/')} />
      </View>
    );
  }

  const manejarGuardado = () => {
    if (titulo.trim() === '') {
      Alert.alert('Atención', 'Debes ingresar un título para la nota.');
      return;
    }

    editarNota(nota.id, titulo, descripcion);

    Alert.alert('Nota actualizada', 'Los cambios se guardaron correctamente.', [
      { text: 'OK', onPress: () => router.replace('/') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar nota</Text>

      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la nota"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe una descripción..."
        multiline
        numberOfLines={4}
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <View style={styles.buttonSpacing}>
        <Button title="Guardar cambios" onPress={manejarGuardado} />
      </View>

      <Button title="Cancelar" onPress={() => router.replace('/')} color="#666" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  buttonSpacing: {
    marginTop: 30,
    marginBottom: 15,
  },
});
