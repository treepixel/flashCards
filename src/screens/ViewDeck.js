import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import ListCards from '../components/ListCards';
import BtnCircle from '../components/BtnCircle';
import { withNavigation, HeaderBackButton } from 'react-navigation';
import { primaryColor, secondColor, white, purple } from '../utils/colors';
import { connect } from 'react-redux';
import { deleteDeckRequest } from '../store/actions';

class ViewDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <HeaderBackButton
        tintColor={white}
        onPress={() => navigation.navigate('Home')}
      />
    ),
    headerTitle: <LogoTitle title="Deck" />
  });

  hasCards = cards => {
    return Array.isArray(cards) && cards.length ? true : false;
  };

  render() {
    const { deck, navigation, deleteDeck } = this.props;

    if (!deck) {
      return (
        <View style={styles.container}>
          <Text>No Deck Found</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.boxDeck}>
            <View style={styles.cards}>
              <Text style={{ color: '#FF3366', fontSize: 12 }}>
                {deck.cards ? deck.cards.length : 0}
              </Text>
            </View>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.score}>Max Score {deck.maxScore}%</Text>
            <View style={styles.btnArea}>
              <BtnCircle
                type="delete"
                onPress={() => deleteDeck(deck.id)}
                disabled={false}
              />
              <BtnCircle
                type="add"
                onPress={() =>
                  navigation.navigate('NewCard', { deckId: deck.id })
                }
                disabled={false}
              />
              <BtnCircle
                type="quiz"
                onPress={() => navigation.navigate('Quiz', { deckId: deck.id })}
                disabled={!(deck.cards.length > 0)}
              />
            </View>
          </View>
          {deck.cards && deck.cards.length >= 1 && (
            <ListCards cards={deck.cards} deckId={deck.id} />
          )}
        </View>
      </View>
    );
  }
}

mapStateTopProps = ({ decks }, { navigation }) => ({
  deck: decks[navigation.state.params.deckId],
  navigation
});

mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeckRequest(id))
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(withNavigation(ViewDeck));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor
  },
  content: {
    flex: 1,
    backgroundColor: white,
    borderTopRightRadius: 60
  },
  boxDeck: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  title: {
    fontFamily: 'yantramanav-black',
    color: secondColor,
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 36
  },
  cards: {
    alignSelf: 'flex-end',
    marginVertical: 30,
    borderColor: secondColor,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  score: {
    fontFamily: 'yantramanav-thin',
    color: primaryColor,
    fontSize: 18,
    textAlign: 'center'
  },
  btnArea: {
    flexDirection: 'row',
    paddingVertical: 30
  }
});
