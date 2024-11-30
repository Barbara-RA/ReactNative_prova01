import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListaTarefas from './componentes/ListaTarefas';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ListaTarefas />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
