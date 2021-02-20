import React, { Component } from 'react';
 
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   Image,
   FlatList,
 } from 'react-native';

export default class Home extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: 'Berita Acara', image:"https://img.icons8.com/color/70/000000/cottage.png", page: 'insertBeritaAcara'},
        {id:2, title: 'List Data', image:"https://img.icons8.com/color/70/000000/administrator-male.png", page: 'listDataPerusahaan'},
        {id:3, title: 'Logout', image:"https://img.icons8.com/color/70/000000/shutdown.png", page: 'Login'} ,
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TextTitleContainer}>
        <Text style={styles.TextTitle}>Aplikasi Monitoring Perusahaan</Text>
        </View>
        <Text style={styles.TextWelcome}>Selamat Datang</Text>
        <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
        
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate(item.page)}>
                  <View style={styles.cardFooter}></View>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardHeader}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
   TextTitle :{
      color: 'white',
      fontSize: 20,
      marginBottom: 25,
      marginTop: 25,
      textAlign: 'center',
      
    },
   TextTitleContainer :{
    backgroundColor: "#5ccdde"
   },
   TextWelcome: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center', 
    marginBottom: 5,
    marginTop: 40,
   },
   TextComponentStyle: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center', 
      marginBottom: 15,
    },
   container:{
    flex:1,
    backgroundColor: '#454e59',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#454e59',
    marginTop: 60,
  },
  listContainer:{
    alignItems:'center',
    backgroundColor: '#454e59',
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    justifyContent: 'space-between',
    color:"#696969"
  },
});