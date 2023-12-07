import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Check() {
    const {navigate} = useNavigation()
  return (
    <View style={{flexDirection:'row'}}>
      <Button title='test1'/>
      <Button title='test2'/>
    </View>
  )
}

const styles = StyleSheet.create({})