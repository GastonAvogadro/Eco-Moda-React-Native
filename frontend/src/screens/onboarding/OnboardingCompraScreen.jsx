import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButtton from '../../styledComponents/StyledButton';

export const OnboardingCompraScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark>
            <StyledView container center>
                <StyledText size32 weight700>
                    Comprá
                </StyledText>
                <StyledText size12>
                    Comprá prendas de segunda mano y contribuí al medio ambiente.
                </StyledText>
                <StyledButtton
                    white
                    title={'Siguiente'}
                    onPress={() => navigator.navigate('OnboardingVendeScreen')}
                ></StyledButtton>
                <StyledButtton
                    black
                    title={'Omitir'}
                    onPress={() => navigator.navigate('LoginStack')}
                ></StyledButtton>
            </StyledView>
        </StyledView>
    );
};
