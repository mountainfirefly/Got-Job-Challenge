import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  applicantContainer: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
  question: {
    fontWeight: 'bold',
  },
  item: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    flex: 1,
  },
  header: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
  },
});

export default styles;
