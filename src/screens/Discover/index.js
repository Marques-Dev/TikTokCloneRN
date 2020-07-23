import React from 'react';
import { Container,Header,Texto,Scan} from './styles';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    return (
      <Container>
        <Header>
          <FeatherIcons  name='search' size={22} color='#333' />
          <Texto>Pesquisar</Texto>
        </Header>
          <Scan>
          <MaterialIcons  name='scan-helper' size={25} color='#333' />
          </Scan>
      </Container>
    );
}