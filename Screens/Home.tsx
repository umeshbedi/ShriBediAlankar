import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet, Platform,
  Text, View, TouchableOpacity, Alert, useColorScheme, ScrollView, TextInput
} from 'react-native';
import { Color, font, view } from '../components/myTheme';
import ProductCard from '../components/products/ProductCard';
import IonIcon from 'react-native-vector-icons/Ionicons'
import BSheet from '../components/BSheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomSheetModal, BottomSheetModalProvider, useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet'
import MyButton from '../components/MyButton';
import Header from '../components/Header';

export default function Home({ navigation: { navigate } }: NativeStackScreenProps<any>) {

  const isDark = useColorScheme() === "dark"
  const [isActive, setIsActive] = useState<number>(0)

  const modalsheetRef = useRef<BottomSheetModal>(null)

  const snapPoints = ["30%", "50%"]

  function handlePresentModal() {
    modalsheetRef.current?.present()
  }
  function handleDismisstModal() {
    modalsheetRef.current?.dismiss()
  }
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 200,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 100,
  });


  type btnType = {
    text?: string,
    index?: number,
    onPress?: () => void
  }
  function Btn({ text, index, onPress }: btnType) {
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
        onPress={onPress}
      >
        <Text style={{
          color: index == isActive ? "white" : Color.grey,
        }}
        >{text}</Text>
      </TouchableOpacity>
    )
  }

  function BottomSheet() {
    return (
      <BottomSheetModal
        ref={modalsheetRef}
        index={0}
        snapPoints={snapPoints}
        animationConfigs={animationConfigs}
        style={{ borderRadius: 30 }}
      >
        <View style={{ padding: '5%', flex: 1 }}>
          <ScrollView>
            <Text style={font.subHeading}>Filter</Text>
            <View>
              <Text style={font.subHeading}>Type</Text>
              <View style={{ flexDirection: 'row' }}>
                {Array(2).fill({ name: "Gold" }).map((item, index) => (
                  <MyButton text={item.name} key={index} />
                ))}
              </View>
            </View>
            <View>
              <Text style={font.subHeading}>Size</Text>
            </View>
            <View>
              <Text style={font.subHeading}>Price</Text>
            </View>

          </ScrollView>
        </View>
      </BottomSheetModal>
    )
  }





  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ backgroundColor: isDark ? Color.dark : Color.greyWhite, flex: 1 }}>
        <View style={[styles.container]}>
          <Text style={[font.heading, { color: 'white' }]}>Shri Bedi Alankar</Text>
          <Text style={[font.para, { color: 'white' }]}>Find your precious ornaments</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <IonIcon name="search-outline" size={30} style={{ color: 'white' }} />
              <TextInput placeholderTextColor={"white"} placeholder='Search' style={[view.input, { color: 'white' }]} />
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.filterBox} onPress={handlePresentModal}>
              <IonIcon name="options-outline" size={35} style={{ color: Color.gold }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[view.container]}>
          <Text style={[font.subHeading]}>Top Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: '4%' }}>
            <Btn text={"All"} index={0} onPress={handleDismisstModal}></Btn>
            <Btn text={"Necklaces"} index={1}></Btn>
            <Btn text={"Rings"} index={2}></Btn>
            <Btn text={"Necklaces"} index={1}></Btn>
            <Btn text={"Rings"} index={2}></Btn>
            <Btn text={"Necklaces"} index={1}></Btn>
            <Btn text={"Rings"} index={2}></Btn>

          </ScrollView>
        </View>

        <ScrollView>
          <View style={[view.container]}>
            <Text style={[font.subHeading]}>Most Popular</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: '4%' }}>
              {Array(10).fill(0).map((item, index) => (
                <ProductCard key={index} goTo={() => navigate("SingleProduct")} />
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
        
        <View style={{ position: 'absolute', top: 0 }}>
          <Header isDark home/>
        </View>
      </SafeAreaView>
      <BottomSheet />
    </BottomSheetModalProvider>
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