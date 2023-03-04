import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    deliveryAvialable,
    discountAvialable,
    discountPercent,
    NumberOfReviews,
    businessAddress,
    farAway,
    averageReview,
    Images,
    screenWidth, }) {
    return (

        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={{ uri: Images }}
                />
                <View>
                    <View>
                        <Text style={{ ...styles.restaurantName }}>{restaurantName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View styles={styles.distance}>
                            <Icon
                                name='place'
                                type='material'
                                color={colors.grey3}
                                size={18}
                                iconStyle={{ marginTop: 3, marginLeft: 10 }}
                            />



                        </View>
                        <View>
                            <Text style={styles.Min}>{farAway} Min</Text>
                        </View>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={{ color: 'white' }}>{NumberOfReviews} reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey3,
    },
    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 150
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey1,
        marginTop: 5,
        marginLeft: 10
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: colors.grey2,
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    Min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.grey3,

    },
    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },
    review: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },
    average: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 3
    }
})
