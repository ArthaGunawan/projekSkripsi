import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, Alert, 
    TextInput, Text, 
    Platform, 
    TouchableOpacity,
    ScrollView,
    Picker, ActivityIndicator, Button } 
from 'react-native';
import DatePicker from 'react-native-datepicker';

//import { StackNavigator } from 'react-navigation';
export default class insertDataPerusahaan extends Component {

    static navigationOptions =
    {
       title: 'Data Perusahaan',
    };
  
  constructor(props) {
  
     super(props)
  
     this.state = {
  
       TextInput_Id: '',
       TextInput_Nama_Perusahaan: '',
       TextInput_NIB: '',
       TextInput_KITAS: '',
       TextInput_IMTA: '',
       TextInput_NPWP: '',
       TextInput_APP: '',
       TextInput_TANAH: '',
       TextInput_IMB: '',
       TextInput_SITU: '',
       TextInput_DOKLING: '',
       TextInput_IJINP: '',
       TextInput_IJINU: '',
       TextInput_TKRJ: '',
       TextInput_INVEST: '',
       TextInput_STATUS: '',
       TextInput_Masalah: '',
       date:'',
       error: null,
       isLoading: true,
  
     }
     this.arrayholder = [];
  
   }

    componentDidMount() {
      
      return fetch('http://192.168.43.183/amp/mobile/showBap.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
   InsertStudentRecordsToServer = () =>{
  
        fetch('http://192.168.43.183/amp/mobile/InsertBeritaAcara.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          id_perusahaan : this.state.TextInput_Id, 
          nama_perusahaan : this.state.TextInput_Nama_Perusahaan,
          date: this.state.date,
          nib : this.state.TextInput_NIB,
          kitas : this.state.TextInput_KITAS,
          imta: this.state.TextInput_IMTA,
          npwp: this.state.TextInput_NPWP,
          app: this.state.TextInput_APP,
          tanah: this.state.TextInput_TANAH,
          imb: this.state.TextInput_IMB,
          situ: this.state.TextInput_SITU,
          dokling: this.state.TextInput_DOKLING,
          ijinp: this.state.TextInput_IJINP,
          ijinu: this.state.TextInput_IJINU,
          tkrj: this.state.TextInput_TKRJ,
          status: this.state.TextInput_STATUS,
          invest: this.state.TextInput_INVEST,
          permasalahan: this.state.TextInput_Masalah
  
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

  GetPickerSelectedItemValue=()=>{ 
      Alert.alert(this.state.TextInput_Nama_Perusahaan); 
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
        <ScrollView scrollEnabled={true}>
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 30, fontWeight:'bold', color:"#fff", textAlign: 'center', marginBottom: 25}}> Form Input Berita Acara Pemeriksaan</Text>

                <DatePicker
                  style={{width: '90%',
                  marginBottom: 7,
                  borderWidth: 1,
                  borderColor: '#5ccdde',
                  backgroundColor: '#fff',
                  borderRadius: 5 ,}}

                  date={this.state.date}
                  mode="date"
                  placeholder="Pilih Tanggal"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2030-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
                <Text style={styles.labelText}>Status</Text>
                <Picker
                  selectedValue={this.state.TextInput_STATUS}
                  style={styles.PickerStyle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({TextInput_STATUS: itemValue})
                  }>
                  <Picker.Item label="Pemantauan" value="Pemantauan" />
                  <Picker.Item label="Pembinaan" value="Pemantauan" />
                  <Picker.Item label="Pengawasan" value="Pengawasan" />
                </Picker>
                <Text style={styles.labelText}>Nama Perusahaan</Text>
                <Picker style={styles.PickerStyle} 
                  selectedValue={this.state.TextInput_Nama_Perusahaan}
      
                  onValueChange={(itemValue, itemIndex) => this.setState({TextInput_Id: itemValue}&&{TextInput_Nama_Perusahaan: itemValue})} >
                  
                  <Picker.Item label="Pilih Perusahaan" value="0"/>
                  { this.state.dataSource.map((item, key)=>(
                  <Picker.Item label={item.nama_perusahaan} value={item.id_perusahaan && item.nama_perusahaan} key={key} />)
                  )}
          
                </Picker>               

                <Text style={styles.labelText}>NIB (Nomer Induk Berusaha)</Text>        
                <TextInput
                placeholder="Enter NIB (Nomer Induk Berusaha)"
                onChangeText={ TextInputValue => this.setState({ TextInput_NIB : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>KITAS</Text>
                <TextInput
                placeholder="Enter KITAS"
                onChangeText={ TextInputValue => this.setState({ TextInput_KITAS : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>IMTA</Text>        
                <TextInput
                placeholder="Enter IMTA"
                onChangeText={ TextInputValue => this.setState({ TextInput_IMTA : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>NPWP</Text>
                <TextInput
                    placeholder="Enter NPWP"
                    onChangeText={ TextInputValue => this.setState({ TextInput_NPWP : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>Akte Pendirian dan Perubahan</Text>
                <TextInput
                placeholder="Enter Akte Pendirian dan Perubahan"
                onChangeText={ TextInputValue => this.setState({ TextInput_APP : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>Status Penguasaan Tanah</Text>
                <TextInput
                placeholder="Enter Status Penguasaan Tanah"
                onChangeText={ TextInputValue => this.setState({ TextInput_TANAH : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />        
                <Text style={styles.labelText}>IMB</Text>
                <TextInput
                placeholder="Enter IMB"
                onChangeText={ TextInputValue => this.setState({ TextInput_IMB : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />        
                <Text style={styles.labelText}>SITU</Text>
                <TextInput
                placeholder="Enter SITU"
                onChangeText={ TextInputValue => this.setState({ TextInput_SITU : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />  
                <Text style={styles.labelText}>Dokumen Lingkungan</Text>      
                <TextInput
                placeholder="Enter Dokumen Lingkungan"
                onChangeText={ TextInputValue => this.setState({ TextInput_DOKLING : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />       
                <Text style={styles.labelText}>Ijin Prinsip</Text> 
                <TextInput
                placeholder="Enter Ijin Prinsip"
                onChangeText={ TextInputValue => this.setState({ TextInput_IJINP : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                /> 
                <Text style={styles.labelText}>Ijin Usaha</Text>       
                <TextInput
                placeholder="Enter Ijin Usaha"
                onChangeText={ TextInputValue => this.setState({ TextInput_IJINU : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />        
                <Text style={styles.labelText}>Tenaga Kerja Asing/Indonesia</Text>
                <TextInput
                placeholder="Enter Tenaga Kerja Asing/Indonesia"
                onChangeText={ TextInputValue => this.setState({ TextInput_TKRJ : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />        
                <Text style={styles.labelText}>Jumlah Investasi</Text>
                <TextInput
                placeholder="Enter Jumlah Investasi"
                onChangeText={ TextInputValue => this.setState({ TextInput_INVEST : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text style={styles.labelText}>Permasalahan</Text>
                <TextInput
                onChangeText={ TextInputValue => this.setState({ TextInput_Masalah : TextInputValue }) }
                underlineColorAndroid='transparent'
                style={styles.TextInputDeskripsi}
                />                       
                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
        
                <Text style={styles.TextStyle}> INPUT BERITA ACARA </Text>
        
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
    TextInputDeskripsi:{
      textAlign: 'center',
      width: '90%',
      marginBottom: 7,
      height: 80,
      borderWidth: 1,
      borderColor: '#5ccdde',
      backgroundColor: '#fff',
      borderRadius: 5 ,

    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:20,
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
    },

    labelText:{
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 5
    },

    PickerStyle:{
      textAlign: 'center',
      width: '90%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#5ccdde',
      backgroundColor: '#fff',
      borderRadius: 5 ,
      paddingBottom: 10,
      alignItems: "center"
    }
   
  });