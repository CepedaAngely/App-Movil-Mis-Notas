import { Button, StyleSheet, Text, View } from 'react-native';

type NoteCardProps = {
  title: string;
  description: string;
  status: string;
  onEditar: () => void;
  onEliminar: () => void;
};

export default function NoteCard({
  title,
  description,
  status,
  onEditar,
  onEliminar,
}: NoteCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.status}>Estado: {status}</Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Editar" onPress={onEditar} />
        </View>
        <View style={styles.button}>
          <Button title="Eliminar" onPress={onEliminar} color="#d9534f" />
        </View>
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
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
  },
});