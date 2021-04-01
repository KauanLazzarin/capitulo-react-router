import Head from "./Head"

export default function About () {
    return (
        <div className="about-container">
            <Head title="Sobre essa página" description="Aqui contém informações sobre a página" />

            <h1>Este site foi criado utilizado ReactJS</h1>
            <p>Especialmente por esse cara aqui: <a href="https://github.com/KauanLazzarin">Clique para conhecer <strong>o cara</strong></a></p>
        </div>
    )
};