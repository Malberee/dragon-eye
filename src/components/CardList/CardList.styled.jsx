import styled from 'styled-components'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export const SimplebarStyles = styled(SimpleBar)`
	height: 100%;

	.simplebar-scrollbar {
		background: #414141;
		border-radius: 10px;
		max-width: 5px;
	}

	.simplebar-track {
		width: 5px;
		border-radius: 10px;
		margin: 20px 0;

		background: #282828;
	}

	.simplebar-scrollbar::before {
		display: none;
	}
`

export const CardListWrapper = styled.div`
	height: 100%;
	width: 100%;
	/* margin: 20px 0; */
	padding: 20px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 16px;

	/* overflow: auto; */
`

export const NotFoundText = styled.p`
	color: white;
`
