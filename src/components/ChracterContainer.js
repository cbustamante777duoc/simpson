import styled from 'styled-components';
import Chracter from './Chracter';

export default function ChracterContainer(props) {
    const { chracters } = props;
    return (<ContainerChracter>
        {chracters.map((chracter, index) => (
            <Chracter dataChracter={chracter} key={index} />
        ))}
    </ContainerChracter>);
};

const ContainerChracter = styled.div`
    display: flex;
`


