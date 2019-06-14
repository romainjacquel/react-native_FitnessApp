import React,{ Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'native-base';
import HeaderComponent from '../../components/header';

class ChoiceGender extends Component {
    render(){
        return(
            <ScrollView
            contentContainerStyle={styles.Container}
            >
            <HeaderComponent />    
                <Text style={styles.TextTitle}>Je suis :</Text>
            <View style={styles.ViewButton}>
                <Button rounded block info>
                    <Text style={styles.TextButton}>Un homme</Text>
                </Button>
                <Button rounded block primary style={{marginTop : 10}}>
                    <Text style={styles.TextButton}>Une femme</Text>
                </Button>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Container : {
        height : "100%"
    },
    TextTitle : {
        color : 'grey',
        textAlign : 'center',
        fontSize : 30,
        marginTop : '10%'
    },
    TextButton : {
        color : 'white',
        paddingTop : 5,
        paddingBottom : 5,
        paddingRight : 15,
        paddingLeft : 15
    },
    ViewButton : {
        marginTop : '30%'
    }
})

export default ChoiceGender;