import React, { useState, useEffect } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
// import { signin, signup } from '../store/actions/userActions'
// import { ToastAndroid } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function OtpVerify({route,navigation}) {
    const [otp, setOtp] = useState('')
    const [validateError, setValidateError] = useState()
    // const phone = route.params.ph_no
    // const dispatch = useDispatch()

    // const userSignin = useSelector((state) => state.userSignin)
    // const userSignup = useSelector((state) => state.userSignup)

    
    const verify = () => {
        // phone, password ? dispatch(signin(phone, password)) : alert('Enter all required fields.')
        // if (!otp) {
        //     setValidateError("* Enter OTP")
        // } else {
        //     setValidateError("")
        //     otp && navigation.replace('Home')
        // }
        navigation.replace('Main')
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
            Verifying your number
            </Text>
            <Text style={styles.subHeading}>
            {/* We've sent your verification code to +91 {phone} */}
            </Text>
            {<>
                        <Text style={styles.inputLabel}>Enter OTP</Text>
                        <TextInput style={styles.textInput} placeholder="(+91)" keyboardType="numeric" onChangeText={setOtp} value={otp} />
                        <Text style={styles.errorTxt}>{validateError}</Text>
                        <TouchableOpacity  onPress={() => verify()}>
                        <LinearGradient colors={['#0336FF','#E384FF']} start={{x:0,y:0}} end={{x:1,y:0}}style={styles.continueBtn}>
                            <Text style={styles.contBtnText}>Verify</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.otpResendView}>
                        <Text style={styles.resendTxt}> Resend OTP</Text>
                        <Text style={styles.timer} >02:00 min left</Text>
                        </View>
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
    otpResendView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:12
    },
    resendTxt:{
        color:'#000',
    },
    timer:{
        color:'#aaa'
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