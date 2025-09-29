export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}
