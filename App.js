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
const RootStack  = createStackNavigator (
    {
        default:introPage,
        launchPage: launchPage,
        Opening: openingPage,
        clickPhotoPage: clickPhotoPage,
        LoginSignUP: LoginSignUpPage,
        Verification:verificationPage,
        UserRegister:userRegistration,
        StyleTest:styleTestPage,
        faceScan:faceScanPage,
        addWardrobeSection:addWardrobePage,
        bottomNavBar: Bottomnav,
        topNavBar:Topnavbar,
        addSection:addPage,
        dressMeHome:dressMeHome,
        ourImages:ourImagesPage,
    },
    {
        // change this for testing and changing screens
        // initialRouteName:'dressMeHome',
        initialRouteName:'ourImages',

    }

);
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer/>
    }
} 
