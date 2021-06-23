import styles from './Film.module.css'
import Head from 'next/head'

export default function Film({ movie }) {


    return (
<>
        <Head><title>{movie.original_title}</title></Head>

   
        <div className={styles.fundo}>

            <div className={styles.back}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            </div>

            <div className={styles.container}>

                <div className={styles.poster}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                </div>

                <div className={styles.info}>

                    <h2>{movie.original_title}</h2>

                    <div className={styles.conteudo}>

                        <div className={styles.data}>
                            {movie.release_date}
                        </div>
                        <div className={styles.vote}>
                            <h4>{movie.vote_average}</h4>
                        </div>
                        <h3>sinopse</h3>
                        <h5>{movie.overview}</h5>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )

}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const code = params.slug;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${code}?api_key=394021c6bc404ae5a383cbec625da826&language=en-US&page=1/`)
        ;

    const movie = await res.json();

    return {
        props: {
            movie
        },
        revalidate: 10
    }
}