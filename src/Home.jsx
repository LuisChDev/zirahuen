import { View, Text } from 'react-native';
import { styles } from './styles';
import { useUserStore } from './store';

const HomeScreen = () => {
  const value = useUserStore((state) => state.bears);

  return (
    <View style={styles.container}>
      <Text>Welcome to Zirahuen</Text>
      <Text>Please log-in</Text>
      <Text>there are {value} bears</Text>
    </View>
  );
};

export default HomeScreen;
