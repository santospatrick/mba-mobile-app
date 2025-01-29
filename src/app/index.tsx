import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

type Props = {}

const Index = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Index</Text>
      <TouchableOpacity onPress={() => router.navigate('products')}>
        <Text>Go to homepage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('sign-up')}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index