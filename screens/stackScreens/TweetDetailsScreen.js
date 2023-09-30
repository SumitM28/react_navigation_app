import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";
export default function TweetDetailsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);
  return (
    <View>
      <TweetContent tweet={params.tweet} />
    </View>
  );
}
