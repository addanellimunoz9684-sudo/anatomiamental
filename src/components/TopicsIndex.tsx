import { Link } from 'react-router-dom'
import * as api from '../utils/api'
import { useState, useMemo } from 'react'
import type { Post } from '../types'

const LABELS: Record<string, string> = {
  'salud-mental': 'Salud mental',
  autoayuda: 'Autoayuda',
  'psicologia-laboral': 'Psicología laboral',
  neuropsicologia: 'Neuropsicología',
  neurodiversidad: 'Neurodiversidad',
  'bienestar-emocional': 'Bienestar emocional',
  terapia: 'Terapia',
  'desarrollo-personal': 'Desarrollo personal'
}

export default function TopicsIndex() {
  const posts: Post[] = api.fetchPosts()
  const [query, setQuery] = useState('')

  const counts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1
    return acc
  }, {})

  const entries = useMemo(
    () => Object.entries(counts).sort((a, b) => b[1] - a[1]),
    [posts]
  )

  const filtered = useMemo(() => {
    if (!query) return entries
    const q = query.toLowerCase()
    return entries.filter(([category]) => {
      const label = (LABELS[category] ?? category).toLowerCase()
      return label.includes(q) || category.toLowerCase().includes(q)
    })
  }, [entries, query])

  return (
    <aside className="topics-index" aria-labelledby="topics-title">
      <div className="topics-header">
        <h2 id="topics-title">Índice de temas</h2>
        <input
          aria-label="Buscar tema"
          className="topics-search"
          placeholder="Buscar tema..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {entries.length === 0 ? (
        <p>No hay temas disponibles aún.</p>
      ) : (
        <ul className="topics-list">
          {filtered.map(([category, count]) => (
            <li key={category} className="topic-item">
              <Link to={`/?category=${encodeURIComponent(category)}`} className="topic-link">
                <span className="topic-left">
                  <span className="topic-icon" aria-hidden>
                    {ICON_MAP[category] ?? '📚'}
                  </span>
                  <span className="topic-name">{LABELS[category] ?? category}</span>
                </span>
                <span className="topic-count">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="topics-footer">
        <Link to="/" className="view-all">Ver todas las publicaciones</Link>
      </div>
    </aside>
  )
}

const ICON_MAP: Record<string, string> = {
  'salud-mental': '🧠',
  autoayuda: '✨',
  'psicologia-laboral': '💼',
  neuropsicologia: '🔬',
  neurodiversidad: '🌈',
  'bienestar-emocional': '💚',
  terapia: '🤝',
  'desarrollo-personal': '🌱'
}
