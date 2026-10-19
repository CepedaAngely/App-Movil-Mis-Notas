import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type IdeaCardProps = {
  texto: string;
  onAgregar: () => void;
};

export default function IdeaCard({ texto, onAgregar }: IdeaCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>{texto}</Text>

      <TouchableOpacity style={styles.boton} onPress={onAgregar} activeOpacity={0.6}>
        <Ionicons name="add-circle-outline" size={18} color="#ffffff" />
        <Text style={styles.botonTexto}>Agregar a mis notas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  texto: { fontSize: 16, marginBottom: 12 },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: '#2196f3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  botonTexto: { color: '#ffffff', fontWeight: '600' },
});