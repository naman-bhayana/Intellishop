// import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image, FlatList } from 'react-native'
import { Button } from 'react-native'
import { ScrollView } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../components/loading'
// import { signout } from '../store/actions/userActions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconRobot from 'react-native-vector-icons/MaterialCommunityIcons'
import shopData from '../../data/shopData'
import ShopCard from '../../components/home/shopCard'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'

export default function HomeScreen({ navigation }) {
    // const dispatch = useDispatch()
    // const userSignin = useSelector((state) => state.userSignin)
    // const { userInfo } = userSignin
    // console.log(userInfo)
    const [IconRobotname, setIconRobotname] = useState('robot-off-outline')
    useEffect(() => {
        connectRobot()
    }, []);
    // setInterval(() => {
    //     connectRobot()
    // }, 5000);
    const logout = () => {
        navigation.replace('Login')
        alert('Logged out')
    //     dispatch(signout())
    }
    const connectRobot = ()=>{
        axios.get('https://unipedia-8dca5-default-rtdb.firebaseio.com/robot/ip.json').then(res=>{
            const src =`http://${res.data}/status`
            console.log(src)
            axios.get(src).then(res=>{
                if(res.status == 200){
                    setIconRobotname('robot-love-outline');
                }else{
                    setIconRobotname('robot-off-outline');
                    alert('Robot Service not currently Running!')
                }
            }).catch(e=>{
                console.log(e)
            })
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Text style={{ fontSize: 28, fontWeight: '300' }}>Robo Retail</Text>
                    <Icon1 name='info' style={{ fontSize: 30 }} onPress={() => navigation.navigate('About Us')} />
                </View>
                <View style={styles.headerText}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='account-circle' size={38} />
                        {/* <Text style={styles.headerText}>Hi, {userInfo && userInfo.name}</Text> */}
                    </View>
                    <TouchableOpacity onPress={connectRobot} style={{ alignItems: 'center' }}>
                        <IconRobot name={IconRobotname} size={38} />
                        {
                            IconRobotname == 'robot-love-outline'&&
                            <Text >Connected!</Text>
                        }
                    </TouchableOpacity>
                    <View>
                        <Icon name='logout' onPress={logout} size={25} style={{ textAlign: 'center' }} />
                        <Text>Logout</Text>
                    </View>
                </View>
            </View>
            {/* <Text style={{ fontSize: 20, padding: 10, marginHorizontal: 10, width: '90%', borderRadius: 20, color: '#fff', backgroundColor: 'orange' }}>Choose from Variety of Shops</Text> */}
            <FlatList
                style={styles.flatList}
                data={shopData}
                renderItem={({ item }) => <ShopCard {...item} />}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaffd3',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    bgContainer: {
        minWidth: '100%',
        // backgroundColor: '#000022',
        minHeight: '15%',
        padding: 10
    },
    headerText: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 20,
        // color: '#fff',
        marginHorizontal: 20,
        textTransform: 'capitalize'
    },
    // scrollContainer: {
    //     flex: 1,
    //     minWidth: '100%',
    //     borderTopRightRadius: 30,
    //     borderTopLeftRadius: 30,
    //     backgroundColor: '#fff',
    //     padding: 10,
    //     alignItems: 'center'
    // },
    flatList: {
        flex: 1,
        maxWidth: '100%',
        // borderWidth: 1
    },
    // wrapper: {
    //     flex: 1,
    //     // borderWidth: 1,
    //     alignItems: 'center',
    //     margin: 10,
    //     maxWidth: '100%'
    // },

});