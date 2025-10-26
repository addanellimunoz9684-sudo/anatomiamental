export type PsychologyCategory =
  | 'salud-mental'
  | 'autoayuda'
  | 'psicologia-laboral'
  | 'neuropsicologia'
  | 'neurodiversidad'
  | 'bienestar-emocional'
  | 'terapia'
  | 'desarrollo-personal'

export type ServiceType =
  | 'terapia-individual'
  | 'asesoria-psicologica'
  | 'talleres'
  | 'charlas-educativas'

export interface Post {
  id: string
  title: string
  author: string
  content: string
  excerpt: string
  category: PsychologyCategory
  tags: string[]
  createdAt: number
  imageUrl?: string
  readingTime: number
  featured?: boolean
  coverImage?: string
}

export interface Contact {
  name: string
  email: string
  message: string
  service?: ServiceType
}

export interface Author {
  id: string
  name: string
  role: string
  bio: string
  imageUrl?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
    tiktok?: string
  }
}