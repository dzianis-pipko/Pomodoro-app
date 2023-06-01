import {
  TimerCountDownDisplay,
  TimerModeDisplay,
  TimerModes,
  TimerToggleButton,
} from 'components';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

function App(): JSX.Element {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>('Focus');

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === 'Focus') {
        setTimerMode('Break');
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode('Focus');
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInterval(id);
  };

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{backgroundColor: timerMode === 'Break' ? '#2a9d8f' : '#c95550'},
      }}>
      <Text style={styles.title}>Pomodoro app</Text>
      <TimerModeDisplay timerMode={timerMode} />
      <TimerToggleButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c95550',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
    color: '#fff',
  },
});

export default App;
