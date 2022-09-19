import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import {useFonts, Inter_400Regular,Inter_600SemiBold,Inter_700Bold,Inter_900Black} from '@expo-google-fonts/inter'
import {Home} from './src/screens/Home'
import {Loading} from './src/components/Loading'
import { Game } from './src/screens/Game';


export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black

  });
  return (
<>
   
    <Background>      
      <StatusBar 
       barStyle='light-content'
       backgroundColor='transparent'
       translucent
      />
      {fontLoaded?<Home />:<Loading />}
      </Background>
      
      
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
