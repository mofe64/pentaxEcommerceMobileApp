import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const CartScreen = () => {
    return (
        <View style={styles.cartContainer}>
            <Text>cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CartScreen;