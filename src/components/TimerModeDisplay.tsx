import React from 'react';
import {StyleSheet, Text} from 'react-native';

export type TimerModes = 'Focus' | 'Break';

type Props = {
  timerMode: TimerModes;
};

export const TimerModeDisplay: React.FC<Props> = ({timerMode}) => {
  return <Text style={styles.desc}>{timerMode}</Text>;
};

const styles = StyleSheet.create({
  desc: {
    fontSize: 30,
    fontWeight: '400',
    color: '#fff',
  },
});
