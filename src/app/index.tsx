import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import NoteCard from '@/components/NoteCard';
import { useNotesStore } from '@/store/useNotesStore';

const FILTROS = ['Todas', 'Pendiente', 'En curso', 'Hecho'];

export default function HomeScreen() {
  const router = useRouter();
  const { notas, eliminarNota, cambiarEstado } = useNotesStore();
  const [filtro, setFiltro] = useState('Todas');

  const notasFiltradas =
    filtro === 'Todas'
      ? notas
      : notas.filter((nota) => nota.status === filtro);

  return (
    <View style={styles.container}>
      <FlatList
        data={notasFiltradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/icon.png')}
              style={styles.image}
            />

            <Text style={styles.title}>Mis Notas</Text>

            <Text style={styles.subtitle}>
              Organiza tus tareas y pendientes
            </Text>

            <TouchableOpacity
              style={styles.createButton}
              onPress={() => router.push('/crear-nota')}
              activeOpacity={0.6}
            >
              <Ionicons name="add-circle-outline" size={22} color="#ffffff" />
              <Text style={styles.createButtonText}>Crear nueva nota</Text>
            </TouchableOpacity>

            <View style={styles.filters}>
              {FILTROS.map((opcion) => (
                <TouchableOpacity
                  key={opcion}
                  style={[
                    styles.filterButton,
                    filtro === opcion && styles.filterButtonActive,
                  ]}
                  onPress={() => setFiltro(opcion)}
                  activeOpacity={0.6}
                >
                  <Text
                    style={[
                      styles.filterText,
                      filtro === opcion && styles.filterTextActive,
                    ]}
                  >
                    {opcion}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.empty}>
            {filtro === 'Todas'
              ? 'Todavía no hay notas.'
              : `No hay notas en estado "${filtro}".`}
          </Text>
        }
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            description={item.description}
            status={item.status}
            onCambiarEstado={() => cambiarEstado(item.id)}
            onEditar={() =>
              router.push({
                pathname: '/editar-nota',
                params: { id: item.id },
              })
            }
            onEliminar={() => eliminarNota(item.id)}
          />
        )}
      />
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
  header: {
    marginBottom: 15,
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
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2196f3',
    paddingVertical: 12,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
  filterButtonActive: {
    backgroundColor: '#2196f3',
  },
  filterText: {
    color: '#333333',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  empty: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 20,
  },
});