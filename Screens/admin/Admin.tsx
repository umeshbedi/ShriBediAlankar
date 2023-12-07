import { Button, StyleSheet, Text, View, ToastAndroid, Alert, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
const fireData = firestore()
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signUp } from '../../components/signIn'
import MyButton from '../../components/MyButton'
import { Color, font } from '../../components/myTheme'
import AddOrnaments from './AddOrnaments'
import OrnamentList from './OrnamentList'
import OrderHistory from './OrderHistory'



GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '446699533292-ich0j59g4a0ccdhgirb1q3na6hn53658.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});


export default function Admin() {

    const [localUser, setLocalUser] = useState(null)
    const [isActive, setIsActive] = useState<number>(0)
    const [goldPrice, setGoldPrice] = useState<number>(0)

    async function getLocalUser() {
        await AsyncStorage.getItem('User', (err, res: any) => {
            const tempLocalUser = JSON.parse(res)
            if (tempLocalUser != null) {
                fireData.doc(`Users/${tempLocalUser.id}`)
                    .onSnapshot((snap: any) => {
                        setLocalUser(snap.data())
                    })
            }
            if (err) { Alert.alert("Error", err.message) }
        })
    };

    useEffect(() => {
        getLocalUser()
        fireData.doc(`admin/goldPrice`).onSnapshot(snap => {
            const data = snap.data()
            if (data != undefined) {
                setGoldPrice(data.price)
            }
        })
    }, [])

    const ButtonArr = [
        { text: "Add Ornaments", icon: "plus", element: () => <AddOrnaments /> },
        { text: "Ornaments List", icon: "list-ol", element: () => <OrnamentList /> },
        { text: "Selling List", icon: "money-bill-trend-up", element: () => <OrderHistory /> },
    ]

    const [section, setSection] = useState(<AddOrnaments />)

    function updateGoldPrice(price: string) {
        fireData.collection("admin")
            .doc("goldPrice")
            .update({ "price": Number(price) })
            .then(() => Alert.alert("Price Updated"))
            .catch((e) => console.log(e))
    }

    return (
        <View>
            <Header />
            <View style={styles.goldPriceView}>
                <View style={{ flex: 0 }}>
                    <Text style={font.subHeading}>Gold Price:</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput textContentType='password' defaultValue={String(goldPrice)} keyboardType='number-pad' placeholder='Gold Price' style={styles.goldInput} onSubmitEditing={(e) => updateGoldPrice(e.nativeEvent.text)} />
                </View>
                {/* <View style={{ flex: 1 }}>
                    <Button title='Save' color={Color.gold} onPress={setGoldPrice} />
                </View> */}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: "5%", paddingVertical: 15 }}>
                <View style={{ paddingRight: 30, flexDirection: 'row' }}>
                    {ButtonArr.map((item, index) => (
                        <View style={{ marginRight: 10 }} key={index}>
                            <MyButton icon={item.icon} text={item.text} color={index == isActive ? 'white' : 'grey'} backgroundColor={index == isActive ? Color.gold : "white"} onPress={() => { setIsActive(index); setSection(item.element) }} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View>
                {section}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goldInput: {
        borderWidth: .5,
        backgroundColor: 'white',
        borderColor: Color.lightGrey,
        borderRadius: 5,
        paddingLeft: 10
    },
    goldPriceView: {
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: "5%",
        alignItems: 'center'
    }
})