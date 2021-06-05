import React from 'react'
import './SearchBar.css'

interface SearchBarProps {
  onInputChange: (input: string) => void
}

const SearchBar = ({onInputChange}: SearchBarProps) => {
  return (
    <input
      onChange={(e) => onInputChange(e.target.value)} 
      type="search" 
      className="search"
      placeholder="Search Pokemon" 
    />

  )
}

export default SearchBar
