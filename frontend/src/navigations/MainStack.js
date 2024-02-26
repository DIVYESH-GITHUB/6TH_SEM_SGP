import navigationStrings from "./navigationStrings";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TabRoutes}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
