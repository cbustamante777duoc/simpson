import styled from 'styled-components';

export default function Chracter(props) {
    const { dataChracter } = props;
    const { character, image, quote } = dataChracter;
    return (
        <ChracterStyle>
            <Title>{character}</Title>
            <ContainerImage>
                <Image img src={image} alt={character} /> 
            </ContainerImage>
            <PhraseText>{quote}</PhraseText>
        </ChracterStyle>
    );
};


const ChracterStyle = styled.div`
    padding: 20px;
    border: 1px solid #b40d7f;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    margin: 10px;

    &:hover{
        filter(brightness(40%));
    }
`;

const Title = styled.h2`
    color: #7f0db4;
    font-size: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-smooth: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ContainerImage = styled.div`
    height:250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
  width: 130px;
  height: auto;
`;

const PhraseText = styled.h4`
  color: #7f0db4;
  height: 100px;
`;