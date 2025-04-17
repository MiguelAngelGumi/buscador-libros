export interface Libro {
    id: string
    volumeInfo: {
      title: string
      authors?: string[]
      imageLinks?: {
        thumbnail: string
      }
    }
  }
  