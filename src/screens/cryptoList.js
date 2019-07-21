import React from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from '../actions/cryptos'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import CryptoRow from '../components/cryptoRow'

class CryptoList extends React.Component {


  static navigationOptions = ({navigation}) => {
    return {
      title: 'Cryptos now',
      headerTitleStyle: {
        color: 'white',
        fontSize: 28
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
    }
  }

  componentDidMount() {
    this.fetchCryptos()
  }

  fetchCryptos = () => {
    this.props.fetchCryptos()
  }

  renderItem = ({ item }) => (
    <CryptoRow
        title={Object.keys(item)[0]}
        description={Object.keys(item)[0]}

    />
  )

  _onRefresh = () => this.props.fetchCryptos()

  render() {
    const { cryptos, loading } = this.props
    return (
      <FlatList
        refreshControl = {
          <RefreshControl refreshing = {loading} onRefresh = {this._onRefresh} />
        }
        styles={styles.container}
        data={cryptos.items}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyColor,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos,
    loading: state.cryptos.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => {
      dispatch(fetchCryptos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList)
