import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	width: 100%;
	padding: 20px 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #161616;
`

export const MenuButton = styled.button`
	flex: 0;
	width: 30px;
	height: 30px;

	color: #fff;
	border: none;
	background-color: transparent;

	transition: color 100ms linear;

	&:hover,
	&:focus {
		color: #ffffffa6
	}

	@media (width >= 768px) {
		display: none;
	}
`
