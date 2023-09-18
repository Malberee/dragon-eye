import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

import { LoaderWrapper } from './Loader.styled'

const Loader = () => (
  <LoaderWrapper>
    <ThreeDots color="#9455d3" />
  </LoaderWrapper>
)

export default Loader
