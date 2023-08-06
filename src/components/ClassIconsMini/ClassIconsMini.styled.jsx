import styled, { css } from 'styled-components'

export const IconsWrapper = styled.div`
	position: relative;

	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
`

export const Icon = styled.img`
	${(props) =>
		props.countClasses > 1
			? css`
					position: absolute;
					top: 50%;
					left: 50%;

					&:first-child {
						transform: translate(-75%, -75%);
					}

					&:last-child {
						transform: translate(-25%, -25%);
					}

					width: 25px;
			  `
			: css`
					width: 40px;
			  `}
`
