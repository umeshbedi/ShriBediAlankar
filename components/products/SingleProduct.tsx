import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import { Color, font } from '../myTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MyButton from '../MyButton'
import Header from '../Header'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SingleProduct({ navigation: { navigate } }: NativeStackScreenProps<any>) {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [goldPrice, setGoldPrice] = useState<number>(0)
  const [weightSelect, setWeightSelect] = useState<number>(0)

  const [Increment, setIncrement] = useState<number>(1)
  const [sizeSelect, setsizeSelect] = useState<number>(0)

  const imageUrls = [
    { url: "", props: { source: require("../../src/necklace.png"), backgroundColor: Color.dark } },
    { url: "", props: { source: require("../../src/lakshmiji.png"), backgroundColor: Color.dark } },
    { url: "", props: { source: require("../../src/pngwing.com.png") } },
  ]

  type TableType = {
    name?: string,
    value?: string
  }

  const priceBreakUp = {
    carat: 24,
    weight: [1.8, 2.5, 3.5],
    size: [2.5, 4.5, 6.5],
    makingCharge: 25,
    discount: 5,
    gst: 3
  }

  const goldValue = priceBreakUp.weight[weightSelect] * goldPrice
  const makingCharge = (priceBreakUp.weight[weightSelect] * goldPrice) * priceBreakUp.makingCharge / 100
  const discount = makingCharge * priceBreakUp.discount / 100
  const subTotal = goldValue + makingCharge - discount
  const gst = subTotal * priceBreakUp.gst / 100
  const grandTotal = subTotal + gst

  const priceList = [
    { name: `Gold Rate (${priceBreakUp.carat}KT)`, value: `₹${goldPrice}/gm` },
    { name: "Gold Weight", value: `₹${priceBreakUp.weight[weightSelect]}gm` },
    { name: "Gold Value", value: `₹${(goldValue).toFixed(2)}` },
    { name: "Making Charge", value: `₹${makingCharge.toFixed(2)}` },
    { name: `Discount (${priceBreakUp.discount}%)`, value: `- ₹${discount.toFixed(2)}` },
    { name: "Sub Total", value: `₹${subTotal.toFixed(2)}` },
    { name: "GST", value: `₹${gst.toFixed(2)}` },

  ]


  const specification = [
    { name: "Purity", value: "18.00" },
    { name: "Brand", value: "SBA" },
    { name: "Quantity", value: Increment },
    { name: "Gender", value: "Women" },

  ]



  useEffect(() => {
    async function loadPrice() {
      await AsyncStorage.getItem("goldPrice", (err, res) => {
        if (res != null) {
          const result = JSON.parse(res)
          if (priceBreakUp.carat == 18) { setGoldPrice(result.carat18) }
          else if (priceBreakUp.carat == 22) { setGoldPrice(result.carat22) }
          else if (priceBreakUp.carat == 24) { setGoldPrice(result.carat24) }
          // console.log(typeof(result.carat22))
        }
      })

    }
    loadPrice()


  }, [])

  let star = 4

  function numIncrement() { setIncrement(Increment + 1) }
  function numDecrement() { if (Increment > 1) { setIncrement(Increment - 1) } }

  type descType = {
    heading?: string,
    isPress?: boolean,
    content?: any,
    isColorChange?: boolean,
    isPrice?: boolean
  }
  function Desc({ heading, isPress, content = [], isColorChange = true }: descType) {

    function procedure(e: number) {
      if (heading == "Size (mm)") {
        setsizeSelect(e)
      }
      else if (heading == "Weight (gm)") {
        setWeightSelect(e)
      }
    }

    function colorChange() {
      if (heading == "Size (mm)") {

      }
      else if (heading == "Weight (gm)") {

      }
    }

    return (
      <View style={{ marginTop: 40 }}>
        <Text style={font.subHeading}>{heading}</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, flexWrap: 'wrap', gap: 10 }}>
          {content.map((item: any, index: number) => (
            <MyButton
              backgroundColor={heading == "Weight (gm)" && index == weightSelect ? Color.gold : 
              heading == "Size (mm)" && index == sizeSelect ? Color.gold : 
              Color.lightGrey}
              color={heading == "Weight (gm)" && index == weightSelect ? "white" :
                heading == "Size (mm)" && index == sizeSelect ? "white" : 
                Color.grey}
              text={item}
              index={index}
              key={index}
              onPress={() => isPress ? procedure(index) : void (0)}
            />
          ))}
        </View>
      </View>
    )
  }

  function BreackUpTable({ heading, content = [], isPrice = true }: descType) {
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={font.subHeading}>{heading}</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, flexWrap: 'wrap', gap: 20 }}>
          {content.map((item: TableType, index: number) => (
            <View style={{ flexDirection: 'row', gap: 10 }} key={index}>
              <View style={{ width: '50%' }}>
                <Text style={font.para}>{item.name}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text style={font.para}>{item.value}</Text>
              </View>
            </View>
          ))}
          {isPrice &&
            <>

              <View style={{ flexDirection: 'row', backgroundColor: Color.lightGrey, paddingVertical: 15, paddingHorizontal: 10, gap: 10 }}>
                <View style={{ width: '50%' }}>
                  <Text style={[{ fontWeight: 'bold' }, font.para]}>Grand Total</Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text style={[{ fontWeight: 'bold' }, font.para]}>₹{grandTotal.toFixed(2)}</Text>
                </View>
              </View>
              <View style={{ width: '100%', height: 2, backgroundColor: Color.lightGrey }} />
            </>
          }

        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ position: 'relative' }}>

      <ScrollView>
        <View style={{ width: '100%', height: 400 }}>
          <ImageViewer
            imageUrls={imageUrls}
            backgroundColor={Color.dark}
            menus={({ cancel, saveToLocal }) => React.createElement(cancel)}
            onClick={() => setModalVisible(true)}

          />
        </View>
        <View style={[styles.container]}>
          <Text style={[font.heading]}>Golden Ring</Text>

          <View style={styles.rateContainer}>
            {/* Ratings */}
            <View style={styles.ratingView}>
              {Array(5).fill(0).map((item, index) => {
                const isStar = index < star ? true : false
                return (<AntDesign name='star' key={index} style={{ color: isStar ? Color.yellow : Color.lightGrey2 }} size={18} />)
              })}
              <Text style={{ marginTop: -2 }}>{star}.0</Text>
            </View>
            {/* Increment and Decrement */}
            <View style={styles.incrementView}>
              <AntDesign name='minus' size={25} onPress={numDecrement} />
              <Text style={font.para}>{Increment}</Text>
              <AntDesign name='plus' size={25} onPress={numIncrement} />
            </View>

          </View>

          <Text style={font.para}>A golden necklace, a symbol of wealth and grace, Adorned with jewels, it lights up a face. </Text>

          <Desc isPress={true} heading='Size (mm)' content={priceBreakUp.size} />

          <Desc isPress={true} heading='Weight (gm)' content={priceBreakUp.weight} />

          <Desc isPress={false} isColorChange={false} heading='Styling' content={["wedding", "Engagement", "Anniversery"]} />

          <BreackUpTable heading='Price BreakUp' content={priceList} />

          <BreackUpTable heading='Product Specifications' content={specification} isPrice={false} />

        </View>


      </ScrollView>

      <View style={{ position: 'absolute', top: 0 }}>
        <Header isDark />
      </View>

      {/* Add to Cart */}
      <TouchableOpacity style={styles.addtoCartContainer} activeOpacity={.5} onPress={() => navigate("MyCart")}>
        <View style={styles.addtartView}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name='shopping-cart' size={27} style={{ color: 'white', marginRight: 15 }} />
            <Text style={[font.subHeading, { color: 'white' }]}>Add to Cart</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Entypo name='flow-line' size={27} color={Color.lightGold} />
            <Text style={[font.heading, { color: 'white' }]}>₹{(grandTotal * Increment).toFixed(0)}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <View style={{ height: '100%', backgroundColor: Color.dark }}>
            <ImageViewer
              imageUrls={imageUrls}
              menus={({ cancel, saveToLocal }) => React.createElement(cancel)}
              backgroundColor={Color.dark}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: '5%',
    marginBottom: '20%'
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  ratingView: {
    flexDirection: 'row',
    gap: 5,

  },
  incrementView: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: .5,
    borderColor: Color.lightGrey2,
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 30,
    alignItems: 'center'
  },

  addtoCartContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center'
  },
  addtartView: {
    backgroundColor: Color.gold,
    borderRadius: 50,
    width: '90%',
    paddingVertical: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})