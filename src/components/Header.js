import styled from "styled-components";
import Nav from './Nav'
import Title from './Title'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 98vw;
    height: 40vh;
    margin-top: 1rem;
    overflow: visible;
`;

const Header = () => {
    const title = "SIMPLE THESAURUS"

    return (
        <HeaderStyle>
            <Nav />
            <Title title={title}/>
        </HeaderStyle>
    )
}

export default Header;