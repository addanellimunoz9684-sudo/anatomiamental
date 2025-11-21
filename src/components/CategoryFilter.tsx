import * as api from '../utils/api'
import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

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

export default function CategoryFilter() {
  const posts = api.fetchPosts()
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('category') ?? ''

  const counts = useMemo(() => {
    return posts.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1
      return acc
    }, {})
  }, [posts])

  function toggle(cat: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (params.get('category') === cat) {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  return (
    <div className="category-filter" role="toolbar" aria-label="Filtrar por categoría">
      {Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([cat, count]) => (
          <button
            key={cat}
            className={`chip ${active === cat ? 'active' : ''}`}
            onClick={() => toggle(cat)}
            aria-pressed={active === cat}
          >
            <span className="chip-label">{LABELS[cat] ?? cat}</span>
            <span className="chip-count">{count}</span>
          </button>
        ))}
    </div>
  )
}
