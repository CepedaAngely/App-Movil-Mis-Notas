import { useNotesStore } from '@/store/useNotesStore';
import { useRouter } from 'expo-router';
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

export default function CrearNotaScreen() {
  const router = useRouter();
  const { agregarNota } = useNotesStore();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  
    const manejarGuardado = () => {
  if (titulo.trim() === '') {
    Alert.alert('Atención', 'Debes ingresar un título para la nota.');
    return;
  }

  agregarNota(titulo, descripcion);

  Alert.alert(
    'Nota guardada',
    'La nota se agregó correctamente.',
    [
      {
        text: 'OK',
        onPress: () => router.replace('/'),
      },
    ]
  );
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear nueva nota</Text>

      <View style={styles.form}>
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
          multiline={true}
          numberOfLines={4}
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <View style={styles.buttonSpacing}>
          <Button
            title="Guardar nota"
            onPress={manejarGuardado}
          />
        </View>

        <Button
        title="Cancelar"
        onPress={() => router.replace('/')}
         color="#666"
        />
      </View>
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

  form: {
    width: '100%',
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