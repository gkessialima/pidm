import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AlbumList from './components/src/componentes/AlbumList';
import Header from './components/src/componentes/Header';
import RotasTelas from './components/src/componentes/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <RotasTelas>
      </RotasTelas>
    </SafeAreaProvider>
  );
}