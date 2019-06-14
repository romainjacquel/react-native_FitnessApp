import React,{ Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Item, Label } from 'native-base';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { LoginUser } from '../../actions/index';
import * as Validation from '../../services/validations';

const FIELDS = {email : 'email', password : 'password'};

class Login extends Component {

    renderInput({ input, meta: { error }, ...inputProps }){

        // let hasError = false;

        // if(error !== undefined){
        //     hasError= true;
        // }

        return( 
            <Input {...inputProps}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocues={input.onFocus}
            value={input.value}
            errorMessage={error}
            />
        )
    }

    _handleSubmit = (values) => {
        this.props.LoginUser(values.email,values.password);
        if(this.props.auth === true){
            this.props.navigation.push('home');
            console.log("--> Change Pages")
        }
    }

    render(){

        const { handleSubmit} = this.props;

        return(
            <ScrollView
            contentContainerStyle={styles.Container}
            >
            <View>
                <Text style={styles.TextTitle}>Connexion</Text>
            </View>
            <View>
                <Field component={this.renderInput} type='text' label='Email' name={FIELDS.email} validate={Validation.email} />
                <Field component={this.renderInput} type='password' label='Mot de passe' name={FIELDS.password} validate={Validation.required} />
            </View>
            <View style={{flexDirection : 'row', justifyContent : 'center'}}>
            <Button rounded primary onPress={this.goToLoginView} onPress={handleSubmit(this._handleSubmit)}>
                <Text style={styles.TextButton}>Se connecter</Text>
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
    TextTitle : {
        fontSize : 30,
        textAlign : 'center',
        color : 'grey'
    },
    TextButton : {
        paddingTop : 10,
        paddingBottom : 10,
        paddingRight : 25,
        paddingLeft : 25,
        color : 'white'
    }
})

const mapStateToProps = state => ({
    auth : state.authentification.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({LoginUser},dispatch)
})

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default reduxForm({
    form: 'Login',
    fields : Object.keys(FIELDS)
})(Login)