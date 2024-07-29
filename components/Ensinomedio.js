import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagemExemplo from '../assets/bomdia.jpg';
import ImagemExemplo2 from '../assets/boanoite.jpg';

const Ensinomedio = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.logoContainer}>
      </View>
      <View style={styles.menuIcons}>
        <Text style={styles.title}>Últimas notícias sobre Etec</Text>
        <View style={styles.redBar}>
          <View style={styles.halfBarThick} />
          <View style={styles.halfBarNormal} />
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Image source={ImagemExemplo} style={styles.imagem1} />
          <Text style={styles.articleTitle}>Fatecs recebem trabalhos para 12ª edição do Simpósio do Patrimônio</Text>
          <Text style={styles.date}>27 de junho de 2024</Text>
        </View>
        <View style={styles.spacer}></View>
        <Image source={ImagemExemplo2} style={styles.imagem1} />
        <Text style={styles.articleTitle}>Alunos da Etec de Mogi Guaçu desenvolvem carrinhos de controle remoto</Text>
        <Text style={styles.date}>28 de junho de 2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 15,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  headerIcons: {
    justifyContent: 'flex-start',
  },
  menuIcons: {
    flexDirection: 'column',
    marginTop: 50,
    paddingHorizontal: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#636363', // Azul escuro conforme a imagem
    fontWeight: 'bold',
  },
  redBar: {
    flexDirection: 'row',
    height: 6, // Ajuste a altura conforme necessário
    marginVertical: 10,
    alignItems: 'center',
  },
  halfBarThick: {
    backgroundColor: '#b30000', // Vermelho conforme a imagem
    height: 12, // Ajuste a altura conforme necessário
    width: 140, // Ajuste o comprimento conforme necessário
    borderRadius: 5,
    marginRight: 0, // Espaçamento entre as barras
  },
  halfBarNormal: {
    backgroundColor: '#b30000', // Vermelho conforme a imagem
    height: 3, // Ajuste a altura conforme necessário
    flex: 1,
    borderRadius: 1,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'semi-bold',
    color: '#626498',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  imagem1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  spacer: {
    height: 20, // Espaçamento ajustável conforme necessário
  },
});

export default Ensinomedio;
