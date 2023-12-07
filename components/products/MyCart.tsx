import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color, font } from '../myTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../Header'

export default function MyCart() {

    const [Increment, setIncrement] = useState<number>(1)
    const [sizeSelect, setsizeSelect] = useState<number>(0)

    function numIncrement() { setIncrement(Increment + 1) }
    function numDecrement() { if (Increment > 1) { setIncrement(Increment - 1) } }

    function ItemCard() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.imageConatiner}>
                    <Image source={require("../../src/necklace.png")} style={{ height: '100%', width: '100%', resizeMode: 'contain', backgroundColor: Color.lightGrey, borderRadius: 10 }} />
                </View>

                <View style={styles.descView}>
                    <Text style={font.subHeading}>Golden Ring</Text>
                    <Text>Weight: 2 (gm)</Text>
                    <Text style={font.subHeading}>₹9000</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.incrementView}>
                            <AntDesign name='minus' size={20} onPress={numDecrement} />
                            <Text>{Increment}</Text>
                            <AntDesign name='plus' size={20} onPress={numIncrement} />
                        </View>

                        <View>
                            <MaterialIcons name='delete' size={25} color={"orange"} onPress={() => ToastAndroid.show("You can delete Now", ToastAndroid.SHORT)} />
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{paddingBottom:80}}>
            <Header heading='My Cart'/>
            <ScrollView style={{ padding: '5%' }}>
                <View>
                    {Array(3).fill(0).map((item, index) => (
                        <ItemCard key={index} />
                    ))}
                </View>

                <View style={{ gap: 15, marginBottom:50 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: "5%" }}>
                        <Text style={font.para}>Item Total</Text>
                        <Text style={[font.para, { fontWeight: 'bold' }]}>₹27000</Text>
                    </View>

                    {/* Coupon Code Section */}
                    <View>
                        <View style={styles.couponView}>
                            <View>
                                <TextInput defaultValue='NEW1000' placeholder='Enter Coupon Code' autoCapitalize='characters' style={{ color: Color.grey }} />
                            </View>
                            <TouchableOpacity style={styles.couponButton} onPress={()=>ToastAndroid.show("Coupon code Applied successfully!", ToastAndroid.LONG)}>
                                <Text style={{ color: 'white' }}>Apply coupon</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: "5%", marginTop:10 }}>
                            <Text style={{ fontStyle: 'italic', color: Color.gold }}>Discount</Text>
                            <Text style={{ fontStyle: 'italic', color: Color.gold }}>₹1000</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: "5%" }}>
                        <Text style={font.para}>Making Charge</Text>
                        <Text style={[font.para]}>₹2000</Text>
                    </View>
                    <View style={{ width: '100%', height: 2, backgroundColor: Color.lightGrey3 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: "5%" }}>
                        <Text style={font.subHeading}>Grand Total</Text>
                        <Text style={[font.subHeading]}>₹28000</Text>
                    </View>

                    <TouchableOpacity style={styles.checkoutContainer} activeOpacity={.5} onPress={()=>ToastAndroid.show("Now You can go to payment page", ToastAndroid.LONG)}>
                        <Text style={[{textAlign:'center', color:'white'}, font.subHeading]}>CheckOut</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20
    },
    imageConatiner: {
        width: 140,
        height: 140,
        backgroundColor: 'red',
        borderRadius: 10,
        marginRight: 15
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
    descView: {
        gap: 10,
        width: '57%'
    },
    couponView: {
        borderRadius: 50,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderColor: Color.gold,
        backgroundColor: 'white'
    },
    couponButton: {
        backgroundColor: Color.gold,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    checkoutContainer: {
        backgroundColor: Color.gold,
        borderRadius: 50,
        height: 60,
        paddingVertical: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15
    }
})