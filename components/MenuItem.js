import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@ui-kitten/components'
const MenuItem = ({ iconName, handePress, title }) => {

    return (
        <TouchableOpacity style={styles.menuItem} onPress={handePress}>
            <View style={styles.iconContainer}>
                <Icon fill='#FFF'
                    name={iconName} style={{ width: 30, height: 30 }} />
            </View>
            <Text style={styles.btnText}>{title}</Text>
            <Icon fill='#8F9BB3'
                name='chevron-right-outline' style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
    )
}

export default MenuItem

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
    }
})