import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const EntradaTarefa = ({ adicionarTarefa, modoEdicao, tarefaEdicao }) => {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa');

  useEffect(() => {
    if (modoEdicao && tarefaEdicao) {
      setNomeTarefa(tarefaEdicao.nome);
      setDescricao(tarefaEdicao.descricao);
      setPrioridade(tarefaEdicao.prioridade);
    }
  }, [modoEdicao, tarefaEdicao]);

  const handleAdicionarTarefa = () => {
    if (nomeTarefa && descricao) {
      adicionarTarefa({ nome: nomeTarefa, descricao, prioridade, id: tarefaEdicao ? tarefaEdicao.id : undefined });
      setNomeTarefa('');
      setDescricao('');
      setPrioridade('Baixa');
    }
  };

  return (
    <View style={styles.entradaContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <View style={styles.prioridadeContainer}>
        <Pressable onPress={() => setPrioridade('Baixa')} style={styles.radioBotao(prioridade === 'Baixa')}>
          <Text>Baixa</Text>
        </Pressable>
        <Pressable onPress={() => setPrioridade('Média')} style={styles.radioBotao(prioridade === 'Média')}>
          <Text>Média</Text>
        </Pressable>
        <Pressable onPress={() => setPrioridade('Alta')} style={styles.radioBotao(prioridade === 'Alta')}>
          <Text>Alta</Text>
        </Pressable>
      </View>
      <Pressable style={styles.botaoAdicionar} onPress={handleAdicionarTarefa}>
        <Text style={styles.textoBotao}>{modoEdicao ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}</Text>
      </Pressable>
    </View>
  );
};

export default EntradaTarefa;

const styles = StyleSheet.create({
  entradaContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  prioridadeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioBotao: (selecionado) => ({
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: selecionado ? '#cce7ff' : '#f0f0f0',
  }),
  botaoAdicionar: {
    backgroundColor: '#4caf50',
    padding: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
  },
});
