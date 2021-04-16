import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const ProductCard = () => {
    return (
        <View style={styles.productCard}>
            <Text>Products</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    productCard: {
        width: '45%',
        height: 250,
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})

export default ProductCard;