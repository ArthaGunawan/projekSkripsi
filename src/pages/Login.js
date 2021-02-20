import React, { Component } from 'react';
 
import { 
  StyleSheet, 
  TextInput, 
  View, Alert, 
  Button, Text,
  TouchableOpacity,
  Image
} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
//import { StackNavigator } from 'react-navigation';

 
// Creating Login Activity.
export default class Login extends Component {

  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'LoginActivity',
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { Username }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.43.183/amp/mobile/user_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    username: Username,
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Home', { Email: Username });

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    return (

      
      <View style={styles.container}>
        <Text style={styles.TextTitle}>Aplikasi Monitoring Perusahaan</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={Username => this.setState({Username})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={UserPassword => this.setState({UserPassword})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.UserLoginFunction}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454e59',
  },
  TextTitle :{
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 150,
    textAlign: 'center'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#5ccdde",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
});