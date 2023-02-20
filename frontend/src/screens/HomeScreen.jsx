import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../themes/appTheme'

export const HomeScreen = () => {
	const navigation = useNavigation()
	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>HomeScreen</Text>

			<TouchableOpacity>
				<Button
					title='ir a profile'
					onPress={() => alert('navigate')}
				/>
			</TouchableOpacity>
		</View>
	)
}
