import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const ShopCard = ({ _id, name, open, menu, rating, openHours, closeHours }) => {


    const [expanded, setExpanded] = useState(false)
    const [data, setData] = useState(menu.slice(0, 3))
    const expandCard = () => {
        setExpanded(!expanded)
    }
    useEffect(() => {
        expanded ? setData(menu) : setData(menu.slice(0, 3))
    }, [expanded])
    var stars = ''
    if (rating !== undefined) {
        for (let i = 0; i < rating; i++) {
            stars = stars + `<IconFa5 name='star' />`
        }
    } else {
        stars = `<Text style={{ color: "#aaa" }}>No Ratings</Text>`
    }
    const navigation = useNavigation();
    const onClick = (shop, item_id) => {
        navigation.navigate('Order', {
            shop: shop,
            item: item_id,
        })

    }
    const hour = new Date().getHours()
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.titleText}>{name}</Text>
                {/* {
                    hour >= openHours && hour <= closeHours ?
                        <Text style={{ fontWeight: 'bold', color: 'green' }}>Open</Text> :
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>Closed</Text>

                } */}
            </View>
            <View style={{ paddingHorizontal: 15, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Text style={{}}>User Rating : {rating}/5</Text>
            </View>
            <View style={styles.middleGrid}>
                {
                    data.map((data, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={index} style={styles.serviceContainer} onPress={() => onClick(name, data._id)}>
                                <View style={styles.serviceImg}></View>
                                <View style={styles.service}>
                                    <Text>{data.name}</Text>
                                    <Text style={styles.servicePrice}>{data.price}</Text>
                                </View>
                                {/* <Text style={styles.servicePrice}>{data.name}</Text> */}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            {
                menu.length > 3 && !expanded ? <Icon name='expand-more' size={30} onPress={expandCard} /> : menu.length > 3 &&
                    expanded && <Icon name='expand-less' onPress={expandCard} size={30} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        maxWidth: '100%',
        margin: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20
    },
    titleText: {
        fontSize: 20,
        // color: '#fff'
        // margin: 1

    },
    topBar: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: '#fff',
        // color: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        padding: 10,
        // borderBottomWidth: 1

    },
    bottomBar: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    middleGrid: {
        marginHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    serviceContainer: {
        // justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
        padding: 3,
        alignItems: 'center',
        backgroundColor: "#f1f1f1",
    },
    serviceImg: {
        width: 40,
        height: 40,
        // borderRadius: 50,
        margin: 8,
        backgroundColor: '#ccc',
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
    }
})

export default ShopCard
