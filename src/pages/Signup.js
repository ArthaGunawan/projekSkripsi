import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

class Signup extends Component {

    static navigationOptions =
   {
      title: 'Signuf',
    
   };
    constructor(props) {
        super(props)

        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: ''
        }
    }

    UserRegistrationFunction = () => {

        fetch('http://192.168.43.183/tugas1/user_registration.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.UserName,
                email: this.state.UserEmail,
                password: this.state.UserPassword
            })
        }).then((response) => response.json())
        .then((responseJson) => {
   
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
   
        }).catch((error) => {
          console.error(error);
        });
   
   
    }

    render(){
        return(
            <View style={styles.MainContainer}>

                <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

                <TextInput 
                    placeholder= "Enter User Name"
                    onChangeText={UserName => this.setState({UserName})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder= "Enter User Email"
                    onChangeText={UserEmail => this.setState({UserEmail})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder= "Enter User Password"
                    onChangeText={UserPassword => this.setState({UserPassword})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                />
                <Button title="Signup" 
                    onPress={this.UserRegistrationFunction} color="#2196F3"
                />
                
            </View>
        );
    }
} export default Signup;

const styles = StyleSheet.create({

    MainContainer :{
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
    }
});