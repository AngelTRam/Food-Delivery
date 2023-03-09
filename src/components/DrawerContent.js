import React, { useState, useContext, useEffect } from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "react-native-elements";
import { colors } from "../global/styles";
//import { auth } from '../fb/fbauth';
import { SignInContext } from "../contexts/authContext";
import auth from 'firebase/auth';

export default function DrawerContent(props) {
    const avatarPic = 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/330330103_440748674908048_2406409396053282488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEOS-QeRSWYvnywhKIUXZljedr-3bu0wil52v7du7TCKeYG2Te2xMvcapygn2KqsZU8qNtdZe_T3UpEW3jJV-6e&_nc_ohc=Fp-68hUa1fMAX86Lp7m&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfAAVipMVv2IAon1lySqk55UvJw2hXzWyOCvG7r0VdrSvg&oe=640F031A'
    const { dispatchSignedIn } = useContext(SignInContext)

    async function signOutFunction() {

        try {
            auth()
                .signOut()
                .then(
                    () => {
                        console.log("USER SUCCESSFULLY SIGNED OUT")
                        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
                    })

        } catch (error) {
            console.log("USER SIGNED OUT")
        }
    }


    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ flexDirection: 'column', backgroundColor: colors.buttons }}>
                    <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                        <Avatar
                            rounded={true}
                            avatarStyle={styles.avatar}
                            size={65}
                            source={{ uri: avatarPic }}
                        />
                        <View style={{
                            marginLeft: 10
                        }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Angel T. Ramirez</Text>
                            <Text style={{ color: 'white', fontSize: 14 }}>angel.t.r42@gmail.com</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>1</Text>
                            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>My Favorites</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>0</Text>
                            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>My Cart</Text>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />
                <DrawerItem
                    label='Payment'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name='credit-card-outline'
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label='Promotions'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name='tag-heart'
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label='Settings'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name='cog-outline'
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label='Help'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name='lifebuoy'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey3 }}>
                    <Text style={styles.preferencesText} >Preferences</Text>
                    <View style={styles.darkmodeSwitch}>
                        <Text style={styles.darkmodeText}>Dark Mode</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81B0FF' }}
                                thumbColor='#f4f3f4'
                            />
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>

            <DrawerItem
                label='Sign Out'
                icon={({ color, size }) => (
                    <Icon
                        type="material-community"
                        name='logout-variant'
                        color={color}
                        size={size}

                    />
                )}
                onPress={() => { signOutFunction() }}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -5
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.pagebackground,

    },
    preferencesText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },
    darkmodeSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkmodeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: 'bold'
    }
})