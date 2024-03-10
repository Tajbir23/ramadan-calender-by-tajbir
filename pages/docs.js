import { useRouter } from 'next/router'
import React from 'react'

const docs = () => {
    const {name, email, uid} = useRouter().query
    console.log(name, email, uid)
  return (
    <div>docs</div>
  )
}

export default docs