import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

type Props = {}

const Signup = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Signup</Text>
      <TouchableOpacity onPress={() => router.push('index')}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup