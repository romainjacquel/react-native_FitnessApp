import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Login from './screens/Login';
import ChoiceGender from './screens/Choice-gender';

export default function App() {
  return (
    <Provider store={store}>
          <Routes />
    </Provider>
  );
}

const StackNavigator = createStackNavigator({
  Home,
  Login,
  ChoiceGender
},{
  initialRouteName : 'ChoiceGender',
  headerMode : 'none'
  }
)

const Routes = createAppContainer(StackNavigator);
