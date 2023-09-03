import styled from 'styled-components'

export const FiltersWrapper = styled.div`
	position: fixed;
	top: ${(props) => (props.isOpen ? '0' : '-60%')};
	left: 10px;
	z-index: 1;

	cursor: pointer;

	width: 90px;
	height: 660px;
	padding: 3px;

	background-image: url('./images/overlays/bookmark.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;

	transition: top 300ms cubic-bezier(0.21, 0.66, 0.68, 0.97);

	&:hover,
	&:focus {
		top: ${(props) => (!props.isOpen && '-58%')};
	}
`

export const FiltersForm = styled.form`
	z-index: 2;

	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`

export const FiltersList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const FiltersItem = styled.li`
	max-width: 70px;

	display: flex;
	flex-direction: column;
	gap: 2px;

	font-size: 13px;

	color: white;
`

export const CustomCheckbox = styled.input`
	cursor: pointer;
`

export const Label = styled.label`
	display: flex;
	align-items: center;

	cursor: pointer;
`
