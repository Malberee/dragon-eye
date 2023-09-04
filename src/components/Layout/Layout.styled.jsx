import styled from 'styled-components'

export const LayoutWrapper = styled.div`
	min-height: 100%;
	display: grid;
	grid-template: minmax(100px auto) 1fr minmax(70px, auto);
	grid-template-areas: 'header' 'main';
`

