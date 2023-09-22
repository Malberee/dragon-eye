import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;

  height: 100vh;
  width: 100%;

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  background-color: #0000005c;

  transition: opacity 150ms ease-out;

  @media (width >= 768px) {
    display: none;
  }
`

export const SidebarWrapper = styled(motion.aside)`
	position: absolute;
	top: 0;
	left: ${(props) => (props.isOpen ? 0 : '-100%')};
	z-index: 11;

	padding: 10px;
	height: 100vh;
	min-width: 150px;

	overflow: auto;

	color: white;
	/* background-color: #161616; */

	transition: left 150ms ease-out;

	@media (width >= 768px) {
		display: block;
		position: relative;
		left: -15px;
		height: 100%;
	}
`

export const FiltersList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 25px;
`

export const FiltersItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 5px;

	font-size: 15px;

	color: white;

	& ul {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
`
