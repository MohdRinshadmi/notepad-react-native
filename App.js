import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import {AsyncStorage} from "react-native";

export default function App(){
const [data, setData] = useState('')
const [input, setInput] = useState('')
const add = async()=>{
try{
 await AsyncStorage.setItem('item',input)
 }catch(e){
  console.log(e)
 }
}
const get = async()=>{
  try{
    const value = await AsyncStorage.getItem('item')
    if(value!=null){
      setData(value)
    }
  }catch(e){
    console.log(e)
  }
}
  return(
    <View style = {styles.container}>
      <TextInput style = {styles.inputView}
       placeholder= 'Enter your item here'
       placeholderTextColor= 'black'
       value= {input}
       onChangeText={setInput}>
      </TextInput>
      <Text style = {styles.textView}>{data}</Text>
      <View style = {styles.buttonText}>
        <Button 
        title= 'add'
        onPress={add}/>
      </View>
      <View style = {styles.buttonText}>
        <Button 
        title= 'get'
        onPress={get}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111'
  },
  buttonText: {
    width: '55%',
    margin: 15
  },
  inputView: {
    fontSize: 18,
    width: '65%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    textAlign: 'center'
  }
})