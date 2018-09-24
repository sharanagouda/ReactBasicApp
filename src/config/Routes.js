import React,{Component} from 'react';
import {Router, Scene} from "react-native-router-flux";

import Home from './../screens/Home';
import BasicComponents from '../screens/BasicComponents'
import FlexComponent from '../screens/FlexComponent';
import SectionListComponent from './../screens/SectionListComponent';
import FlatlistComponent from './../screens/FlatlistComponent'
import FetchAPI from '../screens/FetchAPIComponent';
import ListComponent from '../screens/ListComponent';
import LoginComponent from '../screens/LoginComponent';
import ScrollViewCmponent from '../screens/ScrollViewComponent';
import SwiperComponent from '../screens/SwiperComponent';
import SocialLoginComponent from '../screens/SocialLoginComponent';
import NewsComponent from '../screens/News';
import NewsDetailComponent from '../screens/NewsDetails';
import NewsHomeComponent from '../screens/NewsComponent';
import ButtonComponent from '../screens/ButtonComponents';
import ToggleComponent from '../screens/ToggleComponent';
import CameraComponents from '../screens/cameraComponent';

export default class Routes extends Component {
  render() {
    return (
        <Router>
                    <Scene key="user" hideNavBar={true} initial={this.props.loggedIn}>
                        {/* <Scene key="swiperComponent" component={SwiperComponent} title="Swiper"/> */}
                        <Scene key="home" component={Home} title="Home"/>
                        <Scene key="basiccomponents" component={BasicComponents} title="BasicComponent"/>
                        <Scene key="flexComponent" component={FlexComponent} title="FlexComponent"/>
                        <Scene key="flatlistcomponent" component={FlatlistComponent} title="FlatlistComponent"/>
                        <Scene key="sectionlistcomponent" component={SectionListComponent} title="SectionListComponent"/>
                        <Scene key="fetchApiComonent" component={FetchAPI} title="FetchAPI"/>
                        <Scene key="listComponent" component={ListComponent} title="ListComponent"/>
                        <Scene key="loginComponent" component={LoginComponent} title="Login"/>
                        <Scene key="scrollviewComponent" component={ScrollViewCmponent} title="Scrollview"/>
                        <Scene key="socialLogincomponent" component={SocialLoginComponent} title="SocialLogin"/>
                        <Scene key="newsComponent" component={NewsComponent} title="news"/>
                        <Scene key="newsDetaisScreen" component={NewsDetailComponent} title="newsDetail"/>
                        <Scene key="news" component={NewsHomeComponent} title="newsHome"/>
                        <Scene key="buttonComponent" component={ButtonComponent} title="buttons"/>
                        <Scene key="toggleSceen" component={ToggleComponent} title="toggleComponent"/>
                        <Scene key="cameraComponent" component={CameraComponents} title="camera"/>
                    </Scene>
        </Router>
    );
  }
}

{/* <Scene key="user" hideNavBar={true} initial={loggedIn}>
                        <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
                        <Scene tabs key="createEvent" hideNavBar={true} hideTabBar={true} swipeEnabled={false} tabBarPosition="bottom">
                        <Scene key="firstScreen" hideNavBar={true} component={EventFirstScreen} />
                        <Scene key="secondScreen" hideNavBar={true} component={EventSecondScreen} />
                    </Scene> */}


