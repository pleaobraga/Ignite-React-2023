import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/16918664?v=4"
                        alt="user image"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Leão</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='17 de janeiro as 09:06' dateTime='2024-17-01 09:06:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>   
                <p>
                    <a href=''>#novoprojeto{" "}</a>
                    <a href=''>#nlw{" "}</a>
                    <a href=''>#rocketseat</a>
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea  placeholder='Deixe um comentario'/>

                <footer>
                    <button type='submit' >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
} 