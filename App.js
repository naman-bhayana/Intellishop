import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Auth/login';
import HomeScreen from './screens/Home/home';
// import Onboarding from './screens/OnBoarding';
import OnboardingScreen from './screens/OnBoarding/index';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SignUpScreen from './screens/Auth/signUp';
import OtpVerifyScreen from './screens/Auth/verify';
import MainStack from './mainStack';
const Stack = createNativeStackNavigator();


export default function App() {
  const [firstLaunch, setFirstLaunch] = React.useState(false);
  React.useEffect(()=>{
    AsyncStorage.getItem('AlreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('AlreadyLaunched','true');
        setFirstLaunch(true)
      }else{
        setFirstLaunch(false);
      }
    })
  },[])
  
  if(firstLaunch === null){
    return null;
  }else if(firstLaunch === true){
    return(
      <>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="onBoarding"component={OnboardingScreen} options={{headerShown: false}} />

        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      </>
    )
  }else{

    return (
      <>
      <StatusBar hidden={true}/>
      <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="onBoarding"component={OnboardingScreen} options={{headerShown: false}} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="Verify" component={OtpVerifyScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={MainStack} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      </>
  );
  }
}
