import { StyleSheet, Text, View } from 'react-native';

export default function IdeasScreen() {
  return (
    <View style={styles.container}>
      <Text>Próximamente: ideas de tareas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});