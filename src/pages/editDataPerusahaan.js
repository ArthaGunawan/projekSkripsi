import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, Alert, 
    TextInput, Text, 
    Platform, 
    TouchableOpacity, ScrollView } 
from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

//import { StackNavigator } from 'react-navigation';

export default  class EditDataPerusahaan extends Component {
  
    constructor(props) {
      
         super(props)
      
         this.state = {
      
            TextInput_Id: '',
            TextInput_Nama_Perusahaan: '',
            TextInput_Alamat: '',
            TextInput_No_Tel: '',
            TextInput_No_Hp: '',
            TextInput_Nama_Cp: '',
            TextInput_Email_Cp: '',
            lat: '',
            long: '',
            latitude: '',
            longitude: ''
      
         }
      
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

       getLocation = () =>{
        this.getLongLat = navigator.geolocation.watchPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              lat: position.coords.latitude,
              long: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 2000, maximumAge: 100, distanceFilter: 10 },
        );
       }
  
       componentDidMount(){
  
        // Received Student Details Sent From Previous Activity and Set Into State.
        this.setState({ 
          TextInput_Id: this.props.navigation.state.params.ID,
          TextInput_Nama_Perusahaan : this.props.navigation.state.params.NAME,
          TextInput_Alamat: this.props.navigation.state.params.ALAMAT,
          TextInput_No_Tel: this.props.navigation.state.params.NOTEL,
          TextInput_No_Hp: this.props.navigation.state.params.NOHP,
          TextInput_Nama_Cp: this.props.navigation.state.params.NAMACP,
          TextInput_Email_Cp: this.props.navigation.state.params.EMAIL,
          latitude: this.props.navigation.state.params.LATITUDE,
          longitude: this.props.navigation.state.params.LONGITUDE
        })
  
       }
    
      static navigationOptions =
      {
         title: 'Edit Data Perusahaan',
      };
  
      UpdateStudentRecord = () =>{
        
              fetch('http://192.168.43.183/amp/mobile/UpdateDataPerusahaan.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
        
                id_perusahaan : this.state.TextInput_Id,  
                nama_perusahaan : this.state.TextInput_Nama_Perusahaan,  
                lokasi : this.state.TextInput_Alamat,        
                no_tel : this.state.TextInput_No_Tel,        
                no_hp: this.state.TextInput_No_Hp,
                nama_cp: this.state.TextInput_Nama_Cp,
                email_cp: this.state.TextInput_Email_Cp,
                latitude: this.state.lat,
                longitude: this.state.long

        
              })
        
              }).then((response) => response.json())
                  .then((responseJson) => {
        
                    // Showing response message coming from server updating records.
                    Alert.alert(responseJson);
                    this.props.navigation.navigate('Home');
        
                  }).catch((error) => {
                    console.error(error);
                  });
        
        }
  
  
      DeleteStudentRecord = () =>{
          
            fetch('http://192.168.43.183/amp/mobile/DeleteDataPerusahaan.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
          
              id_perusahaan : this.state.TextInput_Id
          
            })
          
            }).then((response) => response.json())
            .then((responseJson) => {
          
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
              this.props.navigation.navigate('insertDataPerusahaan');
          
            }).catch((error) => {
               console.error(error);
            });
  
            
  
        }

        
  
      render() {
  
        return (
     <ScrollView scrollEnabled={true}>
      <View style={styles.MainContainer}>
      
              <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Data Perusahaan </Text>

              <Text style={styles.text}> Nama Perusahaan</Text>
              <TextInput
                
                placeholder="Nama Perusahaan"
                
                value={this.state.TextInput_Nama_Perusahaan}
      
                onChangeText={ TextInputValue => this.setState({ TextInput_Nama_Perusahaan : TextInputValue }) }
      
                underlineColorAndroid='transparent'
      
                style={styles.TextInputStyleClass}
              />
            <Text style={styles.text}> Alamat Perusahaan</Text>
            <TextInput
                
                placeholder="Alamat Perusahaan"
    
                value={this.state.TextInput_Alamat}
      
                onChangeText={ TextInputValue => this.setState({ TextInput_Alamat : TextInputValue }) }
      
                underlineColorAndroid='transparent'
      
                style={styles.TextInputStyleClass}
              />

            <Text style={styles.text}> Nomer Telepon Perusahaan</Text>
            <TextInput
                
                placeholder="Nomer Telepon Perusahaan"
    
                value={this.state.TextInput_No_Tel}
      
                onChangeText={ TextInputValue => this.setState({ TextInput_No_Tel: TextInputValue }) }
      
                underlineColorAndroid='transparent'
      
                style={styles.TextInputStyleClass}
              />

              <Text style={styles.text}> Nama Handpone Perusahaan</Text>
              <TextInput
      
                placeholder="Nomer Handpone Perusahaan"
    
                value={this.state.TextInput_No_Hp}
      
                onChangeText={ TextInputValue => this.setState({ TextInput_No_Hp : TextInputValue }) }
      
                underlineColorAndroid='transparent'
      
                style={styles.TextInputStyleClass}
              />
              
              <Text style={styles.text}> Nama Contact Person</Text>             
              <TextInput
                  
                  placeholder="Nama Contact Person"

                  value={this.state.TextInput_Nama_Cp}

                  onChangeText={ TextInputValue => this.setState({ TextInput_Nama_Cp : TextInputValue }) }

                  underlineColorAndroid='transparent'

                  style={styles.TextInputStyleClass}
              />

              <Text style={styles.text}> Email Contact Person</Text>
              <TextInput
                  
                  placeholder="Email"

                  value={this.state.TextInput_Email_Cp}

                  onChangeText={ TextInputValue => this.setState({ TextInput_Email_Cp : TextInputValue }) }

                  underlineColorAndroid='transparent'

                  style={styles.TextInputStyleClass}
              />
              <Text style={styles.text}> Latitude = {this.state.lat}</Text>

              <Text style={styles.text}> Longitude = {this.state.long}</Text>

            <MapView
              style={styles.mapStyle}
              showsUserLocation={false}
              zoomEnabled={true}
              zoomControlEnabled={true}
              initialRegion={{
                latitude: parseFloat(this.state.latitude),
                longitude: parseFloat(this.state.longitude),
                latitudeDelta: 0.0009,
                longitudeDelta: 0.0004,
              }}>

              <Marker
                coordinate={{ latitude: parseFloat(this.state.latitude), longitude: parseFloat(this.state.longitude) }}
                title={"Lokasi"}
              />
    
            </MapView>

            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.getLocation} >      
                <Text style={styles.TextStyle}> TAMBAH KOORDINAT </Text>      
            </TouchableOpacity>
      
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
      
                <Text style={styles.TextStyle}> UPDATE PERUSAHAAN RECORD </Text>
      
            </TouchableOpacity>
        
      
      </View>
     </ScrollView>
                
        );
      }
  
  }

  const styles = StyleSheet.create({

    MainContainer :{

        alignItems: 'center',
        flex:1,
        paddingTop: 30,
        backgroundColor: '#fff'

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
    borderColor: '#a2a4a8',
    borderRadius: 5 ,

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
    },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },

    mapStyle: {
      width: 320,
      height: 400,
      marginVertical: 10,
    },

    text :{
      textAlign: 'center',
      paddingTop: 3,
      paddingBottom: 2
    }

});