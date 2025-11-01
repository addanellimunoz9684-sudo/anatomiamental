import { useParams } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'

export default function Post() {
  const { id } = useParams<{ id: string }>()
  const { posts } = usePosts()
  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div>Post no encontrado</div>
  }

  return (
    <article className="post-full">
      <header className="post-header">
        <div className="category-tag">{post.category}</div>
        <h1>{post.title}</h1>
        <div className="meta">
          <div className="author">Por {post.author}</div>
          <div className="date">{new Date(post.createdAt).toLocaleDateString()}</div>
          <div className="reading-time">{post.readingTime} minutos de lectura</div>
        </div>
        <div className="tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </header>
      <div className="content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <footer className="post-footer">
        <div className="share-section">
          <h3>Comparte este artículo</h3>
          <div className="share-buttons">
            {/* Aquí puedes agregar botones de compartir en redes sociales */}
          </div>
        </div>
      </footer>
    </article>
  )
}