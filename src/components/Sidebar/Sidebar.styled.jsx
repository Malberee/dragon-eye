import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Backdrop = styled(motion.div)`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};

	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	height: 100%;
	width: 100%;

	background-color: #0000005c;
`

export const SidebarWrapper = styled(motion.aside)`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};

	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	padding: 10px;
	height: 100%;
	min-width: 150px;

	grid-column: 2 / 3;

	color: white;
	background-color: #161616;

	@media (width >= 768px) {
		display: block;
		position: relative;
		top: -30px;
		left: -15px;
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
`

export const Label = styled.label`
	border-radius: 3px;

	display: flex;
	align-items: center;
	gap: 5px;

	cursor: pointer;

	margin-left: 1.2em;
`

export const CustomCheckbox = styled.span`
	position: absolute;
	width: 1em;
	height: 1em;
	border-radius: 5px;
	margin-left: -1.2em;

	border: 2px solid #242424;

	transition: background-color 100ms linear, border-color 100ms linear;
`

export const Checkbox = styled.input`
	position: absolute;

	appearance: none;

	&:checked + ${CustomCheckbox} {
		background-image: url('./images/icons/checkmark.svg');
		background-size: contain;
		background-color: #389ece;
		border: solid 1px #389ece;
		gap: 10px;
	}
`
