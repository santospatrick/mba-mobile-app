import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control'
import { VStack } from '@/components/ui/vstack'
import { ArrowRight, Mail } from 'lucide-react-native'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'

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
          <Input className="my-1 border-l-0 border-t-0 border-r-0 border-b-gray-400">
            <InputSlot>
              <InputIcon as={Mail} />
            </InputSlot>
            <InputField
              type="text"
              placeholder="mail@exemplo.br"
              style={{ fontFamily: "Poppins_400Regular" }}
            />
          </Input>
        </FormControl>

        <Button 
          className="mt-10 justify-between rounded-lg h-14" 
          size="md" 
          variant="solid" 
        >
          <ButtonText>Acessar</ButtonText>
          <ButtonIcon className="mr-1" size="md" as={ArrowRight} />
        </Button>
      </VStack>
      <TouchableOpacity className="mt-10" onPress={() => router.navigate('products')}>
        <Text>Go to homepage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('sign-up')}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index