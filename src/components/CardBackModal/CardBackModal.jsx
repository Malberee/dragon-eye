import React from 'react'
import { nanoid } from 'nanoid'

import ClassIcon from '../ClassIcon'
import { getCardOutline } from '../../utils/getCardOutline'
import ClassIconsMiniBack from '../ClassIconsMiniBack/ClassIconsMiniBack'

import {
	CardOutline
} from '../Card/Card.styled'

import {
	CardBackWrapper,
	CardBackClassIconWrapper,
} from './CardBackModal.styled'

const CardBackModal = ({ dragon }) => {
	const { classes } = dragon

	return (
		<CardOutline
			outline={getCardOutline(classes)}
			onClick={() => setIsFlipped((x) => !x)}
			// style={{ transform: 'scaleX(-1)' }}
		>
			<CardBackWrapper countClasses={classes.length}>
				<CardBackClassIconWrapper>
					{classes.map((dragonClass) => (
						<ClassIcon
							key={nanoid()}
							dragonClass={dragonClass}
							countClasses={classes.length}
						/>
					))}
				</CardBackClassIconWrapper>
				<ClassIconsMiniBack classes={classes} />
			</CardBackWrapper>
		</CardOutline>
	)
}

export default CardBackModal
