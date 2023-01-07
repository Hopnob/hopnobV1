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
// importing user Styles
import  StyleTestOne from './screens/userStyles/style_test';
import  StyleTestTwo from './screens/userStyles/styleTest2';
import FaceScanPage from './screens/userStyles/faceScan';

import DressMeZero from './screens/dressMe/dressMeZero';

//importing add pages
import AddPageTwo from './screens/addSection/addPageTwo';
import AddFromCameraPage from './screens/addSection/camers';
 
import AddHopnobPage from './screens/addSection/hopnobPage';

//importing from drees me
import DressMePage from './screens/dressMe/dressme_page';
import DressMePageOutfit from './screens/dressMe/dressme_outfit';

// importing outfit play
import OutfitPlayPage from './screens/outfitPlay/outfitPlay';
 
// importing click and match
import clickandmatchPage from './screens/clickNmatch/clickandmatchPage';
import clickandmatchRecommendedPage from './screens/clickNmatch/clickandmatchRecommend';
//my Profile
import MePage from './screens/meSection/mePage';
import MeSettingsPage from './screens/meSection/meSettingsPage';
import EditProfile from './screens/meSection/editProfile';
import MyStats from './screens/meSection/myStats';

import BrandsPage from './screens/meSection/styleTests/brandsPage';
import StyleTestOnePage from './screens/meSection/styleTests/StyleTestOnePage';
import StyleTestTwoPage from './screens/meSection/styleTests/meStyleTestTwo';
import LikesPage from './screens/meSection/styleTests/likesPage';
import DislikesOnePage from './screens/meSection/styleTests/DislikesOnePage';
import DislikesTwoPage from './screens/meSection/styleTests/DislikesTwoPage';
import DislikesThreePage from './screens/meSection/styleTests/DislikesThreePage';
import endStyleTestPage from './screens/meSection/styleTests/endStyleTestPage';
import TestingPageOtp from './screens/testing/testing';

// faqs
import faqsPage from './screens/meSection/faqs/faqsPage';
// body Specs
import htandwtPage from './screens/meSection/bodySpecs/htandwtPage';
import typePage from './screens/meSection/bodySpecs/typePage';
import sizePage from './screens/meSection/bodySpecs/sizePage';
// Calander
import calanderPage from './screens/calander/calander';
import badgesPage from './screens/badges/badgesPages';
const RootStack = createStackNavigator ({
    DefaultTestingPage: {
        screen: DefaultTestingPage, 
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
    // Style Test
    StyleTestOne: {
        screen: StyleTestOne, 
        navigationOptions: {
            header:()=> false,
        },
    },
    StyleTestTwo: {
        screen: StyleTestTwo, 
        navigationOptions: {
            header:()=> false,
        },
    },
    FaceScanPage: {
        screen: FaceScanPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    DressMeZero:{
        screen:DressMeZero,
        navigationOptions:{
            header:()=>false,
        }
    },
    // Add Section 
    AddPageTwo: {
        screen: AddPageTwo, 
        navigationOptions: {
            header:()=> false,
        },
    },
    AddFromCameraPage: {
        screen: AddFromCameraPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    AddHopnobPage: {
        screen: AddHopnobPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    Gallerycmp: {
        screen: Gallerycmp, 
        navigationOptions: {
            header:()=> false,
        },
    },
    //wardrobe screens
    WardrobePage: {
        screen: WardrobePage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    ProductHopnobPage: {
        screen: ProductHopnobPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    ProductConsumerPage: {
        screen: ProductConsumerPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    OutfitsPage: {
        screen: OutfitsPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    // ME Section
    MePage: {
        screen: MePage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    MeSettingsPage: {
        screen: MeSettingsPage, 
        navigationOptions: {
            header:()=> false,
        },
    },
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            header:()=>false,
        }
    },
    MyStats:{
        screen:MyStats,
        navigationOptions:{
            header:()=>false,
        }
    },
    BrandsPage:{
        screen:BrandsPage,
        navigationOptions:{
            header:()=>false,
        }
    },
    StyleTestOnePage:{
        screen:StyleTestOnePage,
        navigationOptions:{
            header:()=>false,
        }
    },
    StyleTestTwoPage:{
        screen:StyleTestTwoPage,
        navigationOptions:{
            header:()=>false,
        }
    },
    LikesPage:{
        screen:LikesPage,
        navigationOptions:{
            header:()=>false,
        }
    },DislikesOnePage:{
        screen:DislikesOnePage,
        navigationOptions:{
            header:()=> false,
        }
    },DislikesTwoPage:{
        screen:DislikesTwoPage,
        navigationOptions:{
            header:()=>false,
        }
    },DislikesThreePage:{
        screen:DislikesThreePage,
        navigationOptions:{
            header:()=>false,
        }
    },
    endStyleTestPage:{
        screen:endStyleTestPage,
        navigationOptions:{
            header:()=>false
        }
    }
    ,
    faqsPage:{
        screen:faqsPage,
        navigationOptions:{
            header:()=>false
        }
    },
    htandwtPage:{
        screen:htandwtPage,
        navigationOptions:{
            header:()=>false,
        }
    },typePage:{
        screen:typePage,
        navigationOptions:{
            header:()=>false,
        }
    },sizePage:{
        screen:sizePage,
        navigationOptions:{
            header:()=>false,
        }
    },
    calanderPage:{
        screen:calanderPage,
        navigationOptions:{
            header:()=>false,
        }
    },
    badgesPage:{
        screen:badgesPage,
        navigationOptions:{
            header:()=>false
        }
    },
    Bottomnav: {
            screen: Bottomnav, 
            navigationOptions: {
                header:()=> false,
            },
    },
    TopNavigationBarPrimary: {
        screen: TopNavigationBarPrimary, 
        navigationOptions: {
            header:()=> false,
        },
    },
    DressMePage: {
        screen: DressMePage, 
        navigationOptions: {
            header:()=> false,
        },
    },
   
    DressMePageOutfit: {
        screen: DressMePageOutfit, 
        navigationOptions: {
            header:()=> false,
        },
    },
    clickandmatchPage:{
        screen:clickandmatchPage,
        navigationOptions:{
            header:()=>false,
        }
    },
    clickandmatchRecommendedPage:{
        screen:clickandmatchRecommendedPage,
        navigationOptions:{
            header:()=>false,
        }
    },
    OutfitPlayPage:{
        screen:OutfitPlayPage,
        navigationOptions:{
            header:()=>false
        }
    },
    TestingPageOtp:{
        screen:TestingPageOtp,
        navigationOptions:{
            header:()=>false,
        }
    }

}, 
{
    initialRouteName:'badgesPage',
}
)


const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer />
    }
} 
