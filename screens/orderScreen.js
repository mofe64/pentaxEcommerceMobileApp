import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const OrderScreen = () => {
    return (
        <View style={styles.orderContainer}>
            <Text>Order</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default OrderScreen;