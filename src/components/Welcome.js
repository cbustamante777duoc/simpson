
import Logo from "../the-simpson.png";
import styled from 'styled-components';

export default function Welcome(props) {

  const {reqApi}= props;


    return (
        <ContentLogo>
            <WelcomeText>pincha sobre la imagen para hacer uso </WelcomeText>
            <ImagenLogo src={Logo} alt="Simpson Logo" onClick={reqApi } />
        </ContentLogo>
    );
};


const ImagenLogo = styled.img`
  width:450px;
  height: auto;

  &:hover{
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
width: 100%;
text-align: center;
`
const WelcomeText = styled.p`
  color: blueviolet;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`
