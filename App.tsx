import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

function App(): React.JSX.Element {
  const [bg, setBg] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBg(color);
  };

  return (
    <>
      <StatusBar backgroundColor={bg} />
      <View style={[styles.container, { backgroundColor: bg }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6B456A",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  actionBtnText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;
