import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Products.module.css';

export default function Products () {
    const [products, setProducts] = React.useState([]);

    async function fetchProducts () {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
        const data = await response.json();
        
        setProducts(data);
        console.log(data)
        return;
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className={styles.productsContainer}>

            {
                products.map((product) => {
                    return (
                        <div className={styles.productCard}>
                            <NavLink to="about">
                                <img src={product.fotos[0].src} alt={product.nome}/>   
                            </NavLink>
                            <h1>{product.nome}</h1> 
                        </div>
                     )
                })
            }

        </div>
    )
};  