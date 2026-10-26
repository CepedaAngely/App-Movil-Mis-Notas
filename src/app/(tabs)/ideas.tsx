import { useInfiniteQuery } from '@tanstack/react-query';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IdeaCard from '@/components/IdeaCard';
import { obtenerIdeas } from '@/services/ideasApi';
import { useNotesStore } from '@/store/useNotesStore';

export default function IdeasScreen() {
  // Selector: esta pantalla solo usa agregarNota del store
  const agregarNota = useNotesStore((state) => state.agregarNota);

  const {
    data,
    isPending,
    isError,
    error,
    refetch,
    isRefetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['ideas'],
    // pageParam es el skip: cuántas ideas saltear (0, 10, 20...)
    queryFn: ({ pageParam }) => obtenerIdeas(pageParam),
    initialPageParam: 0,
    // Calcula el skip de la página siguiente; undefined significa que no hay más
    getNextPageParam: (ultimaPagina) => {
      const siguienteSkip = ultimaPagina.skip + ultimaPagina.limit;
      return siguienteSkip < ultimaPagina.total ? siguienteSkip : undefined;
    },
  });

  const agregarComoNota = (texto: string) => {
    agregarNota(texto, 'Idea sugerida desde la pestaña Ideas.');
    Alert.alert('Idea agregada', 'La vas a encontrar en Mis notas.');
  };

  if (isPending) {
    return (
      <SafeAreaView style={styles.centrado}>
        <ActivityIndicator size="large" color="#2196f3" />
        <Text style={styles.mensaje}>Cargando ideas...</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.centrado}>
        <Text style={styles.mensaje}>{error.message}</Text>
        <TouchableOpacity style={styles.boton} onPress={() => refetch()}>
          <Text style={styles.botonTexto}>Reintentar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // Junta todas las páginas cargadas en una sola lista
  const ideas = data.pages.flatMap((pagina) => pagina.todos);
  const total = data.pages[0].total;

  // Se llama al llegar cerca del final de la lista
  const cargarMas = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  // Lo que se muestra debajo de la última idea
  const piePagina = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator style={styles.pie} color="#2196f3" />;
    }
    if (!hasNextPage) {
      return <Text style={styles.fin}>No hay más ideas.</Text>;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={ideas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
        refreshing={isRefetching}
        onRefresh={refetch}
        onEndReached={cargarMas}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Ideas</Text>
            <Text style={styles.subtitle}>Tareas sugeridas para sumar a tus notas</Text>
            <Text style={styles.contador}>
              Mostrando {ideas.length} de {total}
            </Text>
              <TouchableOpacity
      style={styles.docsButton}
      onPress={() => Linking.openURL('https://dummyjson.com/docs/todos')}
      activeOpacity={0.6}
    >
      <Text style={styles.docsButtonText}>Ver documentación de la API</Text>
    </TouchableOpacity>


          </View>
        }
        ListFooterComponent={piePagina()}
        renderItem={({ item }) => (
          <IdeaCard texto={item.todo} onAgregar={() => agregarComoNota(item.todo)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  header: { marginBottom: 15 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#666666', textAlign: 'center' },
  contador: { fontSize: 13, color: '#999999', textAlign: 'center', marginTop: 6 },
  docsButton: {
    marginTop: 12,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  docsButtonText: {
    color: '#333333',
    fontWeight: '600',
    fontSize: 13,
  },
  
  centrado: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, gap: 12 },
  mensaje: { fontSize: 15, color: '#666666', textAlign: 'center' },
  boton: { backgroundColor: '#2196f3', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  botonTexto: { color: '#ffffff', fontWeight: '600' },
  pie: { marginVertical: 20 },
  fin: { textAlign: 'center', color: '#999999', marginVertical: 20 },
});