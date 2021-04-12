import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const ProductDetailScreen = () => {
    return (
        <View style={styles.productDetailContainer}>
            <Text>ProductDetails</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productDetailContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ProductDetailScreen;