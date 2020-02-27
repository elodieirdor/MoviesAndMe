import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStack = createStackNavigator()

function Navigation() {
    return (
        <NavigationContainer>
            <SearchStack.Navigator initialRouteName="Search">
                <SearchStack.Screen 
                    name='Search' 
                    component={Search}
                    options={{ title: 'Rechercher' }} 
                />
                <SearchStack.Screen
                    name='FilmDetail'
                    component={FilmDetail}                    
                />
            </SearchStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation