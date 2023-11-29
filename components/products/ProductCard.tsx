import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, font, view } from '../myTheme'
import IonIcon from 'react-native-vector-icons/Ionicons'

type cardType = {
    name?: string,
    price?: number,
    image?: string,
    category?: string,
    goTo?:()=>void
}
export default function ProductCard({ name, price, image, category, goTo }: cardType) {
    return (
        <TouchableOpacity style={[style.container, {marginRight:25}]} activeOpacity={.7} onPress={goTo}>
            <View style={style.imageContainer}>
                <Image source={require("../../src/necklace.png")} style={{ height: 230, width: 230, resizeMode: 'cover' }} />
            </View>
            <View style={{ width: '100%' }}>
                <Text style={[font.subHeading, { marginTop: 10 }]}>Goden Necklace</Text>
                <Text style={{ fontSize: 13, color: Color.lightGrey2, marginTop: 2 }}>Necklace</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[font.subHeading, { marginTop: 10 }]}>₹5000</Text>
                    <View style={{ backgroundColor: Color.gold, padding: 7, borderRadius: 10 }}>
                        <IonIcon name={"bag-handle-outline"} size={25} style={{ color: 'white' }} />
                    </View>
                </View>

            </View>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 5,
        marginBottom: 10,

    },
    imageContainer: {
        width: 230,
        height: 230,
        backgroundColor: Color.greyWhite,
        borderRadius: 20
    }
})
