import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { NotesProvider } from '@/context/NotesContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NotesProvider>
        <AnimatedSplashOverlay />

        <Stack>
         
      <Stack>
  <Stack.Screen
    name="crear-nota"
    options={{ title: 'Crear nota' }}
  />

  <Stack.Screen
    name="editar-nota"
    options={{ title: 'Editar nota' }}
  />
</Stack>
          
        </Stack>
      </NotesProvider>
    </ThemeProvider>
  );
}