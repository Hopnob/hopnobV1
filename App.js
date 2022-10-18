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
//top nav bar
import Topnavbar from './screens/components/top_navbar';

//addSection





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
//importing add pages
import addPage from './screens/addSection/addPage';
import AddFromCameraPage from './screens/addSection/camers';
import addWardrobePage from './screens/addSection/addPage2';
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
const RootStack  = createStackNavigator (
    {
        default:introPage,
        launchPage: launchPage,
        Opening: openingPage,//crash
        clickPhotoPage: clickPhotoPage,//crash
        LoginSignUP: LoginSignUpPage,//crash
        Verification:verificationPage,//crash
        UserRegister:userRegistration,//crash
       
        addWardrobeSection:addWardrobePage,//crash
        bottomNavBar: Bottomnav,//crash
        topNavBar:Topnavbar,//crash
        dressMeHome:dressMeHome,//crash
        ourImages:ourImagesPage, //CRASHED
        Cameracomponent:Cameracmp,//crash
        Gallery:Gallerycmp,
        WardrobePage:WardrobePage,
        ProductHopnobPage:ProductHopnobPage,
        ProductConsumerPage:ProductConsumerPage,
        OutfitsPage:OutfitsPage,

        DefaultTestingPage:DefaultTestingPage, 
        IntroductoryPageZero:IntroductoryPageZero,
        IntroductoryPageOne:IntroductoryPageOne,
        IntroductoryPageTwo:IntroductoryPageTwo,
        IntroductoryThree:IntroductoryThree,
        PhoneNumberPage:PhoneNumberPage,
        OtpVerification:OtpVerification,
        UserRegisterPage:UserRegisterPage,
        StyleTestOne:StyleTestOne,
        StyleTestTwo:StyleTestTwo,
        FaceScan:faceScanPage,//crash
        AddFromCameraPage:AddFromCameraPage,
        addSection:addPage,
        AddHopnobPage:AddHopnobPage,

        DressMePage:DressMePage,
        DressMePageOutfit:DressMePageOutfit,
        // TestingPage:TestingPage,

        clickandmatchPage:clickandmatchPage,
        clickandmatchRecommendedPage:clickandmatchRecommendedPage,

    },
    {
        // change this for testing and changing screens
        // initialRouteName:'default',
        initialRouteName:'clickandmatchRecommendedPage',

    }

);
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer/>
    }
} 
