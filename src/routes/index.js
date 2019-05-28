import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import ViewDeck from '../screens/ViewDeck';
import NewDeck from '../screens/NewDeck';
import NewCard from '../screens/NewCard';
import Quiz from '../screens/Quiz';
import { primaryColor, white } from '../utils/colors';

export default createAppContainer(
  createStackNavigator(
    {
      Home: Home,
      ViewDeck: ViewDeck,
      NewDeck: NewDeck,
      NewCard: NewCard,
      Quiz: Quiz
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: primaryColor,
          shadowOpacity: 0,
          shadowOffset: { height: 0, width: 0 },
          shadowRadius: 0,
          borderBottomWidth: 0,
          elevation: 0
        },
        headerTintColor: white,
        headerTitleStyle: {
          fontFamily: 'yantramanav-black',
          fontSize: 20
        }
      }
    }
  )
);
