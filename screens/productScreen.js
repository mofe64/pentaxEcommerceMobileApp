import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {Ionicons} from '@expo/vector-icons';

const ProductScreen = () => {
    return (
        <View style={styles.productsContainer}>
            <View style={styles.productsHeader}>
                <Text style={styles.headerText}>Our Products</Text>
                <ModalDropdown
                    dropdownStyle={styles.dropdown}
                    dropdownTextStyle={styles.dropdownText}
                    onSelect={console.log}
                    options={['option 1', 'option 2']}>
                    <View style={styles.sort}>
                        <Text>sort by</Text>
                        <Ionicons name='chevron-down' size={25} />
                    </View>
                </ModalDropdown>
            </View>
            <View style={styles.categories}>
                <TouchableOpacity style={styles.category}>
                    <Image source={require('../assets/shoe.webp')}
                        style={styles.categoryImage}
                        resizeMode='contain'
                    />
                    <Text>Sneakers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Image source={require('../assets/watch.png')}
                        style={styles.categoryImage}
                        resizeMode='contain'
                    />
                    <Text>Watches</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                     <Image source={require('../assets/bag.png')}
                        style={styles.categoryImage}
                        resizeMode='contain'
                    />
                    <Text>Bags</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
ProductScreen.navigationOptions = navigationData => {}

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    productsHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20

    },
    headerText: {
        fontSize: 30,
        fontWeight: '500'
    },
    sort:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        width: 100
    },
    dropdownText: {
        fontSize: 20
    },
    categories: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    category: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: '30%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        shadowColor: "#000",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    categoryImage: {
        width: 30,
        height: 30,
        marginRight: 10
    }
    

})

export default ProductScreen;