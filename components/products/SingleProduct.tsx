import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import { Color, font } from '../myTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MyButton from '../MyButton'

export default function SingleProduct() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const imageUrls = [
    { url: "", props: { source: require("../../src/necklace.png"), backgroundColor: Color.dark } },
    { url: "", props: { source: require("../../src/necklace.png"), backgroundColor: Color.dark } },
    { url: "", props: { source: require("../../src/necklace.png") } },
  ]

  type TableType = {
    name?: string,
    value?: string
  }
  const priceBreakUp = [
    { name: "Gold Rate (18 KT)", value: "₹418.25/gm" },
    { name: "Gold Weight (gms)", value: "1.618" },
    { name: "Gross Weight", value: "1.68gm" },
    { name: "Stone Value", value: "₹3000" },
    { name: "Gold Weight (gms)", value: "1.618" },
    { name: "Gross Weight", value: "1.68gm" },
    { name: "Stone Value", value: "₹3000" },
  ]

  const specification = [
    { name: "Purity", value: "18.00" },
    { name: "Brand", value: "SBA" },
    { name: "Quantity", value: "1" },
    { name: "Stone Value", value: "₹3000" },
    { name: "Gender", value: "Women" },

  ]



  const [Increment, setIncrement] = useState<number>(1)
  const [sizeSelect, setsizeSelect] = useState<number>(0)

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
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={font.subHeading}>{heading}</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, flexWrap: 'wrap', gap: 10 }}>
          {content.map((item: any, index: number) => (
            <MyButton
              backgroundColor={index == sizeSelect && isColorChange ? Color.gold : Color.lightGrey}
              color={index == sizeSelect && isColorChange ? "white" : Color.grey}
              text={item}
              index={index}
              key={index}
              onPress={() => isPress ? setsizeSelect(index) : void (0)}
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
        <View style={{ flexDirection: 'row', marginTop: 15, flexWrap: 'wrap', gap: 10 }}>
          {content.map((item: TableType, index: number) => (
            <View style={{ flexDirection: 'row' }} key={index}>
              <View style={{ width: '50%' }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text>{item.value}</Text>
              </View>
            </View>
          ))}
          {isPrice &&
            <>
              <View style={{ width: '100%', height: 2, backgroundColor: Color.lightGrey }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%' }}>
                  <Text style={{ fontWeight: 'bold' }}>Grand Total</Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text style={{ fontWeight: 'bold' }}>₹9000</Text>
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

          <Desc isPress={true} heading='Size (mm)' content={[2.5, 4.5, 6.5]} />

          <Desc isPress={false} heading='Weight (gms)' content={[2.5, 4.5, 6.5]} />

          <Desc isPress={false} isColorChange={false} heading='Styling' content={["wedding", "Engagement", "Anniversery"]} />

          <BreackUpTable heading='Price BreakUp' content={priceBreakUp} />

          <BreackUpTable heading='Product Specifications' content={specification} isPrice={false} />

        </View>


      </ScrollView>
      {/* Add to Cart */}
      <TouchableOpacity style={styles.addtoCartContainer} activeOpacity={.5}>
        <View style={styles.addtartView}>
          <View style={{ flexDirection: 'row' }}>
            <Feather name='shopping-cart' size={27} style={{ color: 'white', marginRight: 15 }} />
            <Text style={[font.subHeading, { color: 'white' }]}>Add to Cart</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Entypo name='flow-line' size={27} color={Color.lightGold} />
            <Text style={[font.heading, { color: 'white' }]}>₹9000</Text>
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
    alignItems:'center'
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