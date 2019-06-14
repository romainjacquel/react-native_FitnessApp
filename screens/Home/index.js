import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class Home extends Component {

    goToLoginView=()=>{
        console.log('goToLoginView')
        this.props.navigation.push('Login');
    }

    render(){
        return(
            <ScrollView
            contentContainerStyle={styles.Container}
            >   
            <View>
                <Text style={styles.Text}>Bienvenue sur Fitness App</Text>
            </View>
            <View style={styles.IntroView}>
                <Text style={styles.IntroText}>Cette application a pour but de guider l'utilisateur dans le déroulement de sa scéance, qu'elle soit en salle ou bien chez soit.</Text>
            </View>
               <View style={styles.ViewButton}>
                   <Button rounded info style={styles.Button}>
                       <Text style={styles.TextButton}>Inscription</Text>
                   </Button>
                   <Button rounded primary style={styles.Button} onPress={this.goToLoginView}>
                       <Text style={styles.TextButton}>Connexion</Text>
                   </Button>
               </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Container : {
        height : '100%',
        justifyContent : 'space-evenly'
    },
    Text : {
        color : 'grey',
        fontSize : 30,
        textAlign : 'center',
        marginTop : '15%' 
    },
    IntroView : {
        marginLeft : "5%",
        marginRight : "5%"
    },
    IntroText : {
        color : 'grey',
        textAlign : 'justify'
    },
    ViewButton : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    Button : {

    },
    TextButton : {
        paddingTop : 10,
        paddingBottom : 10,
        paddingRight : 25,
        paddingLeft : 25,
        color : 'white'
    }
})

export default withNavigation(Home);
