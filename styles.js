import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  topBar: {
    padding: 5,
    paddingTop: 15,
    backgroundColor: '#a82323',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  readingContainer: {
    flex: 11,
  },
  titleView: {
    alignItems: 'center',
    flexGrow: 1,
  },
  titleText: {
    fontSize: 30,
  },
  textView: {
    alignItems: 'flex-start',
    flexGrow: 12,
  },
  textText: {
    fontSize: 12,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  greeting: {
    marginBottom: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AllArticles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  AllArticlesContainer: {
    flex: 1
  },
  searchBarContainer: {
    margin: 10,
    padding: 2,
    flexDirection: 'column',
  },
  searchBar: {
    margin: 5,
    fontSize: 22,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 4
  },
  searchButton: {
    marginTop: 10,
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 8,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    marginTop: 20,
    marginBottom: 35,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  }
});
