import React from 'react'
import PropTypes from 'prop-types'
import { ContainerWrapper } from './Container.styled'

const Container = ({ children }) => (
	<ContainerWrapper>{children}</ContainerWrapper>
)

Container.propTypes = {}

Container.defaultProps = {}

export default Container
