import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import openingPage from './screens/opening_page';
import launchPage from './screens/launch_page';
import introPage from './screens/intro_page';

//userAuth
import LoginSignUpPage   from './screens/userAuth/LoginSignup';
import verificationPage from './screens/userAuth/verification';
import userRegistration from './screens/userAuth/userRegistration';
//User Style and  Face Scan 
// import styleTestPage from './screens/userStyles/style_test';
import faceScanPage from './screens/userStyles/faceScan';

import clickPhotoPage from './screens/demo_screens/click_photo';

//dressMeHomePage
import dressMeHome from './screens/dressMe/dressme_page';


//bottom nav bar
import Bottomnav from './screens/components/bottom_navbar';
import TopNavigationBarPrimary from './screens/components/topNavigationP';




//imporint camera component
import Cameracmp from './screens/components/camera';
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
 
import ourImagesPage from './screens/addSection/ourImages';
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

const RootStack = createStackNavigator ({
    DefaultScreen: {
        screen: DefaultTestingPage, 
        navigationOptions: {
            header: null,
        },
    },
    IntroductoryPageZero: {
        screen: IntroductoryPageZero, 
        navigationOptions: {
            header: null,
        },
    },
    IntroductoryPageOne: {
        screen: IntroductoryPageOne, 
        navigationOptions: {
            header: null,
        },
    },
    IntroductoryPageTwo: {
        screen: IntroductoryPageTwo, 
        navigationOptions: {
            header: null,
        },
    },
    IntroductoryThree: {
        screen: IntroductoryThree, 
        navigationOptions: {
            header: null,
        },
    },
    PhoneNumberPage: {
        screen: PhoneNumberPage, 
        navigationOptions: {
            header: null,
        },
    },
    OtpVerification: {
        screen: OtpVerification, 
        navigationOptions: {
            header: null,
        },
    },
    UserRegisterPage: {
        screen: UserRegisterPage, 
        navigationOptions: {
            header: null,
        },
    },
    // Style Test
    StyleTestOne: {
        screen: StyleTestOne, 
        navigationOptions: {
            header: null,
        },
    },
    StyleTestTwo: {
        screen: StyleTestTwo, 
        navigationOptions: {
            header: null,
        },
    },
    FaceScanPage: {
        screen: FaceScanPage, 
        navigationOptions: {
            header: null,
        },
    },
    // Add Section 
    AddPageTwo: {
        screen: AddPageTwo, 
        navigationOptions: {
            header: null,
        },
    },
    AddFromCameraPage: {
        screen: AddFromCameraPage, 
        navigationOptions: {
            header: null,
        },
    },
    AddHopnobPage: {
        screen: AddHopnobPage, 
        navigationOptions: {
            header: null,
        },
    },
    Gallerycmp: {
        screen: Gallerycmp, 
        navigationOptions: {
            header: null,
        },
    },
    //wardrobe screens
    WardrobePage: {
        screen: WardrobePage, 
        navigationOptions: {
            header: null,
        },
    },
    ProductHopnobPage: {
        screen: ProductHopnobPage, 
        navigationOptions: {
            header: null,
        },
    },
    ProductConsumerPage: {
        screen: ProductConsumerPage, 
        navigationOptions: {
            header: null,
        },
    },
    OutfitsPage: {
        screen: OutfitsPage, 
        navigationOptions: {
            header: null,
        },
    },
    // ME Section
    MePage: {
        screen: MePage, 
        navigationOptions: {
            header: null,
        },
    },
    MeSettingsPage: {
        screen: MeSettingsPage, 
        navigationOptions: {
            header: null,
        },
    },
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            header:null,
        }
    },
    MyStats:{
        screen:MyStats,
        navigationOptions:{
            header:null,
        }
    },
    Bottomnav: {
            screen: Bottomnav, 
            navigationOptions: {
                header: null,
            },
    },
    TopNavigationBarPrimary: {
        screen: TopNavigationBarPrimary, 
        navigationOptions: {
            header: null,
        },
    },
    DressMePage: {
        screen: DressMePage, 
        navigationOptions: {
            header: null,
        },
    },
   
    DressMePageOutfit: {
        screen: DressMePageOutfit, 
        navigationOptions: {
            header: null,
        },
    },
    clickandmatchPage:{
        screen:clickandmatchPage,
        navigationOptions:{
            header:null,
        }
    },
    clickandmatchRecommendedPage:{
        screen:clickandmatchRecommendedPage,
        navigationOptions:{
            header:null,
        }
    },
    

}, {
    // TopNavigationBarPrimary
    initialRouteName:'AddPageTwo',
}
)

// const RootStack  = createStackNavigator ( 
//     {
//         default:introPage,
//         launchPage: launchPage,
//         Opening: openingPage,//crash
//         clickPhotoPage: clickPhotoPage,//crash
//         LoginSignUP: LoginSignUpPage,//crash
//         Verification:verificationPage,//crash
//         UserRegister:userRegistration,//crash
       
        
//         bottomNavBar: Bottomnav,//crash
//         topNavBar:Topnavbar,//crash
//         dressMeHome:dressMeHome,//crash
//         ourImages:ourImagesPage, //CRASHED
//         Cameracomponent:Cameracmp,//crash

//         Gallery:Gallerycmp,

//         WardrobePage:WardrobePage,
//         ProductHopnobPage:ProductHopnobPage,
//         ProductConsumerPage:ProductConsumerPage,

//         OutfitsPage:OutfitsPage,

//         DefaultTestingPage:DefaultTestingPage, 
//         IntroductoryPageZero:IntroductoryPageZero,
//         IntroductoryPageOne:IntroductoryPageOne,
//         IntroductoryPageTwo:IntroductoryPageTwo,
//         IntroductoryThree:IntroductoryThree,
//         PhoneNumberPage:PhoneNumberPage,
//         OtpVerification:OtpVerification,
//         UserRegisterPage:UserRegisterPage,
//         StyleTestOne:StyleTestOne,
//         StyleTestTwo:StyleTestTwo,
//         FaceScan:faceScanPage,
//         AddFromCameraPage:AddFromCameraPage,

//         AddPageTwo:AddPageTwo,
//         AddHopnobPage:AddHopnobPage,

//         DressMePage:DressMePage,
//         DressMePageOutfit:DressMePageOutfit,
       

//         clickandmatchPage:clickandmatchPage,
//         clickandmatchRecommendedPage:clickandmatchRecommendedPage,
        
//         MePage:MePage,
//         MeSettingsPage:MeSettingsPage
//     },
    // {
    //     // change this for testing and changing screens
    //     // initialRouteName:'default',
    //     // initialRouteName:'DefaultTestingPage',
    //     initialRouteName:'bottomNavBar',

    // },
    

// );



const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer />
    }
} 
