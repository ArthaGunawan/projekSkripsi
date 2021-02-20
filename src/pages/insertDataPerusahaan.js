import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, Alert, 
    TextInput, Text, 
    Platform, 
    TouchableOpacity,
    PermissionsAndroid, } 
from 'react-native';

//import { StackNavigator } from 'react-navigation';

export async function request_device_location_runtime_permission() {
 
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'ReactNativeCode Location Permission',
        'message': 'ReactNativeCode App needs access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
 
      Alert.alert("Location Permission Granted.");
    }
    else {
 
      Alert.alert("Location Permission Not Granted");
 
    }
  } catch (err) {
    console.warn(err)
  }
}


export default class insertDataPerusahaan extends Component {

    static navigationOptions =
    {
       title: 'Data Perusahaan',
    };
  
  constructor(props) {
  
     super(props)
  
     this.state = {
  
       TextInput_Nama_Perusahaan: '',
       TextInput_Alamat: '',
       TextInput_No_Tel: '',
       TextInput_No_Hp: '',
       TextInput_Nama_Cp: '',
       TextInput_Email_Cp: '',
       latitude: 0,
       longitude: 0,
       error: null
  
     }
  
   }

   getLocation = () =>{
    this.getLongLat = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 100, distanceFilter: 10 },
    );
   }

  async componentDidMount() {
 
    if(Platform.OS === 'android')
    {

    await request_device_location_runtime_permission();

    }

    this.getLocation;
 
  }

  componentWillUnmount() {

    navigator.geolocation.clearWatch(this.getLongLat);

  }
  
   InsertStudentRecordsToServer = () =>{
  
        fetch('http://192.168.43.183/tugas1/InsertDataPerusahaan.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          nama_perusahaan : this.state.TextInput_Nama_Perusahaan,
  
          alamat : this.state.TextInput_Alamat,
  
          no_tel : this.state.TextInput_No_Tel,
  
          no_hp: this.state.TextInput_No_Hp,

          nama_cp: this.state.TextInput_Nama_Cp,

          email_cp: this.state.TextInput_Email_Cp,

          latitude: this.state.latitude,

          longitude: this.state.longitude
  
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
              this.props.navigation.navigate('Home');
  
            }).catch((error) => {
              console.error(error);
            });
  
  }

  
   GoTo_Show_StudentList_Activity_Function = () =>
    {
      this.props.navigation.navigate('Second');
      
    }
  
   render() {
     return (
  
  <View style={styles.MainContainer}>
  
  
         <Text style={{fontSize: 30, fontWeight:'bold', color:"#fff", textAlign: 'center', marginBottom: 25}}> Form Input Berita Acara Pemeriksaan</Text>
   
         <TextInput
           
           placeholder="Enter Nama Perusahaan"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_Nama_Perusahaan : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
        <TextInput
           
           placeholder="Enter Alamat"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_Alamat : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
        <TextInput
           
           placeholder="Enter Nomer Telepon"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_No_Tel : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
         <TextInput
  
           placeholder="Enter Nomer Handphone"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_No_Hp : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />

        <TextInput

            placeholder="Enter Nama Contact Person"

            onChangeText={ TextInputValue => this.setState({ TextInput_Nama_Cp : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
        />

        <TextInput
           placeholder="Enter Email"
           onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
           underlineColorAndroid='transparent'
           style={styles.TextInputStyleClass}
        />
        <TextInput
           placeholder="Enter Email"
           onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
           underlineColorAndroid='transparent'
           style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />        
        <TextInput
           placeholder="Enter Email"
           onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
           underlineColorAndroid='transparent'
           style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />        
        <TextInput
          placeholder="Enter Email"
          onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <Text style={styles.text}> Latitude = {this.state.latitude}</Text>

        <Text style={styles.text}> Longitude = {this.state.longitude}</Text>

  
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
  
          <Text style={styles.TextStyle}> INPUT BERITA ACARA </Text>
  
        </TouchableOpacity>
   
  
  </View>
             
     );
   }
}

const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#454e59'
   
    },

    text :{
      color: '#fff',
      textAlign: 'center',
      paddingBottom: 7
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#5ccdde',
    backgroundColor: '#fff',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#5ccdde'
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },

    mapStyle: {
      width: 300,
      height: 200,
      marginVertical: 10,
    }
   
  });