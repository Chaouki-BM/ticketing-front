import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Button } from '@ui-kitten/components'
const UserItem = ({ iconName, handleEdit, handleDelete, name, role }) => {
    const EditIcon = (props) => {
        return <Icon {...props} name={"trash-2-outline"} fill="#FFF" style={{ width: 20, height: 20 }} />
    }
    const DeleteIcon = (props) => {
        return <Icon {...props} name={"edit-2-outline"} fill="#FFF" style={{ width: 20, height: 20 }} />
    }
    return (
        <View style={styles.menuItem} >
            <View style={styles.iconContainer}>
                <Icon fill='#FFF'
                    name={iconName} style={{ width: 30, height: 30 }} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.btnText}>{name}</Text>
                <Text style={styles.btnSubText}>{role}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.button} status='danger' accessoryLeft={DeleteIcon} />
                <Button style={styles.button} status="success" accessoryLeft={EditIcon} />
            </View>

        </View>
    )
}

export default UserItem

const styles = StyleSheet.create({
    menuItem: {
        width: "100%",
        height: 80,
        borderRadius: 10,
        backgroundColor: "#D6E4FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginVertical: 10
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3366FF"
    },
    btnText: {
        fontSize: 20,
        fontWeight: "600"
    }, btnSubText: {
        fontSize: 18,
        fontWeight: "400"
    },
    nameContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    btnContainer: {
        flexDirection: "row",

    },
    button: {
        margin: 3
    }
})