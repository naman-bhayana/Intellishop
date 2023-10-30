import React, { useState, useEffect } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
// import { signin, signup } from '../store/actions/userActions'
// import { ToastAndroid } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({navigation}) {
    const [phone, setphone] = useState('')
    const [validateError, setValidateError] = useState()
    // const dispatch = useDispatch()

    // const userSignin = useSelector((state) => state.userSignin)
    // const userSignup = useSelector((state) => state.userSignup)

    
    const signIn = () => {
        // phone, password ? dispatch(signin(phone, password)) : alert('Enter all required fields.')
        navigation.navigate('Verify')
        // if (phone.length !== 10) {
        //     setValidateError("* Enter valid phone number!")
        // } else {
        //     setValidateError("")
        //     phone && navigation.navigate('Verify', {
        //         ph_no:phone
        //     })
        // }
        // var { userInfo, loading, error } = userSignin
        // if (error) {
        //     alert(error)
        // }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
        accessible={false} >
            <View style={styles.container}>

            <Text style={styles.heading}>
            Let's Sign You In
            </Text>
            <Text style={styles.subHeading}>
            Welcome back, you've been missed!
            </Text>
            {
                <>  
                        <Text style={styles.inputLabel}>Enter your Phone Number</Text>
                        <TextInput style={styles.textInput} placeholder="(+91)" keyboardType="numeric" onChangeText={setphone} value={phone} />
                        {/* <TextInput style={styles.textInput} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} /> */}

                        {/* <TouchableOpacity style={styles.continueBtn} onPress={() => signIn()}><Text>Continue</Text></TouchableOpacity> */}
                        <Text style={styles.errorTxt}>{validateError}</Text>
                        <TouchableOpacity  onPress={() => signIn()}>
                        <LinearGradient
                            colors={[
                                '#0336FF',
                                // '#0336FF',
                                '#E384FF'
                            ]}  
                            start={{x:0,y:0}}
                            end={{x:1,y:0}}
                            style={styles.continueBtn}
                            >
                            <Text style={styles.contBtnText}>Continue</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        <Text style={styles.or}>Or</Text>
                        <Text style={styles.signUpText} >
                        Don't have an account?<Text onPress={() => navigation.replace('SignUp')} style={styles.signup}> SignUp</Text>
                        </Text>
                    </>
                
            }
    </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    subHeading: {
        color: '#555',
        fontSize: 20,
        marginTop:10,
        marginBottom: 70,
        // lineHeight: 50,
        fontFamily: 'Roboto'

    },
    heading: {
        color: '#000',
        fontSize: 40,
        // margin:30,
        // lineHeight: 50,
        fontFamily: 'Roboto',
        fontWeight:'bold'

    },
    // formContainer: {
    //     width: '100%',
    //     backgroundColor: '#eee',
    //     padding: 20,
    //     justifyContent: 'center',
    //     borderRadius: 20,
    //     paddingVertical: 40
    // },
    inputLabel:{
        paddingVertical:8,
        color:'#555'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        padding: 10,
        // margin: 20,
        marginBottom: 30,
        backgroundColor: '#fff',
    },
    errorTxt:{
        color:'red',
        paddingVertical:10
    },
    continueBtn:{
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        padding:10,
        // borderRadius:'10'
    },
    contBtnText:{
        color:'#fff',
        fontWeight:'bold'
    },
    or:{
        color:'#aaa',
        textAlign:'center',
        margin:30
    },
    signUpText: {
        color: '#999',
        fontSize: 15,
        textAlign:'center'
        // margin: 20
    },
    signup:{
        color:'#0336FF',
        fontWeight:'bold'
    }
})