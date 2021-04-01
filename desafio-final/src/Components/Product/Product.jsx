import { useParams } from "react-router";
import styles from './Product.module.css';

export default function Product () {
    const params = useParams();
    console.log(params)

    return (
        <div className={styles.productCard}>
            <h1>{params.nome}</h1>
            <img src={params['*']} alt=""/>
            <p>{params.preco}</p>
        </div>
    );
}