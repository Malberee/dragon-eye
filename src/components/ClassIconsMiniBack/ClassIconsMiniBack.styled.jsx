import styled, { css } from 'styled-components'

export const IconsWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
`

export const Icon = styled.img`
	position: absolute;
	width: 40px;
	height: 40px;

	filter: saturate(0) brightness(0);
	opacity: 30%;
	/* transform: scaleX(-1); */

	:nth-child(1) {
		top: 40px;
		left: 40px;
	}
	:nth-child(2) {
		top: 40px;
		right: 40px;
	}
	:nth-child(3) {
		bottom: 40px;
		left: 40px;
	}
	:nth-child(4) {
		bottom: 40px;
		right: 40px;
	}
`
