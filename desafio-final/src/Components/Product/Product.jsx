import React from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import styles from './Product.module.css';

export default function Product () {
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const params = useParams();
    const productId = params.id;

    React.useEffect(() => {
        setLoading(true);
        fetch(`https:/ranekapi.origamid.dev/json/api/produto/${productId}`)
            .then(response => response.json())
            .then(json => setProduct(json));
    
        setLoading(false);
        console.log(product)
    }, [productId]);

    if (loading === true) {
        return <Loading />;
    } else {
        return (
            <div className={styles.productCard}>
                <h1>{product.nome}</h1>
                <img src={params['*']} alt=""/>
                <p>{product.preco}</p>
                <strong>{product.descricao}</strong>
            </div>
        );
    }
}