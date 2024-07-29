import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Banner from '../assets/banner.png';
import Logo from '../assets/logo-gov-sp.png';
import Governo from '../assets/governo.png';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.blackContainer}>
          <Image source={Governo} style={styles.logoImage2} />
        </View>
        <View style={styles.headerIcons}>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage} />
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
        <Text style={styles.headerText}>Home / Etec / Vestibulinho</Text>
      </View>
      <View style={styles.chocolate}>
        <Image source={Banner} style={styles.imagem1} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Os candidatos que participaram do processo seletivo das Escolas Técnicas Estaduais (Etecs), no último domingo (9), poderão consultar, nesta quarta-feira (12), a partir das 15 horas, os gabaritos oficiais e as provas no site vestibulinhoetec.com.br. Os arquivos também ficarão disponíveis abaixo.
        </Text>
        <Text style={styles.text}>
          A próxima etapa do Vestibulinho das Etecs será a convocação para as provas de aptidão, fase específica para os candidatos aos cursos técnicos de Canto, Dança, Regência e Teatro. A informação estará disponível, a partir das 15 horas do dia 28, no site do processo seletivo e na unidade onde o candidato pretende estudar.
        </Text>
        <Text style={styles.text}>
          A divulgação da lista de classificação geral, bem como o resultado das provas de aptidão, será no dia 10 de julho, a partir das 15 horas. A primeira convocação para matrículas será feita no dia 12, pelo e-mail e SMS fornecidos no momento da inscrição, para os cursos presenciais. Já para a modalidade online, a primeira convocação será em 16 de junho, por e-mail.
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  blackContainer: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    width: '55%',
    borderRadius: 30,
    marginLeft: 0,
  },
  logoImage2: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginVertical: 5,
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -35,
    marginLeft: 0, // Removed left margin
  },
  logoImage: {
    width: 220,
    height: 150,
    resizeMode: 'contain',
    marginLeft: -250,
    marginTop: -15
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 48,
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
  breadcrumb: {
    backgroundColor: '#696969',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    marginRight: 5,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  chocolate: {
    backgroundColor: '#ff0084',
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 33,
    color: 'gray',
    fontWeight: '400',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
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
