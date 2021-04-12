import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const Profile = () => {
    return (
        <View style={styles.profileContainer}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Profile;