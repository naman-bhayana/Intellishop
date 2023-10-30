import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput, View, Button, Text, TouchableWithoutFeedback,Keyboard } from 'react-native'
// import { signin, signup } from '../store/actions/userActions'
// import { ToastAndroid } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
export default function SignUp({navigation}) {
    const [fname, setFname] = useState('')
    const [phone, setphone] = useState('')
    const [validateError, setValidateError] = useState()

    const [isChecked, setChecked] = useState(false);

    const signUp = () => {
        if (fname.length <1 ) {
            setValidateError("* Name cannot be empty!")
        } else if (phone.length !== 10) {
            setValidateError("* Enter valid Phone number!")
        } else {
            setValidateError()
        }
        if (validateError) {
            return
        } else {
            // fname, phone, password, cpassword ? dispatch(signup(fname, phone, password)) : alert('Enter all required fields.')
            
            fname, phone && navigation.navigate('Verify', {
                ph_no:phone
            })
            // var { userInfo, loading, error } = userSignup
            // if (error) {
            //     alert(error)
            // }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
        accessible={false} >
        <View style={styles.container}>
            <Text style={styles.heading}>
            Welcome User
            </Text>
            <Text style={styles.subHeading}>
            Seems you are new here, Let's set up your profile.
            </Text>
            {
                <>  
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput style={styles.textInput} placeholder="John Doe" onChangeText={setFname} value={fname} />
                <Text style={styles.inputLabel}>Enter your Phone Number</Text>
                <TextInput style={styles.textInput} placeholder="(+91)" keyboardType="numeric" onChangeText={setphone} value={phone} />
                <Text style={styles.errorTxt}>{validateError}</Text>
                <View style={styles.checkView}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                <Text style={styles.checkTxt}>I agree to the <Text style={styles.tns}>Terms of Services</Text> </Text>
                </View>
                <TouchableOpacity  onPress={() => signUp()}>
                <LinearGradient colors={['#0336FF','#E384FF']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.continueBtn}>
                    <Text style={styles.contBtnText}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.or}>Or</Text>
                <Text style={styles.signUpText} >
                Already have an account?<Text onPress={() => navigation.replace("Login")} style={styles.signup}> Sign In</Text>
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
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    checkView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:16
    },
    checkTxt:{
        padding:5
    },
    tns:{
        fontWeight:'bold'
    },
    errorTxt:{
        color:'red',
        paddingVertical:10
    },
    checkbox:{
        borderRadius:20,
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