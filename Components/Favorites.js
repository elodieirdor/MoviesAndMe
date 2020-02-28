import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import FilmList from './FilmList'

class Favorites extends React.Component {
    render() {
        return (
            <FilmList
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
            />
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)
