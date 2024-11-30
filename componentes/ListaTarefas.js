import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import EntradaTarefa from './EntradaTarefa';
import ItemTarefa from './ItemTarefa';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [tarefaEdicao, setTarefaEdicao] = useState(null);

  const adicionarTarefa = (tarefa) => {
    tarefa.id = Date.now().toString();
    setTarefas([...tarefas, tarefa]);
  };

  const editarTarefa = (tarefa) => {
    setModoEdicao(true);
    setTarefaEdicao(tarefa);
  };

  const atualizarTarefa = (tarefaAtualizada) => {
    setTarefas(tarefas.map((t) => (t.id === tarefaAtualizada.id ? tarefaAtualizada : t)));
    setModoEdicao(false);
    setTarefaEdicao(null);
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  const ordenarTarefas = () => {
    setTarefas([...tarefas].sort((a, b) => {
      const prioridades = { Alta: 3, Média: 2, Baixa: 1 };
      return prioridades[b.prioridade] - prioridades[a.prioridade];
    }));
  };

  return (
    <View style={styles.container}>
      <EntradaTarefa adicionarTarefa={modoEdicao ? atualizarTarefa : adicionarTarefa} modoEdicao={modoEdicao} tarefaEdicao={tarefaEdicao} />
      <Pressable onPress={ordenarTarefas} style={styles.botaoOrdenar}>
        <Text style={styles.textoBotao}>Ordenar por Prioridade</Text>
      </Pressable>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemTarefa tarefa={item} editarTarefa={editarTarefa} excluirTarefa={excluirTarefa} />
        )}
      />
    </View>
  );
};

export default ListaTarefas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  botaoOrdenar: {
    backgroundColor: '#2196f3',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: '#fff',
  },
});
