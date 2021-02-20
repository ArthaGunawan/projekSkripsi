import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  ListView,
  ActivityIndicator
} from 'react-native';

export default class ListWithSearchView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.arrayholder = [];
  }
  

  componentDidMount() {
      
    return fetch('http://192.168.43.183/amp/mobile/ShowPerusahaanList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
        this.arrayholder = responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetPerusahaanIDFunction=(id_perusahaan,nama_perusahaan,lokasi,no_tel,no_hp,nama_cp,email_cp, latitude, longitude)=>{
  
    this.props.navigation.navigate('editDataPerusahaan', { 

      ID : id_perusahaan,
      NAME : nama_perusahaan,
      ALAMAT : lokasi,
      NOTEL : no_tel,
      NOHP : no_hp,
      NAMACP : nama_cp,
      EMAIL : email_cp,
      LATITUDE : latitude,
      LONGITUDE : longitude

    });

}

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(rowData => {      
      const itemData = `${rowData.nama_perusahaan.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ 
      
      dataSource: ds.cloneWithRows(newData) }); 
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/2ecc71'}}/>
            <TextInput style={styles.inputs}
                ref={'txtPassword'}
                placeholder="Search"
                underlineColorAndroid='transparent'
                onChangeText= {text => this.searchFilterFunction(text)}/>
          </View>
        </View>

        <ListView style={styles.notificationList} enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return ( 
              <View style={styles.notificationBox}>                
                <Text style={styles.description} onPress={this.GetPerusahaanIDFunction.bind(
                          this, rowData.id_perusahaan,
                           rowData.nama_perusahaan, 
                           rowData.lokasi, 
                           rowData.no_tel, 
                           rowData.no_hp,
                           rowData.nama_cp,
                           rowData.email_cp,
                           rowData.latitude,
                           rowData.longitude
                           )}>
                           {rowData.nama_perusahaan}</Text>
                
              </View>
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454e59',
  },
  formContent:{
    flexDirection: 'row',
    backgroundColor: "#5ccdde"
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
      marginBottom: 25,
      marginTop: 25,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius:30,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList:{
    marginTop:10,
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
});