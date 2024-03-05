import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
    content: string;
    onDeleteComment: (Comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.pinimg.com/originals/0a/7c/57/0a7c5738fcdbc90c9334502a6be21307.jpg" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Victor Gomes</strong>
                        <time title="26 de novembro as 22:14h" dateTime="2023-26-11 22:14:30">Cerca de 1h atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}