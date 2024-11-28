import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const colors = {
  white: "#ffffff",
  blackPrimary: "#212121",
  lightGrey: "#F6F6F6",
  borderGray: "#E8E8E8",
  darkBlue: "#1B4371",
  orange: "#FF6C00",
  gray: "#BDBDBD",
};

export const title = {
  marginBottom: 32,
  color: colors.blackPrimary,
  fontSize: 30,
  fontWeight: "500",
};

export const backgroundOrange = {
  backgroundColor: colors.orange,
};

export const primaryBtn = {
  color: colors.white,
  fontSize: 16,
  fontWeight: "400",
};

export const container = {
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-end",
};

export const registrationAndLoginContainer = {
  paddingHorizontal: 16,
  width: width,
  backgroundColor: colors.white,
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
};

export const secondaryText = {
  fontSize: 16,
  fontWeight: "400",
  color: colors.darkBlue,
};

export const innerWrapper = {
  gap: 16,
};

export const wrapInputMarginBottom = {
  marginBottom: 43,
};

export const passwordBtn = {
  flexDirection: "row",
  justifyContent: "space-between",
};

export const wrapperAvatar = {
  position: "absolute",
  width: 120,
  height: 120,
  borderRadius: 16,
  left: "50%",
  top: -60,
  marginLeft: 15,
  transform: [{ translateX: -60 }],
};

export const plusContainer = {
  backgroundColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: -15,
  bottom: 15,
};

export const plusSign = {
  position: "absolute",
  fontSize: 40,
  fontWeight: "200",
  color: colors.orange,
  top: "50%",
  left: "50%",
  transform: [{ translateX: -12 }, { translateY: -27 }],
};

export const imgList = {
  maxWidth: 361,
  height: 240,
  borderRadius: 8,
};
