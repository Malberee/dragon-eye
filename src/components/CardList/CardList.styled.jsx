import styled from 'styled-components'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export const SimplebarStyles = styled(SimpleBar)`
  height: 100%;

  .simplebar-scrollbar {
    background: #333336;
    border-radius: 10px;
    max-width: 5px;
  }

  .simplebar-track {
    width: 5px;
    border-radius: 10px;
    margin: 20px 0;

    background: #27272a;
  }

  .simplebar-scrollbar::before {
    display: none;
  }
`

export const CardListWrapper = styled.ul`
	height: 100%;
	width: 100%;
	padding: 20px 40px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 16px;
`
