import navigationStrings from "./navigationStrings";
import * as Screens from "../screens";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.Home}
        component={Screens.Home}
        options={{ headerShown: false }}
      />
    </>
  );
}
