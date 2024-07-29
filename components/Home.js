import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/logo-gov-sp.png';
import Governo from '../assets/governo.png';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.blackContainer}>
      <Image source={Governo} style={styles.logoImage2} />
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="O que deseja localizar?" />
        <Icon name="search" size={20} color="red" style={styles.searchIcon} />
      </View>
      <View style={styles.breadcrumb}>
        <Icon name="home" size={20} color="#fff" style={styles.homeIcon} />
        <Text style={styles.headerText}>Home / Etec</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Etec</Text>
        <View style={styles.redBar}>
          <View style={styles.halfBarThick} />
          <View style={styles.halfBarNormal} />
        </View>
        <Text style={styles.text}>
          As 228 Etecs administradas pelo Centro Paula Souza contam com mais de 226 mil matriculados nos Ensinos Técnico, Integrado, Médio e Especialização Técnica.
        </Text>
        <Text style={styles.text}>
          Ao todo, são ofertados 216 cursos: 111 cursos técnicos (96 presenciais, 5 semipresenciais, 7 cursos online e 3 na modalidade aberta), 75 cursos de Ensino Médio integrado ao Técnico (30 em tempo integral e 41 em um único período e 4 cursos na Articulação da Formação Profissional Média e Superior) e 30 especializações técnicas.
        </Text>
        <Text style={styles.text}>
          O candidato também pode escolher entre as quatro opções de itinerários formativos de Ensino Médio ofertados nas Etecs.
        </Text>
      </View>
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Vestibulinho</Text>
        <View style={styles.listItemIcon}>
          <Icon name="chevron-right" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Certificação de Competência</Text>
        <View style={styles.listItemIcon}>
          <Icon name="chevron-right" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blackContainer: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    width: '60%',
    borderRadius: 30,
    marginLeft: -3
  },
  logoImage2: {
    width: 300,
    height: 80,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  logoImage: {
    width: 500,
    height: 150,
    marginLeft: -250,
    resizeMode: 'contain',
  },
  logoImage2: {
    borderRadius: 50
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 35,
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 48,
    marginTop: -20
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    borderRadius: 20,
    paddingLeft: 15,
  },
  homeIcon: {
    marginRight: 5,
  },
  breadcrumb: {
    backgroundColor: '#696969',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
    backgroundColor: '#1ed760',
  },
  title: {
    fontSize: 33,
    color: '#666666',
    fontWeight: 'semi-bold',
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
  text: {
    fontSize: 16,
    marginTop: 10,
    color: '#666666',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  listItemText: {
    color: '#00bcd4',
    fontSize: 16,
  },
  listItemIcon: {
    backgroundColor: '#00acc1',
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
