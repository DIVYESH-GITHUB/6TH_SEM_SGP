import * as Screens from "../screens";
import navigationStrings from "./navigationStrings";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.Login}
        component={Screens.Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.Register}
        component={Screens.Register}
        options={{ headerShown: false }}
      />
    </>
  );
}
