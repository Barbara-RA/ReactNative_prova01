import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const ItemTarefa = ({ tarefa, editarTarefa, excluirTarefa }) => (
  <View style={styles.itemTarefaContainer}>
    <Text style={styles.nomeTarefa}>{tarefa.nome}</Text>
    <Text>{tarefa.descricao}</Text>
    <Text style={styles.prioridade(tarefa.prioridade)}>{tarefa.prioridade}</Text>
    <Pressable onPress={() => editarTarefa(tarefa)} style={styles.botaoEditar}>
      <Text>Editar</Text>
    </Pressable>
    <Pressable onPress={() => excluirTarefa(tarefa.id)} style={styles.botaoExcluir}>
      <Text>Excluir</Text>
    </Pressable>
  </View>
);

export default ItemTarefa;

const styles = StyleSheet.create({
  itemTarefaContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomeTarefa: {
    fontWeight: 'bold',
  },
  prioridade: (prioridade) => ({
    color: prioridade === 'Alta' ? 'red' : prioridade === 'Média' ? 'orange' : 'green',
  }),
  botaoEditar: {
    backgroundColor: '#ffeb3b',
    padding: 5,
    marginHorizontal: 5,
  },
  botaoExcluir: {
    backgroundColor: '#f44336',
    padding: 5,
  },
});
