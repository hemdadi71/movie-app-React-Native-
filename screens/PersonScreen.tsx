import { ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  verticalMargin } from '../constants'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme'
import Loading from '../components/Loading'
import { usePerson } from '../hooks/usePerson'
import Person from '../components/Person'

const PersonScreen = () => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)
  const { loading, person, personMovies } = usePerson()
  return (
    <ScrollView
      className="flex-1 bg-neutral-900 pt-4"
      contentContainerStyle={{ paddingBottom: 20 }}>
      <SafeAreaView
        className={
          'w-full flex-row justify-between items-center px-4 mx-3' +
          verticalMargin
        }>
        <TouchableOpacity style={styles.background} className="rounded-xl p-1">
          <ChevronLeftIcon
            onPress={() => navigation.goBack()}
            size="32"
            strokeWidth={2.5}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeartIcon
            onPress={() => setIsFavorite(!isFavorite)}
            size="35"
            color={isFavorite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <Person person={person} personMovies={personMovies} />
      )}
    </ScrollView>
  )
}

export default PersonScreen
