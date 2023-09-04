import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	grid-area: header;

	width: 100%;
	padding: 20px 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #161616;

	/* box-shadow: 0px 10px 28px -14px rgba(0, 0, 0, 0.75); */
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
