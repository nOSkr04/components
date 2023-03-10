/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SplashScreen: undefined;
  CarouselScreen: undefined;
  SecondCarouselScreen: undefined;
  AnimatedSpringify: undefined;
  AnimatedLayoutForTime: undefined;
  WebViewScreen: undefined;
  MapScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
 
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  // PharmacistRequestSheet: undefined;
 
};
// export type TopTabParamList = {
//   DrugDetail: {
//     isTrue: boolean;
//     gradus: string;
//     description: string;
//     hemjee: string;
//   };
//   DrugSummary: {
//     buyName: string;
//     countryName: string;
//     info: string;
//     nairlaga: string;
//   };
// };

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> = NativeStackScreenProps<BottomSheetParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
