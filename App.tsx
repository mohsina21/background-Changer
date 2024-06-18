

const styles = StyleSheet.create({})
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useState
  TouchableOpacity
} from 'react-native';


function App(): React.JSX.Element {

  const [bg,setbg] = useState("#ffffff")
  const generateColor = ()=>{
    const hexrange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i<6; i++){
      color += hexrange[Math.floor(Math.random()*16)]
    }
  }
  return (
    <><StatusBar> backgroundColor = {"#000000"} </StatusBar><View style={styles.container}>
      <TouchableOpacity>
        <View style = {styles.actionBtn}>
          <Text style = {styles.actionbtntext}> press me</Text>
        </View>

      </TouchableOpacity>
    </View></>
  );
}

const styles = StyleSheet.create({
});

export default App;
