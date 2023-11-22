import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, Platform,
  Text,View, TouchableOpacity,Alert, useColorScheme
} from 'react-native';

export default function Home() {
  
  const isDark = useColorScheme()==="dark"
    
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={[styles.container, {backgroundColor:isDark?"black":"white"}]}>
        
        
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginVertical: 10,
  },
});