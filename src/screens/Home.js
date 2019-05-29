import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import ListDecks from '../components/ListDecks';
import BtnAddDeck from '../components/BtnAddDeck';
import { primaryColor, white, purpleLight } from '../utils/colors';
import { connect } from 'react-redux';
import { addInitialDataRequest } from '../store/actions';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Flash Cards" />,
    headerRight: <BtnAddDeck />
  };

  state = {
    query: ''
  };

  componentDidMount() {
    const { getInitialData } = this.props;
    getInitialData();
  }

  search = text => {
    this.setState({ query: text });
  };

  render() {
    const { decks } = this.props;
    const { query } = this.state;

    const filteredDecks =
      query.length >= 2
        ? decks.filter(item =>
            item.title.toLowerCase().match(query.toLowerCase())
          )
        : decks;

    return (
      <View style={styles.container}>
        <View style={styles.containerFind}>
          <Image
            style={styles.icon}
            source={require('../../assets/magnifier.png')}
          />
          <TextInput
            style={styles.findText}
            onChangeText={this.search}
            value={query}
            placeholder="Type here to search cards"
          />
        </View>
        <ListDecks decks={filteredDecks} />
      </View>
    );
  }
}

const mapStateToProps = state => ({ decks: Object.values(state.decks) });

const mapDispatchToPros = dispatch => ({
  getInitialData: () => dispatch(addInitialDataRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor
  },
  containerFind: {
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 20,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 8,
    width: 20,
    height: 20,
    zIndex: 2
  },
  findText: {
    width: '100%',
    height: 36,
    paddingHorizontal: 20,
    backgroundColor: purpleLight,
    borderRadius: 15,
    color: white,
    fontFamily: 'yantramanav-black'
  }
});
