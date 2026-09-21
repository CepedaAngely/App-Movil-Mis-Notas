import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type NoteCardProps = {
  title: string;
  description: string;
  status: string;
  onCambiarEstado: () => void;
  onEditar: () => void;
  onEliminar: () => void;
};

const COLORES_ESTADO: Record<string, string> = {
  Pendiente: '#f0ad4e',
  'En curso': '#2196f3',
  Hecho: '#5cb85c',
};

export default function NoteCard({
  title,
  description,
  status,
  onCambiarEstado,
  onEditar,
  onEliminar,
}: NoteCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        style={[
          styles.statusBadge,
          { backgroundColor: COLORES_ESTADO[status] ?? '#999999' },
        ]}
        onPress={onCambiarEstado}
        activeOpacity={0.6}
      >
        <Text style={styles.statusText}>{status}</Text>
        <Ionicons name="sync-outline" size={16} color="#ffffff" />
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={onEditar}
          activeOpacity={0.6}
        >
          <Ionicons name="create-outline" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onEliminar}
          activeOpacity={0.6}
        >
          <Ionicons name="trash-outline" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#2196f3',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});