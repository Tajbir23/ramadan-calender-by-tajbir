import Documentation from '@/components/Documentation'
import RamadanDataContext from '@/components/RamadanDataContext'
import { useRouter } from 'next/router'
import React from 'react'

const docs = () => {
    const {name, email, uuid} = useRouter().query
    console.log(name, email, uuid)
  return (
    <div>
      <Documentation name={name} email={email} uuid={uuid} />
    </div>
  )
}

export default docs