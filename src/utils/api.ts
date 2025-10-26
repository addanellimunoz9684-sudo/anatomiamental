import type { Post } from '../types'

const STORAGE_KEY = 'anatomia_posts_v1'

const seed: Post[] = [
  {
    id: '1',
    title: 'Neurodiversidad: ¿Qué es y cuáles son los aspectos que conlleva?',
    author: 'Addanelli Muñoz',
    content: `La neurodiversidad es un concepto que reconoce y celebra las diferentes formas en que el cerebro puede funcionar y procesar la información. Este término enfatiza que las diferencias neurológicas son resultado de variaciones naturales en el cerebro humano.

    Aspectos clave de la neurodiversidad:
    
    1. Diferentes formas de aprendizaje
    2. Procesamiento sensorial único
    3. Diversos estilos de comunicación
    4. Patrones de pensamiento variados
    
    Es fundamental entender que la neurodiversidad no es una condición a "curar", sino una diferencia natural a comprender y apoyar.`,
    excerpt: 'Comprende qué es la neurodiversidad y cómo afecta diferentes aspectos de la vida diaria.',
    category: 'neurodiversidad',
    tags: ['neurodiversidad', 'inclusión', 'desarrollo', 'psicología'],
    createdAt: new Date('2025-01-08').getTime(),
    readingTime: 1,
    coverImage: 'https://images.unsplash.com/photo-1665180702781-a580dbf92b8c'
  },
  {
    id: '2',
    title: 'Resiliencia: ¿Qué es y cómo desarrollarla?',
    author: 'Sascil Garcia',
    content: `La resiliencia es la capacidad de adaptarse y recuperarse ante la adversidad. Es una habilidad que podemos desarrollar y fortalecer a lo largo de nuestra vida.

    Elementos clave para desarrollar la resiliencia:
    
    - Construcción de una red de apoyo sólida
    - Desarrollo de una mentalidad flexible
    - Práctica de autocuidado
    - Establecimiento de metas realistas
    - Aprendizaje de experiencias pasadas
    
    La resiliencia no significa no sentir dolor o dificultad, sino la capacidad de seguir adelante a pesar de los obstáculos.`,
    excerpt: 'Aprende a desarrollar tu capacidad de resiliencia para enfrentar los desafíos de la vida.',
    category: 'desarrollo-personal',
    tags: ['resiliencia', 'desarrollo personal', 'bienestar', 'salud mental'],
    createdAt: new Date('2024-08-02').getTime(),
    readingTime: 1,
    featured: true
  },
  {
    id: '3',
    title: 'Home office: la importancia de la salud mental y balance emocional',
    author: 'Sascil Garcia',
    content: `El trabajo desde casa ha traído nuevos desafíos para nuestra salud mental y equilibrio emocional. Es crucial desarrollar estrategias efectivas para mantener el bienestar mientras trabajamos remotamente.

    Desafíos comunes del home office:
    - Límites difusos entre trabajo y vida personal
    - Aislamiento social
    - Estrés tecnológico
    - Sedentarismo
    
    Estrategias para mantener la salud mental:
    1. Establecer rutinas claras
    2. Crear un espacio de trabajo dedicado
    3. Mantener conexiones sociales virtuales
    4. Practicar ejercicio regular
    5. Implementar pausas activas

    Recuerda que el autocuidado no es un lujo, sino una necesidad fundamental para mantener un rendimiento sostenible.`,
    excerpt: '¿Cómo enfrentar las situaciones que surgen al estar trabajando desde casa? Estrés, ansiedad, depresión, organización del tiempo, etc.',
    category: 'psicologia-laboral',
    tags: ['home office', 'salud mental', 'productividad', 'balance', 'trabajo remoto'],
    createdAt: new Date('2024-08-02').getTime(),
    readingTime: 10,
    featured: true
  }
]

function readStorage(): Post[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed))
      return seed
    }
    return JSON.parse(raw) as Post[]
  } catch (e) {
    console.error('Error reading from storage:', e)
    return seed
  }
}

function writeStorage(posts: Post[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  } catch (e) {
    console.error('Error writing to storage:', e)
  }
}

export function fetchPosts(): Post[] {
  return readStorage()
}

export function createPost(data: Omit<Post, 'id' | 'createdAt'>): Post {
  const posts = readStorage()
  const newPost: Post = {
    ...data,
    id: Date.now().toString(),
    createdAt: Date.now()
  }
  writeStorage([newPost, ...posts])
  return newPost
}