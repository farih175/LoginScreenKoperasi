import React from "react";
import {ImageBackground, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, onPress, Text } from "react-native";

const UselessTextInput = () => {
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);

  return (
     <><ImageBackground source={require('./src/images/background.jpeg')} resizeMode="cover"
      style={{ flex: 1 }}>
   
        <TextInput
          style={styles.input1}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Username"
          keyboardType="text" />
        <TextInput secureTextEntry={true}
          style={styles.input2}
          onChangeText={onChangeText2}
          value={text2}
          placeholder="Password"
          keyboardType="text" />
          <View style={styles.container1}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>Login
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container2}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>Daftar
        </Text>
      </TouchableOpacity>
    </View>
      </ImageBackground>
      
      </>
    
      
      
  );
};

const styles = StyleSheet.create({
  container1:{
    marginTop:10,
    marginRight:10,
    marginLeft:290,
    height: 30,
    width:50,
    margin: 1,
    borderWidth: 1,
    padding: 7,
    backgroundColor: 'lightgreen',

  },
  container2:{
    marginTop:10,
    marginLeft:290,
    height: 30,
    width:50,
    margin: 1,
    borderWidth: 1,
    padding: 7,
    backgroundColor: 'lightgreen',

  },
  input1: {
    marginTop:370,
    height: 40,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  input2: {
    height: 40,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize:11.3
  }
});

export default UselessTextInput;