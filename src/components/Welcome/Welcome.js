import styles from './Welcome.module.css'

export default function Welcome (){
    return(
        <div className={styles.fundo}>
            <img src='/fundo.jpg'/>

            <div className={styles.entrada}>
                <h1>welcome !</h1>
                <h5>OS FILMES MAIS POPULARES DO MOMENTO</h5>
                <h5>EXPLORE JÁ</h5>
            </div>

        </div>
    );
};