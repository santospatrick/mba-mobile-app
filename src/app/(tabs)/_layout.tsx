import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

type Props = {}

const TabsLayout = (props: Props) => {
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: '#F24D0D',
            headerShown: false
        }}
    >
      <Tabs.Screen
        name="products"
        options={{
          title: 'Produtos',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
        }}
      />
    </Tabs>
  )
}

export default TabsLayout