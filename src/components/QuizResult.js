import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import LottieAnimation from '../components/LottieAnimation';
import congratulation from '../../assets/trophy.json';
import dontworry from '../../assets/dino.json';
import { primaryColor, secondColor, white } from '../utils/colors';
import { connect } from 'react-redux';
import { maxScoreRequest } from '../store/actions';

const QuizResult = ({
  score,
  deckId,
  setIfMaxScore,
  onResetQuiz,
  navigation
}) => {
  /*
  while displaying the result, if the score was greater than 
  the previous record, replace maxScore
  */
  setIfMaxScore(score, deckId);

  return (
    <View style={styles.containerResult}>
      <LottieAnimation
        file={score >= 60 ? congratulation : dontworry}
        width={400}
        height={200}
        loop={true}
        speed={1}
      />
      <View style={styles.boxTitle}>
        <Text style={styles.resultTitle}>
          {score >= 60 ? 'CONGRATULATIONS' : "DON'T WORRY"}
        </Text>
      </View>
      <Text style={styles.resultSubTitle}>
        {score >= 60 ? 'You were awesome!' : 'Try again!'}
      </Text>
      <Text style={styles.textScore}>Your score was</Text>
      <Text style={styles.scoreResult}>{score}%</Text>
      <View style={styles.resultButtons}>
        <TouchableOpacity
          style={styles.resultBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/left-arrow.png')}
            style={{ width: 32, height: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resultBtn}
          onPress={() => onResetQuiz()}
        >
          <Image
            source={require('../../assets/go-back-arrow.png')}
            style={{ width: 28, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

mapDispatchToProps = dispatch => ({
  setIfMaxScore: (score, deckId) => dispatch(maxScoreRequest(score, deckId))
});

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(QuizResult));

const styles = StyleSheet.create({
  containerResult: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: primaryColor
  },
  boxTitle: {
    backgroundColor: secondColor,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 5
  },
  resultTitle: {
    color: white,
    fontFamily: 'yantramanav-black',
    fontSize: 30
  },
  resultSubTitle: {
    color: white,
    fontFamily: 'yantramanav-thin',
    fontSize: 20
  },
  textScore: {
    fontFamily: 'yantramanav-black',
    fontSize: 26,
    color: white,
    marginTop: 30,
    marginBottom: 5
  },
  scoreResult: {
    fontFamily: 'yantramanav-thin',
    fontSize: 60,
    color: white
  },
  resultButtons: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'center'
  },
  resultBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    margin: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: white
  }
});
