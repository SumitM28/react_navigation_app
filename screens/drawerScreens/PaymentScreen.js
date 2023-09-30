import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>PaymentScreen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Open Drawer" onPress={() => navigation.goBack()} />
    </View>
  );
}
