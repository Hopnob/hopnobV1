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

//bottom nav bar
import Bottomnav from './screens/components/bottom_navbar';
//top nav bar
import Topnavbar from './screens/components/top_navbar';

//addSection
import addPage from './screens/addSection/addPage';

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
        bottomNavBar: Bottomnav,
        topNavBar:Topnavbar,
        addSection:addPage,
    },
    {
        // change this for testing and changing screens
        initialRouteName:'addSection',
        // initialRouteName:'default',

    }

);
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer/>
    }
} 
