import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { specialData, menuData } from '../../global/Data'
import { Icon } from 'react-native-elements'

const MenuTabScreen = ({ navigation, restaurant, onPress }) => {
    const handlePress = () => {
        //navigation.navigate('ProdcutSection')
    }
    return (
        <View style={styles.container}>

            <View>
                {
                    specialData.map((items) =>
                        <View key={items.key} style={styles.view1}>
                            <TouchableOpacity
                                onPress={onPress}
                            >
                                <View style={styles.view2}>
                                    <Icon
                                        name='star'
                                        type='material-community'
                                        color='gold'
                                    />
                                    <Text style={styles.text1}>{items.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
            <View>
                {
                    menuData.map((items) =>
                        <View key={items.key} style={styles.view1}>
                            <TouchableOpacity
                                onPress={handlePress}
                            >
                                <View style={styles.view2}>
                                    <Text style={styles.text1}>{items.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default MenuTabScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    view1: { paddingHorizontal: 10, },

    view2: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5
    },

    text1: {
        color: colors.grey3,
        fontSize: 18,
        fontWeight: "bold"
    }

})