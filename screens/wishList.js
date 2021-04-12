import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const WishList = () => {
    return (
        <View style={styles.wishListContainer}>
            <Text>WishList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wishListContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default WishList;