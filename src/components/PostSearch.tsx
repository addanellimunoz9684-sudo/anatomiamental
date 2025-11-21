import { useSearchParams } from 'react-router-dom'

export default function PostSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q') ?? ''

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    if (v) {
      searchParams.set('q', v)
      setSearchParams(searchParams)
    } else {
      searchParams.delete('q')
      setSearchParams(searchParams)
    }
  }

  return (
    <div className="post-search">
      <label htmlFor="post-search-input" className="sr-only">Buscar artículos</label>
      <input
        id="post-search-input"
        className="post-search-input"
        placeholder="Buscar artículos por título, resumen o etiqueta..."
        value={q}
        onChange={onChange}
        aria-label="Buscar artículos"
      />
    </div>
  )
}
