import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control'
import { VStack } from '@/components/ui/vstack'
import { Mail } from 'lucide-react-native'

type Props = {}

const Index = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Index</Text>
      <VStack className="w-full max-w-[350px]">
        <FormControl size="md">
          <FormControlLabel>
            <FormControlLabelText size="xs">E-MAIL</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1 border-l-0 border-t-0 border-r-0">
            <InputSlot>
              <InputIcon as={Mail} />
            </InputSlot>
            <InputField
              type="text"
              placeholder="mail@exemplo.br"
            />
          </Input>
        </FormControl>
      </VStack>
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