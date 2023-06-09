import Noneed from '@/components/noneed'
import MetaSeo from '@/metaSeo/metaSeo'
import React from 'react'

type Props = {}

const Jobs = (props: Props) => {
  return (
    <>
    <MetaSeo title="Jobs | Linkedin" />
    <Noneed title="Jobs" />
    </>
  )
}

export default Jobs