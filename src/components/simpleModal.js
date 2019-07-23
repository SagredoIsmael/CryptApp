import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity } from 'react-native'
import Colors from '../utils/constants'
import { hiddenModalOffline } from '../actions/cryptos'

 class simpleModal extends Component {
  constructor(props) {
    super(props)
  }

 render() {
   const {title, description} = this.props
   return (
      <View style={styles.container}>
        <Modal>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.mainView}>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />
                    <Text style={styles.alertMessage}>{description} </Text>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />
                    <View style={{flexDirection: 'row', height: '30%'}}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                             onPress={() => this.props.hiddenModalOffline()}
                            activeOpacity={0.7}>
                            <Text style={styles.TextStyle}> OK </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container :{
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: (Platform.OS == 'ios') ? 20 : 0
  },

  mainView:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Colors.primaryColor,
    height: 200 ,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:7,
  },

  alertTitle:{
    fontSize: 22,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '28%'
  },
  alertMessage:{
      fontSize: 18,
      color: "#fff",
      textAlign: 'center',
      padding: 10,
      height: '45%'
    },

  buttonStyle: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 22,
      marginTop: -5
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    hiddenModalOffline: () => {
      dispatch(hiddenModalOffline())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(simpleModal)
