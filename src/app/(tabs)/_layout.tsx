import React from 'react'
import { Tabs } from 'expo-router'
import { Store, User } from 'lucide-react-native'

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
          title: 'PRODUTOS',
          tabBarIcon: ({ size, color }) => <Store size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PERFIL',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout