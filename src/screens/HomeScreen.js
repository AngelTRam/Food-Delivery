import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import { colors, parameters } from '../global/styles';
import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';

export default function Home({ navigation }) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>

        {/* Delivery and Pick Up selector */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: 'white',
              padding: 10
            }}>
            <TouchableOpacity onPress={() => {
              setDelivery(true)
            }}>
              <View
                style={{
                  ...styles.delivertButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey3,
                }}>
                <Text style={{ ...styles.deliveryText, color: delivery ? 'white' : colors.grey1 }}>
                  Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setDelivery(false)
              navigation.navigate('RestaurantMapScreen');
            }}>
              <View
                style={{
                  ...styles.delivertButton,
                  backgroundColor: delivery ? colors.grey3 : colors.buttons,
                }}>
                <Text style={{ ...styles.deliveryText, color: delivery ? colors.grey1 : 'white' }}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15 }}>
              <Icon
                type='material-community'
                name='map-marker'
                color={colors.grey1}
              />
              <Text style={{ marginLeft: 15 }}>22 Beessie street</Text>
            </View>
            <View style={styles.nowIndicator}>
              <Icon
                type='material-community'
                name='clock-time-four'
                color={colors.grey1}
              />
              <Text style={{ marginLeft: 15 }}>Now</Text>
            </View>

          </View>
          <View>
            <Icon
              type='material-community'
              name='tune'
              color={colors.grey1}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => { setIndexCheck(item.id) }}
              >
                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                  <Image style={{ height: 60, width: 60, borderRadius: 18, backgroundColor: 'white', paddingTop: 10 }}
                    source={item.image} />
                  <View>
                    <Text style={indexCheck === item.id ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>{item.name}</Text>
                  </View>

                </View>
              </Pressable>
            )} />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginLeft: 15, fontSize: 16, marginTop: 1, marginRight: 5 }}>
            Options changing in:
          </Text>
          <CountDown
            until={3600}
            size={14}
            digitStyle={{ backgroundColor: colors.buttons }}
            digitTxtStyle={{ color: 'white' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'Min', s: 'Sec' }}
          />
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}

            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  Images={item.images}
                  restaurantName={item.restaurantName}
                  NumberOfReviews={item.numberOfReview}
                  businessAddress={item.businessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}

                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}

            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  Images={item.images}
                  restaurantName={item.restaurantName}
                  NumberOfReviews={item.numberOfReview}
                  businessAddress={item.businessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}

                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {

            restaurantsData.map(item => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * .95}
                  Images={item.images}
                  restaurantName={item.restaurantName}
                  NumberOfReviews={item.numberOfReview}
                  businessAddress={item.businessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}

                />
              </View>
            ))
          }
        </View>
      </ScrollView>
      { delivery && 
        <View style={styles.floatingMapButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen');
            }}
          >
            <Icon
              name='place'
              type='material'
              size={32}
              color={colors.buttons}
            />
            <Text style={{ color: colors.grey5 }}>Map</Text>
          </TouchableOpacity>
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  delivertButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginHorizontal: 20,
  },
  nowIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 9,
    marginVertical: 5
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey3,
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  headerTextView: {
    backgroundColor: colors.grey3,
    marginVertical: 20,
    padding: 5
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 80,
    margin: 10,
    height: 95,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 95,
  },
  smallCardText: {
    color: colors.grey1,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 10
  },
  floatingMapButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60, height: 60,
    borderRadius: 30,
    alignItems: 'center'
  }
});
