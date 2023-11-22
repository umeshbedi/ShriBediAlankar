import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'


export default function Dashboard() {
const isdark = useColorScheme()==='dark'

if (isdark) {
  console.log(true)
}else{
  console.log(false)
}

  return (
    <View>
      <Text style={{}}>This is Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({})