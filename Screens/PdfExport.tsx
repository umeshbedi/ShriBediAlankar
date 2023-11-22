

// Import React
import React, { useState } from 'react';
// Import required components
import {
  SafeAreaView, StyleSheet, Platform,
  Text,View, TouchableOpacity,Alert, useColorScheme
} from 'react-native';

// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// Import RNPrint
import RNPrint from 'react-native-print';

import { html } from '../components/html';

export default function PDFexport() {
  
  const isDark = useColorScheme()==="dark"
    
  const printHTML = async () => {
    await RNPrint.print({
      html:
        "<h1>LogRocket is a React Native monitoring solution that helps you reproduce issues instantly, prioritize bugs, and understand performance in your React Native apps. LogRocket also helps you increase conversion rates and product usage by showing you exactly how users are interacting with your app. LogRocket's product analytics features surface the reasons why users don't complete a particular flow or don't adopt a new feature.</h1>",
    jobName:`#invoice${new Date().getMonth()}`});
  };

  const printPDF = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: "",
      fileName: 'test',
      base64: true,
    });
    await RNPrint.print({ filePath: results.filePath });
  };

  const printRemotePDF = async () => {
    await RNPrint.print({
      filePath: 'http://www.africau.edu/images/default/sample.pdf',
    });
  };

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>
        Print HTML as a Document from React Native App
      </Text>
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={printHTML}>
          <Text>Click to Print HTML</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={printPDF}>
          <Text>Click to Print PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={printRemotePDF}>
          <Text>Click to Print Remote PDF</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
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