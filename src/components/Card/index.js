import { View, StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const Card = ({ children, style }) => {
  return <View style={{ ...styles.cardContainer, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 8,
  },
});
