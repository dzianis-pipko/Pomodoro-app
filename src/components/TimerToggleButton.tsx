import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  isTimerRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimerToggleButton: React.FC<Props> = ({
  isTimerRunning,
  startTimer,
  stopTimer,
}) => {
  return (
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
      <View style={style.container}>
        <Text style={style.text}>
          {isTimerRunning ? 'Stop timer' : 'Start timer'}
        </Text>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    borderColor: '#fff',
    marginVertical: 50,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
