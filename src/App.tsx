import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/originals/0a/7c/57/0a7c5738fcdbc90c9334502a6be21307.jpg',
      name: 'Victor Gomes',
      role: 'CTO DesirExprex'
    }, 
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-28 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://th.bing.com/th/id/R.a3dc372144e1928121bf386360ac4db8?rik=Xh1fZ1OZF8gIQQ&riu=http%3a%2f%2fphantanews.de%2fwp%2fwp-content%2fuploads%2f2011%2f01%2fHenryCavill.jpg&ehk=HqiysHyF%2bfV2GK%2b9z2VVgXgnAiLbTFpfVYmNmYhHTdw%3d&risl=&pid=ImgRaw&r=0',
      name: 'Gabriel Braga',
      role: 'Socio DesirExprex',
    }, 
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-27 20:00:00'),
  },
];



export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
          return (
              <Post 
                key={post.id}
                post={post}
              />
          )
          })}
        </main>
      </div>
    </div>
  )
}
