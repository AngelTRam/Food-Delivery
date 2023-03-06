export const filterData = [
    { name: 'Fast food', image: require('../assets/img/fastfood.png'), id: '0' },
    { name: 'Burger', image: require('../assets/img/burger.png'), id: '1' },
    { name: 'Salads', image: require('../assets/img/salads.png'), id: '2' },
    { name: 'Hotdogs', image: require('../assets/img/hotdogs.png'), id: '3' },
    { name: 'Chinese', image: require('../assets/img/chinese.png'), id: '4' },
    { name: 'Mexican', image: require('../assets/img/mexican.png'), id: '5' },
    { name: 'Sea food', image: require('../assets/img/seafood.png'), id: '6' },

];

export const filterData2 = [
    { name: "Burritos", image: 'https://i.blogs.es/5ac783/como-hacer-burritos-de-carne-2-/1366_2000.jpg', id: "0" },
    { name: "Chimichangas", image: 'https://laroussecocina.mx/wp-content/uploads/2020/08/shutterstock-1289033287.jpg', id: "1" },
    { name: "Quesadillas", image: "https://i.blogs.es/2a00ea/quesadilla_vertical/650_1200.jpg", id: "2" },
    { name: "East food", image: "https://i.insider.com/5b33c37a1ae6621d008b499c?width=1136&format=jpeg", id: "3" },
    { name: "Canadian food", image: "https://xyuandbeyond.com/wp-content/uploads/poutine-1.jpg", id: "4" },
    { name: "Egg food", image: "https://t1.uc.ltmcdn.com/es/posts/8/2/7/como_hacer_un_omelette_de_huevo_31728_600_square.jpg", id: "5" },
    { name: "Tortas", image: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/f95e71586f7259763c7bb5ac3074fab5.jpg", id: "6" },
    { name: "Pizza", image: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg", id: "7" },
    { name: "SubWay", image: "https://i0.wp.com/goula.lat/wp-content/uploads/2020/11/Subway-panes.jpg?fit=1200%2C879&ssl=1", id: "8" },
    { name: "Sushi", image: "https://assets.unileversolutions.com/recipes-v2/237341.jpg", id: "9" },
]

export const restaurantsData = [
    {
        restaurantName: 'McDonalds', farAway: '21.2',
        businessAddress: '22 Bessie Street, Cape Town', images: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, Ing: 28.246325 }, discount: 10, deliveryTime: 15,
        collectTime: 5, foodType: 'Burgers, Wraps, Milkshakes...',
        productData: [
            { name: 'Hand Cut Chips', price: 29.30, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Big Mac', price: 50.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Chicken Burger', price: 39.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' }
        ], id: 0
    },
    {
        restaurantName: 'KFC', farAway: '12.2',
        businessAddress: '22 Bessie Street, Cape Town', images: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1891648, Ing: 28.2441808 }, discount: 20, deliveryTime: 30,
        collectTime: 5, foodType: 'Burgers, Wraps, Milkshakes...',
        productData: [
            { name: 'Hand Cut Chips', price: 29.30, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Big Mac', price: 50.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Chicken Burger', price: 39.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' }
        ], id: 1
    },
    {
        restaurantName: 'Steers', farAway: '5',
        businessAddress: '22 Bessie Street, Cape Town', images: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1886781, Ing: 28.244879 }, discount: 15, deliveryTime: 45,
        collectTime: 5, foodType: 'Burgers, Wraps, Milkshakes...',
        productData: [
            { name: 'Hand Cut Chips', price: 29.30, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Big Mac', price: 50.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Chicken Burger', price: 39.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' }
        ], id: 2
    },
    {
        restaurantName: 'Roman Pizza', farAway: '7',
        businessAddress: '22 Bessie Street, Cape Town', images: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1886781, Ing: 28.244879 }, discount: 15, deliveryTime: 45,
        collectTime: 5, foodType: 'Burgers, Wraps, Milkshakes...',
        productData: [
            { name: 'Hand Cut Chips', price: 29.30, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Big Mac', price: 50.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' },
            { name: 'Chicken Burger', price: 39.00, image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg' }
        ], id: 3
    },

];

