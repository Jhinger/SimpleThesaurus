import styled from "styled-components";
import githubLogo from '../static/github-logo.png'

const NavStyles = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        height: 2rem;
        width: 2rem;
        filter: drop-shadow(0 0 0.75rem #007FB6);
        margin-right: 2rem;
        
        &:hover {
            cursor: pointer;
            filter: drop-shadow(0 0 3rem white);
        }
    }
`;

const Nav = () => {
    const handleRedirect = () => {
        window.location = 'https://github.com/Jhinger'
    }

    return (
        <NavStyles>
            <img onClick={handleRedirect} src={githubLogo} alt="GitHub"/>
        </NavStyles>
    )
}

export default Nav;