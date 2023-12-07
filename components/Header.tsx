import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { font } from './myTheme'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

type HeaderType = {
    heading?: string,
    isDark?: boolean,
    home?: boolean
}
export default function Header({ heading, isDark, home = false }: HeaderType) {

    const [localUser, setLocalUser] = useState(null)
    const [isActive, setIsActive] = useState<number>(0)
    async function getLocalUser() {
        await AsyncStorage.getItem('User', (err, res: any) => {
            const tempLocalUser = JSON.parse(res)
        
            if (tempLocalUser != null) {
                console.log(tempLocalUser.userRole)
                // fireData.doc(`Users/${tempLocalUser.id}`)
                //     .onSnapshot((snap: any) => {
                //         setLocalUser(snap.data())
                //     })
            }
            else if (err) { Alert.alert("Error", err.message) }
        })
    };

    useEffect(() => {
        getLocalUser()
        
    }, [])

    const { goBack, navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ width: "25%" }}>
                {!home &&
                    <AntDesign name='left' size={25} color={isDark ? "white" : "grey"} onPress={() => goBack()} />
                }
            </View>
            <View style={{ width: "50%" }}>
                <Text style={[{ textAlign: 'center' }, font.subHeading]}>{heading}</Text>
            </View>
            <View style={{ width: "25%", flexDirection:'row', justifyContent:"flex-end", gap:15}}>
                <FontAwesome name='user-gear' size={25} color={"red"} onPress={() => navigate("Admin")}/>
                <FontAwesome name='user-large' size={25} color={isDark ? "white" : "grey"} onPress={() => navigate("User")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        paddingVertical: 15,
        alignItems: 'center'
    }
})