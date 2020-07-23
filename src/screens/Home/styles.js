import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export const Header = styled.SafeAreaView`
  align-items:center;
  flex-direction: row;
  justify-content:space-around;
  margin:15px;
`;


export const TitleFollow = styled.Text`
    margin-left:100px;
    font-size:16px;
    font-weight:bold;
    color:#fff;
`; 

export const TitleForYou = styled.Text`
  margin-right:100px;
  font-size:16px;
  font-weight:bold;
  color:#fff
`;