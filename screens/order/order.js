import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import shopData from '../../data/shopData'
// import shopData from '../data/shopData'
// import ShopCard from '../components/home/shopCard'
const Order = ({ route, navigation }) => {
    const shop = shopData.find((x) => x.name == route.params.shop)
    const item = shop.menu.find(x => x._id == route.params.item)
    const [cartItems, setCartItems] = useState([item])
    useEffect(() => {
        shop.menu.forEach(x => x.quantity = 0)
        item.quantity = 1
        setCartItems([item])
    }, [])
    const [amount, setAmount] = useState(item.price)
    const [address, setAddress] = useState('')
    var total_items = 1
    var temp = 0
    const onRemove = (id) => {
        var cart = cartItems
        for (var i = 0; i < cart.length; i++) {
            if (id === cart[i]._id) {
                cart[i].quantity -= 1
                setCartItems(cart.filter(x => x.quantity > 0))
                temp = 0
                cart.filter(x => x.quantity > 0).map(x => { temp = temp + x.price * x.quantity })
                setAmount(temp)
            }
        }

    }
    const onClick = (id) => {
        var objFound_bool = false;
        var cart = shop.menu
        for (var i = 0; i < cart.length; i++) {
            if (id === cart[i]._id) {
                objFound_bool = true;
                cart[i].quantity += 1
                setCartItems(cart.filter(x => x.quantity > 0))
                temp = 0
                cart.filter(x => x.quantity > 0).map(x => { temp = temp + x.price * x.quantity })
                setAmount(temp)
            }
        }
    }
    // useEffect(() => {
    //     temp = 0
    //     cartItems.map(x => {
    //         setAmount(temp + x.price * x.quantity);
    //         temp = amount
    //     })
    // }, [cartItems])

    const onOrder = () => {
        navigation.navigate('Order Confirmation', {
            shop: shop.name,
            cart: cartItems,
            amount: amount,
            address: address
        })
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: '300' }}>Order Items</Text>
                <View style={styles.itemContainer}>
                    {cartItems.map((data, index) => {
                        return (
                            <View key={index} style={styles.cartItem}>
                                <View>
                                    <Text>{data.name}</Text>
                                    <Text>{data.price}</Text>
                                    {!data.available && <Text style={{ color: 'red' }}>Not Available Currently</Text>}
                                </View>
                                <View style={styles.cartActions}>
                                    <TouchableOpacity onPress={() => onClick(data._id)} style={styles.cartAddBtn} ><Text>+</Text></TouchableOpacity>
                                    <Text style={{ marginHorizontal: 6 }}>{data.quantity}</Text>
                                    <TouchableOpacity onPress={() => onRemove(data._id)} style={styles.cartRemoveBtn}><Text>-</Text></TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{ borderWidth: 1, padding: 5, margin: 4, borderColor: 'orange', backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Total</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>&#8377;{amount}</Text>
                </View>
                <View style={{ borderWidth: 1, marginVertical: 20 }}>
                    <View style={{ backgroundColor: '', alignItems: 'center', padding: 10 }}>
                        <Text>More Items from {shop.name}</Text>
                    </View>
                    {
                        shop.menu.map((data, index) => {
                            if (data._id == route.params.item) {
                                return
                            }
                            return (
                                <View key={index} style={styles.serviceContainer}>
                                    <View style={styles.serviceImg}></View>
                                    <View style={styles.service}>
                                        <Text>{data.name}</Text>
                                        <Text style={styles.servicePrice}>{data.price}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => onClick(data._id)} style={styles.cartAddBtn} ><Text>+</Text></TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            {/* <View style={{ backgroundColor: '#fff', padding: 2 }}>
                <Text>Deliver to : </Text>
                <TextInput placeholder="Address" onChangeText={setAddress} value={address} style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, margin: 4 }} />
            </View> */}
            <TouchableOpacity style={{ width: '100%', backgroundColor: 'orange', height: 60, alignItems: 'center', justifyContent: 'center' }} onPress={onOrder}>
                <Text style={{ fontSize: 24 }}>
                    Place Order
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#eaffd3',
    },
    itemContainer: {
    },
    serviceContainer: {
        // justifyContent: 'center',
        // borderWidth: 1,
        // borderRadius: 30,
        flexDirection: 'row',
        width: '100%',
        // marginVertical: 5,
        padding: 3,
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    serviceImg: {
        width: 40,
        height: 40,
        // borderRadius: 50,
        margin: 8,
        backgroundColor: '#ddd',
        // borderWidth: 1,
        borderRadius: 20
    },
    service: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    servicePrice: {
        // color: "#aaa",
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 15
        // float: 'right'
    },
    cartItem: {
        backgroundColor: '#fff',
        margin: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartActions: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center'
    },
    cartAddBtn: {
        backgroundColor: 'lightgreen',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        borderRadius: 20,
        width: 30,
        height: 30,
    },
    cartRemoveBtn: {
        backgroundColor: 'salmon',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        borderRadius: 20,
        width: 30,
        height: 30,
    }
})