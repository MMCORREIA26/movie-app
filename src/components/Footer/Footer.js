import styles from './Footer.module.css'

export default function Footer (){
    return(
        <footer className={styles.footer}>
            <img src='/logo-01.png'/>
            <h4>© COPYRIGHT TODOS OS DIREITOS RESERVADOS A TMDB</h4>
        </footer>
    );
};
