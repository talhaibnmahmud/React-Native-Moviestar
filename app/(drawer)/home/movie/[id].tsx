import { colorTokens } from '@tamagui/themes'
import { View } from 'react-native'
import { Title } from '~/tamagui.config'

const Movie = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            backgroundColor: colorTokens.light.green.green3,
        }}
        >
            <Title style={{
                color: colorTokens.light.green.green11,
                fontSize: 30,
                fontWeight: "bold",
            }}
            >Movie 1</Title>
        </View>
    )
}

export default Movie