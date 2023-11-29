import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, Platform,
  Text, View, TouchableOpacity, Alert, useColorScheme, ScrollView, TextInput
} from 'react-native';
import { Color, font, view } from '../components/myTheme';
import ProductCard from '../components/products/ProductCard';
import IonIcon from 'react-native-vector-icons/Ionicons'
import BSheet from '../components/BSheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function Home({navigation:{navigate}}:NativeStackScreenProps<any>) {

  const isDark = useColorScheme() === "dark"
  const [isActive, setIsActive] = useState<number>(0)

  type btnType = {
    text?: string,
    index?: number
  }
  function Btn({ text, index }: btnType) {
    return (
      <TouchableOpacity
        activeOpacity={.5}
        style={{
          backgroundColor: index == isActive ? Color.gold : 'white',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 30,
          marginRight: 15
        }}
      >
        <Text style={{
          color: index == isActive ? "white" : Color.grey,
        }}
        >{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: isDark ? Color.dark : Color.greyWhite, flex: 1 }}>
      <View style={[styles.container]}>
        <Text style={[font.heading, { color: 'white' }]}>Shri Bedi Alankar</Text>
        <Text style={[font.para, { color: 'white' }]}>Find your precious ornaments</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <IonIcon name="search-outline" size={30} style={{ color: 'white' }} />
            <TextInput placeholderTextColor={"white"} placeholder='Search' style={[view.input, { color: 'white' }]} />
          </View>
          <TouchableOpacity activeOpacity={.7} style={styles.filterBox} onPress={()=>navigate("SingleProduct")}>
            <IonIcon name="options-outline" size={35} style={{ color: Color.gold }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[view.container]}>
        <Text style={[font.subHeading]}>Top Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: '4%' }}>
          <Btn text={"All"} index={0}></Btn>
          <Btn text={"Necklaces"} index={1}></Btn>
          <Btn text={"Necklaces"} index={2}></Btn>
        </ScrollView>
      </View>
      
      <ScrollView>
        <View style={[view.container]}>
          <Text style={[font.subHeading]}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: '4%' }}>
            {Array(10).fill(0).map((item, index) => (
              <ProductCard key={index} goTo={()=>navigate("SingleProduct")}/>
            ))
            }
          </ScrollView>
        </View>

        <View style={[view.container]}>
          <Text style={[font.subHeading]}>New Ornaments</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: '4%' }}>
            {Array(10).fill(0).map((item, index) => (
              <ProductCard key={index} />
            ))
            }
          </ScrollView>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    padding: "5%",
    backgroundColor: Color.gold,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,

  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  searchBox: {
    height: 60,
    backgroundColor: "rgba(255,255,255, .2)",
    width: '80%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },

  filterBox: {
    height: 60,
    backgroundColor: "white",
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginVertical: 10,
  },
});