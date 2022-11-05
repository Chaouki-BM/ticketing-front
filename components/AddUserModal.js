import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { Button, Card, Input, Modal, Toggle, Text } from '@ui-kitten/components';
const AddUserModal = ({ isVisible, handleClose }) => {
    return (
        <Modal
            visible={isVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={handleClose}>
            <Card disabled={true}>
                <Input placeholder='Name' size='large' style={styles.inputStyle} />
                <Input placeholder='FirstName' size='large' style={styles.inputStyle} />
                <Input placeholder='Email' size='large' style={styles.inputStyle} />
                <Input placeholder='Password' secureTextEntry={true} size='large' style={styles.inputStyle} />
                <View style={styles.toggleView}>
                    <Text style={styles.toggleText}>IS ADMIN:</Text>
                    <Toggle />
                </View>

                <View style={styles.btnRow}>
                    <Button onPress={handleClose}>
                        Confirm
                    </Button>
                    <Button status='danger' onPress={handleClose}>
                        Cancel
                    </Button>
                </View>
            </Card>
        </Modal>
    )
}

export default AddUserModal


const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    inputStyle: {
        minWidth: 250,
        marginVertical: 10
    },
    toggleView: {
        flexDirection: "row", justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5
    },
    toggleText: {
        fontSize: 20,
        fontWeight: "400"
    },
    btnRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }
});