import React from 'react'
import { nanoid } from 'nanoid'
import {
	CardOutline,
	CardWrapper,
	CardHeader,
	DragonName,
	DragonPicture,
	CardInner,
	Salvo,
	SalvoIcon,
	SalvoType,
	Abilities,
	DragonDescription,
} from './Card.styled'
import SizeIcon from '../SizeIcon'
import ClassIcons from '../ClassIcons'
import AbilityIcon from '../AbilityIcon'

const Card = ({
	dragon: { name, classes, size, fireType, abilities, picture, description },
}) => {
	const getCardOutline = (classes) => {
		if (classes.length > 1) {
			return `${classes[0]}_${classes[1]}`
		}

		return classes
	}

	const getDragonPicture = (name) => {
		const formattedName = name.split(' ')
		formattedName[0] = formattedName[0].toLowerCase()

		return `../../src/assets/dragons/${formattedName.join('')}.png`
	}

	return (
		<CardOutline classes={getCardOutline(classes)}>
			<CardWrapper>
				<CardHeader>
					<SizeIcon type={size.type} number={size.number} />
					<DragonName>{name}</DragonName>
					<ClassIcons classes={classes} />
				</CardHeader>

				<DragonPicture src={getDragonPicture(name)} />

				<CardInner>
					<Salvo>
						<SalvoIcon src="../../src/assets/icons/salvo.svg" />
						<SalvoType>{fireType}</SalvoType>
					</Salvo>

					<Abilities>
						{abilities.map((ability) => (
							<AbilityIcon key={nanoid()} ability={ability} />
						))}
					</Abilities>
				</CardInner>

				<DragonDescription>{description}</DragonDescription>
			</CardWrapper>
		</CardOutline>
	)
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
