import Onboarding from 'react-native-onboarding-swiper';
import { Dimensions } from 'react-native';
import { View, Text, Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OnboardingScreen = ({ navigation }) => {
    return ( <Onboarding 
            onDone={()=> navigation.replace('Login')}
            onSkip={()=>navigation.replace('Login')}
            containerStyles={{
                // maxHeight:10
                
            }}
            imageContainerStyles={{flex:1}}
            pages = {
            [{
                    backgroundColor: '#fff',
                    image: < Image source = { require('../../assets/onboard/1.png') } style={{maxWidth:windowWidth}} />,
                    title: 'Discover',
                    subtitle: 'Find trusted security guard in your own neighborhood to protect whatever you want',
                    imageContainerStyles: 200
                },
                {
                    backgroundColor: '#fff',
                    image: < Image source = { require('../../assets/onboard/2.png') } style={{maxWidth:windowWidth}}/>,
                    title: 'Schedule',
                    subtitle: 'Determine the right time between you and the security guard with choice you cannot imagine before',
                },
                {
                    backgroundColor: '#fff',
                    image: < Image source = { require('../../assets/onboard/3.png') } style={{maxWidth:windowWidth}}/>,
                    title: 'Service',
                    subtitle: 'Enjoy the right security and trust to protect your family, businesses and valuable assets',
                }
            ]
        }
        />
    )
}

export default OnboardingScreen