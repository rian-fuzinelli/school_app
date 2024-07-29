import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Banner from '../assets/banner.png';
import Logo from '../assets/logo-gov-sp.png';
import Geead from '../assets/geead.png';
import Governo from '../assets/governo.png';

const Quemsomos = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.blackContainer}>
        <Image source={Governo} style={styles.logoImage2} />
      </View>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Geead} style={styles.logoImage} />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="O que deseja localizar?"
        />
        <Icon name="search" size={20} color="red" style={styles.searchIcon} />
      </View>
      <View style={styles.breadcrumb}>
        <Icon name="home" size={20} color="#fff" style={styles.homeIcon} />
        <Text style={styles.headerText}>Home / Certificação de Competências</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Certificação de Competências</Text>
        <View style={styles.redBar}>
          <View style={styles.halfBarThick} />
          <View style={styles.halfBarNormal} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          O Centro Paula Souza oferece aos que possuem experiência profissional e conhecimentos adquiridos em ambiente escolar ou fora desse, a oportunidade de ter suas competências avaliadas. Aos que têm condições e desejam ingressar em módulos avançados de cursos técnicos, é oferecido o processo de vagas remanescentes nas Etecs. Aos que possuem experiência profissional ou formação suficiente e têm interesse em obter diploma, é oferecida a certificação de competências para fins de diplomação.
        </Text>
        <Text style={styles.text}>
          O processo de Certificação de Competências é formado pelas etapas:
        </Text>
        <Text style={styles.text}>
          • inscrição
          • prova teórica
          • entrevista contextualizada (prova oral)
          • prova prática
        </Text>
      </View>
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
    width: '55%',
    borderRadius: 30,
    marginLeft: -2,
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
  logoImage2: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
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
  iconButton: {
    marginVertical: 5,
    top: -20,
  },
  logoContainer: {
    marginTop: 0,
    marginBottom: -35,
    marginLeft: -55, // Ajuste a margem à esquerda
    paddingLeft: 25, // Pequeno padding à esquerda para ajustar a posição
  },
  logoImage: {
    width: 320, // Ajuste a largura conforme necessário
    height: 150, // Ajuste a altura conforme necessário
    resizeMode: 'contain', // Ajusta a imagem dentro do container
    marginTop: 0,
    marginLeft: 65,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10, // Reduz o espaço vertical entre os elementos
    marginHorizontal: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    borderRadius: 20,
    paddingLeft: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  homeIcon: {
    marginRight: 5,
  },
  breadcrumb: {
    backgroundColor: '#696969', // Corrigido para cinza
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Reduz a margem superior entre a barra de pesquisa e o breadcrumb
  },
  chocolate: {
    backgroundColor: '#ff0084',
    height: 100,
    marginBottom: 10,
    marginTop: 0, // Remove o espaço superior
    paddingTop: 0, // Remove o espaço de padding
    alignItems: 'center', // Centraliza a imagem horizontalmente
    justifyContent: 'center', // Centraliza a imagem verticalmente
  },
  imagem1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta a imagem ao tamanho do container mantendo a proporção
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 0, // Remove margem superior entre os conteúdos
  },
  title: {
    fontSize: 33,
    color: 'blue',
    fontWeight: 'semi-bold',
    marginTop: 0, // Remove margem superior entre os títulos
  },
  redBar: {
    flexDirection: 'row',
    height: 10,
    marginVertical: 10,
  },
  halfBarThick: {
    backgroundColor: 'red',
    height: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    borderRadius: 7,
  },
  halfBarNormal: {
    backgroundColor: 'red',
    height: 10,
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
    fontWeight: '400',
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

export default Quemsomos;
