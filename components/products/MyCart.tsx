import { Image, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { Color, font } from '../myTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: '5%' }}>
                    {Array(3).fill(0).map((item, index)=>(
                        <ItemCard key={index}/>
                    ))}
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
        marginBottom:20
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
    }
})