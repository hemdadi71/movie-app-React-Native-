import { View, Text } from 'react-native'
import React from 'react'
import { height, width } from '../constants'
import * as Progress from 'react-native-progress'
import { theme } from '../theme'
const Loading = () => {
  return (
    <View
      style={{ height, width }}
      className="absolute flex-row justify-center items-center z-50">
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  )
}

export default Loading
