import type { Post } from '../types'
import { Link } from 'react-router-dom'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      {post.coverImage && (
        <div className="post-image">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}
      <div className="post-content">
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <div className="meta">
          {post.author} • {new Date(post.createdAt).toLocaleDateString()} • 
          {post.readingTime} min de lectura
        </div>
        <p className="excerpt">{post.excerpt}</p>
        <div className="card-footer">
          <div className="tags">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <Link to={`/post/${post.id}`} className="read-more">
            {post.featured ? '¡Quiero saber más!' : 'Leer más'}
          </Link>
        </div>
      </div>
    </article>
  )
}