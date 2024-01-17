import { ThumbsUp, Trash } from '@phosphor-icons/react'

import styles from './Comment.module.css'

export function Comment () {
    return (
        <div className={styles.comment}>
            <img 
                src="https://avatars.githubusercontent.com/u/16918664?v=4"
                alt="user image" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Leão</strong>
                            <time title='17 de janeiro as 09:06' dateTime='2024-17-01 09:06:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>Muito Bom, parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
} 