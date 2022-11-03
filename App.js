import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



//bottom nav bar
import Bottomnav from './screens/components/bottom_navbar';
import TopNavigationBarPrimary from './screens/components/topNavigationP';




//imporint camera component
import Gallerycmp from './screens/components/gallery';


//import wardrobe 
import WardrobePage  from './screens/wardrobe/wardrobe_page';
import ProductHopnobPage from './screens/wardrobe/wardrobe_hopnob';
import ProductConsumerPage from './screens/wardrobe/wardrobe_consumer';



//improting outfits
import OutfitsPage from './screens/outfits/outfitsPage';


import DefaultTestingPage from './screens/testingDefault';


//importing Introductory pages
import IntroductoryPageZero from './screens/Introductory/introPage0';
import IntroductoryPageOne from './screens/Introductory/introPage1';
import IntroductoryPageTwo from './screens/Introductory/IntroPage2';
import IntroductoryThree from './screens/Introductory/introPage3';

//importin UserAuth Screens
import PhoneNumberPage from './screens/userAuth/phoneNumberPage';
import OtpVerification from './screens/userAuth/otpVerification';
import UserRegisterPage from './screens/userAuth/userRegistrationPage';
//importing user Styles
import  StyleTestOne from './screens/userStyles/style_test';
import  StyleTestTwo from './screens/userStyles/styleTest2';
import FaceScanPage from './screens/userStyles/faceScan';


//importing add pages
import AddPageTwo from './screens/addSection/addPageTwo';
import AddFromCameraPage from './screens/addSection/camers';
 
import AddHopnobPage from './screens/addSection/hopnobPage';

//importing from drees me
import DressMePage from './screens/dressMe/dressme_page';
import DressMePageOutfit from './screens/dressMe/dressme_outfit';

// imprting from 
// import TestingPage from './screens/testing/testing';
// importing click and match
import clickandmatchPage from './screens/clickNmatch/clickandmatchPage';
import clickandmatchRecommendedPage from './screens/clickNmatch/clickandmatchRecommend';
//my Profile
import MePage from './screens/meSection/mePage';
import MeSettingsPage from './screens/meSection/meSettingsPage';
import EditProfile from './screens/meSection/editProfile';
import MyStats from './screens/meSection/myStats';
import MeStyleTestOne from './screens/meSection/styleTests/meStyleTestOne';




import TestingPageOtp from './screens/testing/testing';
const RootStack = createStackNavigator ({
    DefaultScreen: {
        screen: DefaultTestingPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    IntroductoryPageZero: {
        screen: IntroductoryPageZero, 
        navigationOptions: {
            header:()=> false,
        },
    },
    IntroductoryPageOne: {
        screen: IntroductoryPageOne, 
        navigationOptions: {
            header:()=> false,
            // title:false,
            // headerBackButtonMenuEnabled:true,
        },
    },
    IntroductoryPageTwo: {
        screen: IntroductoryPageTwo, 
        navigationOptions: {
            header:()=> false,
        },
    },
    IntroductoryThree: {
        screen: IntroductoryThree, 
        navigationOptions: {
            header:()=> false,
        },
    },
    PhoneNumberPage: {
        screen: PhoneNumberPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    OtpVerification: {
        screen: OtpVerification, 
        navigationOptions: {
            header:()=> false,
        },
    },
    UserRegisterPage: {
        screen: UserRegisterPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    // // Style Test
    // StyleTestOne: {
    //     screen: StyleTestOne, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // StyleTestTwo: {
    //     screen: StyleTestTwo, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // FaceScanPage: {
    //     screen: FaceScanPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // // Add Section 
    // AddPageTwo: {
    //     screen: AddPageTwo, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // AddFromCameraPage: {
    //     screen: AddFromCameraPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // AddHopnobPage: {
    //     screen: AddHopnobPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // Gallerycmp: {
    //     screen: Gallerycmp, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // //wardrobe screens
    // WardrobePage: {
    //     screen: WardrobePage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // ProductHopnobPage: {
    //     screen: ProductHopnobPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // ProductConsumerPage: {
    //     screen: ProductConsumerPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // OutfitsPage: {
    //     screen: OutfitsPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // // ME Section
    // MePage: {
    //     screen: MePage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // MeSettingsPage: {
    //     screen: MeSettingsPage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // EditProfile:{
    //     screen:EditProfile,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // },
    // MyStats:{
    //     screen:MyStats,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // },
    // MeStyleTestOne:{
    //     screen:MeStyleTestOne,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // },

    // Bottomnav: {
    //         screen: Bottomnav, 
    //         navigationOptions: {
    //             header:()=> false,
    //         },
    // },
    // TopNavigationBarPrimary: {
    //     screen: TopNavigationBarPrimary, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // DressMePage: {
    //     screen: DressMePage, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
   
    // DressMePageOutfit: {
    //     screen: DressMePageOutfit, 
    //     navigationOptions: {
    //         header:()=> false,
    //     },
    // },
    // clickandmatchPage:{
    //     screen:clickandmatchPage,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // },
    // clickandmatchRecommendedPage:{
    //     screen:clickandmatchRecommendedPage,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // },
    // TestingPageOtp:{
    //     screen:TestingPageOtp,
    //     navigationOptions:{
    //         header:()=>false,
    //     }
    // }

}, {
    // TopNavigationBarPrimary

    // initialRouteName:'TestingPageOtp',
    // initialRouteName:'PhoneNumberPage',
    initialRouteName:'DefaultScreen',
    
    // initialRouteName:'IntroductoryPageOne',


}
)


const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer />
    }
} 
