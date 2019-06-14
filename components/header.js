import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Header} from 'react-native-elements';

class HeaderApp extends Component {
    render(){
        return(
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Fitness App', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}

export default HeaderApp;