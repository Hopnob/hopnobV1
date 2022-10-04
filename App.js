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
import styleTestPage from './screens/userStyles/style_test';
import faceScanPage from './screens/userStyles/faceScan';

import clickPhotoPage from './screens/demo_screens/click_photo';

//dressMeHomePage
import dressMeHome from './screens/dressMe/dressme_page';


//bottom nav bar
import Bottomnav from './screens/components/bottom_navbar';
//top nav bar
import Topnavbar from './screens/components/top_navbar';

//addSection


import addPage from './screens/addSection/addPage';
import addWardrobePage from './screens/addSection/addPage2';
import ourImagesPage from './screens/addSection/ourImages';


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

const RootStack  = createStackNavigator (
    {
        default:introPage,
        launchPage: launchPage,
        Opening: openingPage,//crash
        clickPhotoPage: clickPhotoPage,//crash
        LoginSignUP: LoginSignUpPage,//crash
        Verification:verificationPage,//crash
        UserRegister:userRegistration,//crash
        StyleTest:styleTestPage,//crash
        faceScan:faceScanPage,//crash
        addWardrobeSection:addWardrobePage,//crash
        bottomNavBar: Bottomnav,//crash
        topNavBar:Topnavbar,//crash
        addSection:addPage,//crash
        dressMeHome:dressMeHome,//crash
        ourImages:ourImagesPage, //CRASHED
        Cameracomponent:Cameracmp,//crash
        Gallery:Gallerycmp,
        WardrobePage:WardrobePage,
        ProductHopnobPage:ProductHopnobPage,
        ProductConsumerPage:ProductConsumerPage,
        OutfitsPage:OutfitsPage,
        DefaultTestingPage:DefaultTestingPage, 
    },
    {
        // change this for testing and changing screens
        // initialRouteName:'default',
        initialRouteName:'DefaultTestingPage',
        

    }

);
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer/>
    }
} 
