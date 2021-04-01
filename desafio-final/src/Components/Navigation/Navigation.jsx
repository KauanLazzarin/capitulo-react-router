import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation () {
    return (
        <nav className={styles.navigationContainer}>
            <NavLink className={styles.navigationLink} to="/">Produtos</NavLink>
            <NavLink className={styles.navigationLink} to="about">Sobre</NavLink>
            <NavLink className={styles.navigationLink} to="/products/notebook">Sobre</NavLink>
        </nav>
    )
};