import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div>
            <h3>React-router</h3>
            <p>Aprendendo sobre roteamento no react</p>

            <nav>
                <NavLink to="/" activeStyle={{color: 'Tomato'}} end>Home</NavLink> |
                <NavLink to="about" activeStyle={{color: 'Tomato'}}>Sobre</NavLink>
            </nav>
        </div>
    )
}