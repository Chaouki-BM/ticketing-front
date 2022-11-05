import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon } from '@ui-kitten/components'
import UserItem from '../components/UserItem'
import AddUserModal from '../components/AddUserModal'
import { useState } from 'react'

const UsersScreen = () => {
    const [isAddVisivible, setIsAddVisible] = useState(false);
    const handleAddUser = () => {
        setIsAddVisible(true)
    }
    const handleCloseAddUser = () => {
        setIsAddVisible(false)
    }
    return (
        <View style={styles.container}>
            <AddUserModal isVisible={isAddVisivible} handleClose={handleCloseAddUser} />
            <Button accessoryLeft={<Icon name="plus-square-outline" fill="#FFF" style={{ width: 30, height: 30 }} />} onPress={handleAddUser}>Nouveau Utilisateur </Button>
            <UserItem name={"Chaouki Ben Miled"} role="ADMIN" iconName={"people-outline"} handleDelete={() => { }} handleEdit={() => { }} />
            <UserItem name={"Chaouki Ben Miled"} role="ADMIN" iconName={"people-outline"} handleDelete={() => { }} handleEdit={() => { }} />
            <UserItem name={"Chaouki Ben Miled"} role="ADMIN" iconName={"people-outline"} handleDelete={() => { }} handleEdit={() => { }} />
            <UserItem name={"Chaouki Ben Miled"} role="ADMIN" iconName={"people-outline"} handleDelete={() => { }} handleEdit={() => { }} />
        </View>
    )
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#FFF",
        padding: 10

    },
})