import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../Components/Search'
import Favorites from '../Components/Favorites'
import FilmDetail from '../Components/FilmDetail'
import Test from '../Components/Test'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const SearchStack = createStackNavigator()

function SearchStackNavigator() {
    return (
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
    )
}

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: '#DDDDDD',
                    inactiveBackgroundColor: '#FFFFFF',
                    showLabel: false,
                    showIcon: true,
                }}
            >
                <Tab.Screen
                    name="Test"
                    component={Test} />
                <Tab.Screen
                    name="Search"
                    component={SearchStackNavigator}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require('../Images/ic_search.png')}
                                style={styles.icon} />
                        }
                    }} />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require('../Images/ic_favorite.png')}
                                style={styles.icon} />
                        }
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default Navigation