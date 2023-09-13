import React from 'react'
import { AuthorsWrapper, Text, Link } from './Authors.styled'

const Authors = () => (
  <AuthorsWrapper>
    <Text>
      Thanks to{' '}
      <Link href="https://www.instagram.com/statikinn/" target="_blank" >
        Statikin
      </Link>{' '}
      for providing the sources
    </Text>
    <Text>
      Made by{' '}
      <Link href="https://github.com/Malberee" target="_blank">
        Malberee
      </Link>
    </Text>
  </AuthorsWrapper>
)

export default Authors
