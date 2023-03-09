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
        restaurantName: "Mc Donalds", farAway: "21.2",
        businessAddress: "22 Bessie street, Cape Town", images: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_8936_EVM_M_BigMac_Coke_Glass_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
        collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg" }, {
            name: "Chicken Burger",
            price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
        },
        ],
        id: 0
    },

    {
        restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
        images: 'https://enriqueortegaburgos.com/wp-content/uploads/2022/12/KFC-ESTRATEGIAS-DE-NEGOCIO.jpg',
        averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg" }, {
            name: "Chicken Burger",
            price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
        },],
        id: 1
    },

    {
        restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
        images: 'https://a.mktgcdn.com/p/vegWqbORarr9JVsZJIWbWHBPmUiJoKLhMi6EPYO2tIE/1280x720.jpg',
        coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
        discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg" }, {
            name: "Chicken Burger",
            price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
        },
        ],
        id: 2
    },

    {
        restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
        images: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Thin_crust_Roman_style_pizza_on_table.jpg',
        averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg" }, {
            name: "Chicken Burger",
            price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
        },
        ],
        id: 3
    },

];

export const productData = [{
    name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 0
},
{
    name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot", id: 1
},
{ name: "Chicken Burger", price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg", details: "", id: 2 },
{
    name: "Hand cut chips", price: 29.30, image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 3
},
{
    name: "Big Mac", price: 50.80, image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot", id: 4
},
{ name: "Chicken Burger", price: 70, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg", details: "", id: 5 },


];


export const menuData = [

    { title: "BEEF", special: false, key: 0, },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES& CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SAHRE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
    { title: "LIMITED OFFER", key: 0 },
    { title: "GO CHILLI", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
    { key: 1, title: 'BEEF' },
    { key: 2, title: 'CHICKEN' },
    { key: 3, title: 'VEGGIE BURGER' },
    { key: 4, title: 'SHARE BOX' },
    { key: 5, title: 'Happy Meals' },
    { key: 6, title: 'Fries' },
    { key: 7, title: 'Sides' },
    { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [
                { name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
                { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
                { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
            ],

            [
                { name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 0
    },

    {
        meal: "Hand cut chips",
        price: 29.30,
        image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [
                { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [
                { name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],
        minimum_quatity: [2, 1, 2, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 1
    },

    {
        meal: "Chicken Burger",
        price: 45.70,
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 2
    },
    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/22205458/Big-Mac-de-pollo.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 0
    },

    {
        meal: "Hand cut chips",
        price: 29.30,
        image: "https://grantourismotravels.com/wp-content/uploads/2020/09/Hand-Cut-Potato-Chips-Recipe-for-Crispy-Fries-Copyright-2022-Terence-Carter-Grantourismo-L.jpg",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],
        minimum_quatity: [2, 1, 2, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 1
    },

    {
        meal: "Chicken Burger",
        price: 45.70,
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 2
    },


];
