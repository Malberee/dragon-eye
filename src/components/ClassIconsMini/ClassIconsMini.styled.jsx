import styled, { css } from 'styled-components'

export const IconsWrapper = styled.div`
	position: relative;

	width: 60px;
	height: 60px;
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

					width: 45px;
			  `
			: css`
					width: 60px;
			  `}
`
