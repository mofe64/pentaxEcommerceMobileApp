import React from 'react';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ProductScreen from '../screens/productScreen';
import ProductDetailScreen from '../screens/productDetailScreen';
import CartScreen from '../screens/cartScreen';
import Profile from '../screens/profileScreen';
import WishList from '../screens/wishList';
import OrderScreen from '../screens/orderScreen';
import { createAppContainer } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
const defaultNavOptions = {
   headerStyle: {
        height: 110,
        shadowColor: 'transparent',
        backgroundColor: '#f9f9f9'
    }
}

const ProductsNavigator = createStackNavigator({
    Products: ProductScreen,
    productDetails:  ProductDetailScreen
}, {
    defaultNavigationOptions: defaultNavOptions
})


const CartNavigator = createStackNavigator({
    cart:  CartScreen
},{
    defaultNavigationOptions: defaultNavOptions
})

const ProfileNavigator = createStackNavigator({
    profile: Profile
},{
    defaultNavigationOptions: defaultNavOptions 
})

const WishListNavigator = createStackNavigator({
    wishList: WishList
}, {
    defaultNavigationOptions: defaultNavOptions
})

const OrderNavigator = createStackNavigator({
    order: OrderScreen
}, {
    defaultNavigationOptions: defaultNavOptions
})

const AppTabNavigator = createBottomTabNavigator({
    products: {
        screen: ProductsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='pricetags' size={25} color={ tabInfo.tintColor}/>
            }
        }
    },
    wishList: {
        screen: WishListNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='heart' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    cart: {
        screen: CartNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='cart' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    order: {
        screen: OrderNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='clipboard' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='person' size={25} color={tabInfo.tintColor} />
            }
        }
    }

},
{
    tabBarOptions: {
        activeTintColor: '#626abb',
        showLabel: false,
        style: {
            borderTopColor: 'white',
        }
    },
})

export default createAppContainer(AppTabNavigator);