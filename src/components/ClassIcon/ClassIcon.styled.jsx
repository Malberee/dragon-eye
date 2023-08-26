import styled, { css } from 'styled-components'

export const Icon = styled.img`
	width: ${(props) => (props.countClasses < 2 ? '43%' : '37%')};

	opacity: 70%;
	filter: saturate(70%);
`
