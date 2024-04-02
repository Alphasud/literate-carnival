import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchOrder() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
