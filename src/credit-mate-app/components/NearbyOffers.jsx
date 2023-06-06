import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Colors from '../constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

const NearbyOffers = () => {
    const [filterData, useFilterData] = useState([
        {
            name: "Food",
            active: true,
        },
        {
            name: "Shopping",
            active: false,
        },
        {
            name: "Hotel",
            active: false,
        },
        {
            name: "Travel",
            active: false,
        },
        {
            name: "Grocery",
            active: false,
        },
        {
            name: "Gaming",
            active: false,
        }
    ])
    const [offersData, useOffersData] = useState([
        {
            company: "McDonald's",
            offer: "20%",
            image: require("../assets/images/image-product-1.jpg"),
            open: "10am - 9pm",
            delivery: true,
        },
        {
            company: "Nike",
            offer: "40%",
            image: require("../assets/images/image-product-2.jpg"),
            open: "6am - 7pm",
            delivery: false,
        },
        {
            company: "McDonald's",
            offer: "20%",
            image: require("../assets/images/image-product-1.jpg"),
            open: "10am - 9pm",
            delivery: true,
        },
    ])

    const handleItemChange = (item) => {
        const newData = filterData.map((dataItem) => {
            if (dataItem.name === item.name) {
                dataItem.active = true;
            } else {
                dataItem.active = false;
            }
            return dataItem;
        })
        useFilterData(newData);
    }
    return (
        <View style={styles.NearbyOffers}>

            <View style={styles.header}>
                <Text style={styles.headText}>Nearby offers</Text>
                <TouchableOpacity >
                    <Text style={{ color: Colors.gray2, fontWeight: 600 }}>View more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filterList}>
                <View style={styles.filterIcon}>
                    <AntDesign name="filter" size={24} color="black" />
                </View>
                <FlatList
                    horizontal
                    data={filterData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={item.active ? styles.chipActive : styles.chip} onPress={() => handleItemChange(item)}>
                            <Text style={{ textAlign: "center", color: item.active ? "white" : "black" }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                />
            </View>
            <View style={styles.offers}>
                {
                    offersData.map((item, index) => (
                        <View style={styles.offer}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.offerDetails}>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                                    <Text style={styles.company}>{item.company}</Text>
                                    <Text style={styles.ammount}>{item.offer} off</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                                        <FontAwesome5 name="clock" size={14} color={Colors.gray2} />
                                        <Text style={styles.lightText}>{item.open}</Text>
                                    </View>
                                    <View style={styles.dot}></View>
                                    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                                        <FontAwesome5 name="truck" size={14} color={Colors.gray2} />
                                        <Text style={styles.lightText}>{item.delivery ? "Delivery" : "Pickup"}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    ))
                }

            </View>
        </View>
    )
}

export default NearbyOffers

const styles = StyleSheet.create({
    NearbyOffers: {
    },
    header: {
        marginVertical: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    list: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10,
    },
    chip: {
        borderWidth: 1,
        borderColor: Colors.gray2,
        display: "flex",
        alignSelf: "center",
        paddingTop: 0,
        paddingHorizontal: 15,
        paddingVertical: 3,
        paddingTop: 3,
        justifyContent: "center",
        resizeMode: "cover",
        borderRadius: 20,
        marginRight: 10,
    },
    ammount: {
        color: Colors.green,
        fontWeight: "bold",
    },
    chipActive: {
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        display: "flex",
        alignSelf: "center",
        paddingTop: 0,
        paddingHorizontal: 15,
        paddingVertical: 3,
        paddingTop: 3,
        justifyContent: "center",
        borderRadius: 20,
        marginRight: 10,
    },
    offers: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
    },
    offer: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    offerDetails: {
        display: "flex",
        flex: 1,
        paddingRight: 6,
    },
    company: {
        fontSize: 16,
        fontWeight: "bold",
    },
    lightText: {
        color: Colors.gray2,
        marginLeft: 4,
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: Colors.gray2,
        marginHorizontal: 8,
    }
})