import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'

const OrderConf = ({ route, navigation }) => {
    return (
        <View style={{ padding: 5 }}>
            <Icon name='check-decagram' style={{ fontSize: 40, color: 'green', textAlign: 'center', margin: 20 }} />
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: '300', marginBottom: 20 }}>Order Placed Successfully</Text>
            <Text style={{ padding: 5, backgroundColor: 'orange' }}>Items Ordered</Text>
            <View>
                {route.params.cart.map((data, index) => {
                    return (
                        <View key={index} style={styles.cartItem}>
                            {/* <View>
                            </View> */}
                            <Text>{data.quantity ? data.quantity : 1} X {data.name}</Text>
                            <Text>&#8377; {data.price}/-</Text>
                            <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: '300' }}>&#8377; {(data.quantity ? data.quantity : 1) * data.price}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: 'orange' }}>
                <Text>Paid: </Text>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>&#8377; {route.params.amount}</Text>
            </View>
            <Icon name='robot-outline' style={{ fontSize: 50, textAlign: 'center', margin: 10 }} />
            <Text style={{ fontSize: 20, fontWeight: '300', textAlign: 'center' }}>Your Items will be at the counter soon!</Text>
            
        </View>
    )
}

export default OrderConf

const styles = StyleSheet.create({
    cartItem: {
        backgroundColor: '#fff',
        margin: 2,
        padding: 10,
    },
})