import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, Alert, 
    TextInput, 
    Button, Text, 
    Platform, 
    TouchableOpacity, 
    ListView, 
    ActivityIndicator } 
from 'react-native';

export default class listDataPerusahaan extends Component {

    constructor(props) { 
  
      super(props);
  
      this.state = {
  
        isLoading: true
  
      }
    }
  
    static navigationOptions =
    {
       title: 'List Data Perusahaan',
    };
  
    componentDidMount() {
      
         return fetch('http://192.168.1.100/tugas1/ShowPerusahaanList.php')
           .then((response) => response.json())
           .then((responseJson) => {
             let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
             this.setState({
               isLoading: false,
               dataSource: ds.cloneWithRows(responseJson),
             }, function() {
               // In this block you can do something with new state.
             });
           })
           .catch((error) => {
             console.error(error);
           });
       }
      
       GetPerusahaanIDFunction=(id,nama_perusahaan,alamat,no_tel,no_hp,nama_cp,email_cp, latitude, longitude)=>{
  
            this.props.navigation.navigate('editDataPerusahaan', { 
  
              ID : id,
              NAME : nama_perusahaan,
              ALAMAT : alamat,
              NOTEL : no_tel,
              NOHP : no_hp,
              NAMACP : nama_cp,
              EMAIL : email_cp,
              LATITUDE : latitude,
              LONGITUDE : longitude
  
            });
  
       }
  
       ListViewItemSeparator = () => {
         return (
           <View
             style={{
               height: .5,
               width: "100%",
               backgroundColor: "#000",
             }}
           />
         );
       }
  
       render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
     
        return (
     
          <View style={styles.MainContainer_For_Show_StudentList_Activity}>
     
            <ListView
     
              dataSource={this.state.dataSource}
     
              renderSeparator= {this.ListViewItemSeparator}
     
              renderRow={ (rowData) => <Text style={styles.rowViewContainer} 
  
                        onPress={this.GetPerusahaanIDFunction.bind(
                          this, rowData.id,
                           rowData.nama_perusahaan, 
                           rowData.alamat, 
                           rowData.no_tel, 
                           rowData.no_hp,
                           rowData.nama_cp,
                           rowData.email_cp,
                           rowData.latitude,
                           rowData.longitude
                           )} > 
  
                        {rowData.nama_perusahaan} 
                        
                        </Text> }
     
            />
     
          </View>
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
    borderColor: '#FF5722',
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
    }

});