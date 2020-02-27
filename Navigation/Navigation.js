import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';

const SearchStack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <SearchStack.Navigator initialRouteName="Recherche">
                <SearchStack.Screen 
                    name='Recherche' 
                    component={Search}
                    options={{ title: 'Rechercher' }} 
                />
            </SearchStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation