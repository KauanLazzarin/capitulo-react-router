import styles from './Contact.module.css';

export default function Contact () {
    return (
        <div className={styles.contactContainer}>
            <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80" alt=""/>
            <aside>
                <h1>Contate-nos</h1>
                <p>- Rua Padre Adolpho Roll, 121</p>
                <p>- 69 997462345</p>
                <p>- contact@enterprise.com</p>
            </aside>
        </div>
    )
};