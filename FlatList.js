import React, { useState } from "react";
import { StyleSheet, Image, FlatList, Text, View } from "react-native";

export default function FlatLists() {
  const [data, setData] = useState([
    {
      id: 1,
      code: "SPA-01",
      img: require("./assets/favicon.png"),
      icon: require("./assets/favicon.png"),
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...",
      date: "8:00am, 21 May 2020",
      selected: false,
    },
    {
      id: 2,
      code: "SPA-04",
      img: require("./assets/favicon.png"),
      icon: require("./assets/favicon.png"),
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...",
      date: "8:00am, 21 May 2020",
      selected: false,
    },
  ]);

  const renderHeader = () => <Text style={styles.namePost}>My Posts</Text>;

  const renderItem = ({ item }) => (
    <View
      style={
        {
          // backgroundColor: item.selected ? 'red' : 'blue',
        }
      }
    >
      <View style={styles.itemIcon}>
        <Image source={item.icon}></Image>
      </View>
      <Image source={item.img} style={styles.itemImg} />
      <Text
        onPress={() => {
          (item.selected = !item.selected), console.log(item.selected);
        }}
        style={styles.itemTitle}
      >
        {item.title}
      </Text>
      <Text style={styles.itemContent}>{item.content}</Text>
      <View style={styles.itemRow}>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator}></View>;

  const renderEmptyComponent = () => <Text>Data is empty !!!</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.nameScreen}>FlatList And ScrollView</Text>
      <FlatList
        style={styles.content}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameScreen: {
    width: "100%",
    height: 100,
    color: "#141434",
    paddingBottom: 24,

    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",

    textAlign: "center",
    textAlignVertical: "bottom",

    borderBottomWidth: 0.8,
    borderBottomColor: "#E8E8EB",
  },
  content: {
    paddingHorizontal: 28,
  },
  namePost: {
    color: "#414151",
    paddingTop: 25,
    paddingBottom: 19,

    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#E8E8EB",
    marginBottom: 24,
  },
  itemIcon: {
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    padding: 8.5,
    borderRadius: 6,
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },
  itemImg: {
    height: 140,
    width: "100%",
    borderRadius: 6,
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    color: "#141434",
    marginBottom: 6,
  },
  itemContent: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: -0.3,
    color: "#414151",
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  itemDate: {
    fontSize: 12,
    lineHeight: 18,
    color: "#838393",
  },
  itemCode: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#FF1209",
  },
});
