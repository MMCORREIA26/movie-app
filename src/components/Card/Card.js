import styles from './Card.module.css'
import Link from 'next/link'

export default function Card({ movie }) {
  return (

    <div className={styles.card}>
      <Link key={movie.id} href={`film/${movie.id}`}>
        <a>

          <div className={styles.image}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>

          <div className={styles.titulo}>
            <h3>{movie.title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};