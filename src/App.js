import { createStackNavigator} from 'react-navigation';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import insertDataPerusahaan from './pages/insertDataPerusahaan';
import editDataPerusahaan from './pages/editDataPerusahaan';
import listDataPerusahaan from './pages/listDataPerusahaan';
import insertBeritaAcara from './pages/insertBeritaAcara';
import lokasi from './pages/lokasi';

const MainStack = createStackNavigator({
  Login: {screen: Login},
  Signup: {screen: Signup},
  Home: {screen: Home},
  insertDataPerusahaan: {screen: insertDataPerusahaan},
  editDataPerusahaan: {screen: editDataPerusahaan},
  listDataPerusahaan: {screen: listDataPerusahaan},
  insertBeritaAcara: {screen: insertBeritaAcara},
  lokasi: {screen: lokasi}
},{
  navigationOptions:{
    header:null
  }
});

export default MainStack;