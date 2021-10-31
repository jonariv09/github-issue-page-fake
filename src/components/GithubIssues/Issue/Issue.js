import React, { useEffect } from 'react'

export const Issue = (title, comment) => {

  useEffect(() => {
    console.log(title, comment);
  }, [])

  return (
    <>
    </>
  )
}
