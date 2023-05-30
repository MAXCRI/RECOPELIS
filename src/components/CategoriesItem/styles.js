import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6.27,
    elevation: 10,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 1,
  },
  genero:{
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default styles;
