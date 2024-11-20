import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface MainProps {
  children: ReactNode;
}

export function Main(props: MainProps) {
  const { children } = props;
  return (
    <View style={styles.main}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});
