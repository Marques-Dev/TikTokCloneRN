import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { 
Container,
TitleFollow,
TitleForYou,
Header 
} from './styles';

export default () => {
  return (
    <SafeAreaView>
      <Header>
        <TitleFollow>Seguindo</TitleFollow>
        <TitleForYou>Para Voce</TitleForYou>
      </Header>
          <Container>
          
          </Container>
    </SafeAreaView>
  );
}