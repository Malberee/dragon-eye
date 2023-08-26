import styled from 'styled-components'

export const AuthorsWrapper = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;

	padding: 10px;
	z-index: 4;

	font-family: 'Roboto';
	font-size: 12px;
	text-align: right;
`

export const MadeBy = styled.p`
	margin-bottom: 8px;
	color: white;
	text-shadow: 0px 1px 4px #000000;
`

export const Thanks = styled.p`
	color: white;
	text-shadow: 0px 1px 4px #000000;
`

export const Link = styled.a`
	color: #f6c06a;
	text-decoration: none;

    transition: color 100ms linear;

	&:hover,
	&:focus {
		color: #5dbbcc;
	}
`
