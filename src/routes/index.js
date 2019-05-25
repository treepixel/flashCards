import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import ViewDeck from '../screens/ViewDeck';
import NewDeck from '../screens/NewDeck';
import NewCard from '../screens/NewCard';
import Quiz from '../screens/Quiz';

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
          backgroundColor: '#3c2157'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'yantramanav-black',
          fontSize: 20
        }
      }
    }
  )
);
