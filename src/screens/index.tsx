// import WelcomeScreen from "./Authantication/WelcomeScreen";

import BottomTabNavigator from "../navigators/BottomTabNavigator";
import CreateAccount from "./CreateAccount";
import Home from "./Home";
import YTvideos from "./Home/YTvideos";
import Library from "./Library";
import LoginScreen from "./LoginScreen";
import Search from "./Search";
import ArtistScreen from "./Search/ArtistScreen";
import RecentSearches from "./Search/RecentSearches";
import SplashScreens from "./SplashScreens";
import Test from "./Test";
import WelcomeScreen from "./WelcomeScreen";
import YouTubePlayerPopup from "./YouTubePlayerPopup";

export const screens = {
  //Authontication screens
  BottomTabNavigator: BottomTabNavigator,
  WelcomeScreen: WelcomeScreen,
  Library: Library,
  Search: Search,
  Home: Home,
  ArtistScreen: ArtistScreen,
  RecentSearches: RecentSearches,
  Test: Test,
  LoginScreen:LoginScreen,
  CreateAccount:CreateAccount,
  YouTubePlayerPopup:YouTubePlayerPopup,
  YTvideos:YTvideos
};
