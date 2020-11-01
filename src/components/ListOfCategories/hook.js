import { useEffect, useState } from 'react'

export const useCategories = () => {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      const response = await window.fetch(
        'https://petgram-server-sg.vercel.app/categories'
        )
        const data = await response.json()
        setCategories(data)
        setLoading(false)
    }
  
    fetchCategories()
  }, [])

  return {
    categories,
    loading
  }
}
