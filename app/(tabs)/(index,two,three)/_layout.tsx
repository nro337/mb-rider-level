import { Stack } from "expo-router";


export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        // headerShown: false
        // headerRight(props) {
        //   if (isSharingAvailable()) {
        //     return <ShareButton {...props} />;
        //   } else {
        //     return null;
        //   }
        // },
      }}
    />
  );
}