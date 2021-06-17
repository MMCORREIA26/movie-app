import Link from 'next/link'
import Head from 'next/head'
import styles from './Home.module.css' 
import Card from '../components/Card/Card'
import Welcome from '../components/Welcome/Welcome'
export default function Home({ movies }) {

  console.log( movies)

  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.ico"/>
    
      <title>TMDB</title>

    </Head>
    
    <Welcome/>
    <div className={styles.container}>

      { movies && movies.map(movie => {
        return (
          <Card movie={movie}/>
        )
      })}
      </div>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=394021c6bc404ae5a383cbec625da826&language=en-US&page=1');
  const movies = await res.json();

  return {
    props: {
      movies:movies.results
    },
    revalidate: 10
  }
}