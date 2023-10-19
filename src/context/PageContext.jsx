import React, { createContext, useState } from 'react'

const PageTypeContext = createContext()

export const PageTypeProvider = ({ children }) => {
  const [pageType, setPageType] = useState('write')

  const togglePageType = () => {
    setPageType((prevPageType) =>
      prevPageType === 'write' ? 'preview' : 'write'
    )
  }

  return (
    <PageTypeContext.Provider value={{ pageType, togglePageType }}>
      {children}
    </PageTypeContext.Provider>
  )
}

export default PageTypeContext
