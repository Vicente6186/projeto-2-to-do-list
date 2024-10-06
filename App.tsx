import Header from '@components/Header';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import Home from '@screens/Home';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}

