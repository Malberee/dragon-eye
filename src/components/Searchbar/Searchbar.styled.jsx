import styled from 'styled-components'

export const SearchbarWrapper = styled.div`
	width: 100%;
`

export const Input = styled.input`
	width: 300px;
	padding: 10px;
	border: transparent;
	border: 2px solid #242424;
	border-radius: 20px;

	color: white;
	background-color: transparent;

	font-size: 12px;
	font-weight: 500;

	transition: border-color 150ms linear;

	&::placeholder {
		color: #242424;
	}

	&:focus,
	&:hover {
		outline: transparent;
		border-color: #3d3d3d;
	}
`

export const SearchIconWrapper = styled.div`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);

	width: 24px;
	height: 24px;
`

export const SearchbarContainer = styled.div`
	position: relative;
	display: inline-block;
	width: auto;

	color: #242424;
`
