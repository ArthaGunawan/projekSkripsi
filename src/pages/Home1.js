import React, { Component } from 'react';
 
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';

export default class Home extends Component
{

  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
    

   render()
   {

     const {goBack} = this.props.navigation;

      return(
         <View style = { styles.MainContainer }>

            <Text style={styles.TextTitle}>Selamat Datang</Text>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
            
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() => this.props.navigation.navigate('insertDataPerusahaan')} >     
               <Text style={styles.TextStyle}> INSERT DATA PERUSAHAAN </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() => this.props.navigation.navigate('listDataPerusahaan')} >     
               <Text style={styles.TextStyle}> LIST DATA PERUSAHAAN </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() => this.props.navigation.navigate('lokasi')} >     
               <Text style={styles.TextStyle}> LOKASI </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() => goBack(null)} >     
               <Text style={styles.TextStyle}> LOGOUT </Text>
            </TouchableOpacity>
 
         </View>
      );
   }
}

const styles = StyleSheet.create({
 
    MainContainer :{

      alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },

    TextTitle :{
      color: '#000',
      fontSize: 20,
      marginBottom: 14,
      textAlign: 'center'
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#2196F3',
     
     // Set border Radius.
     borderRadius: 5 ,
    
    },
    
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     },
    
     ButtonStyle: {
        paddingBottom: 7
     },

     TouchableOpacityStyle: {

      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#00BCD4'

      },

      TextStyle:{
         color:'#fff',
         textAlign:'center',
      }
});