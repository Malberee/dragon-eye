import { useState } from 'react'
import { nanoid } from 'nanoid'
import {
	CardLink,
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
	CardBackIconsWrapper,
} from './Card.styled'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import ClassIcon from '../ClassIcon'

const Card = ({
	dragon,
	toggleModal,
	setDragon,
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

		return `/src/images/dragons/${formattedName.join('')}.png`
	}

	const { name, classes, size, fireType, abilities, picture, description } = dragon

	return (
		<CardLink
			onClick={() => {
				toggleModal()
				setDragon(dragon)
			}}
		>
				<CardOutline
					classes={getCardOutline(classes)}
				>
					<CardWrapper>
						<CardHeader>
							<SizeIcon type={size.type} number={size.number} />
							<DragonName>{name}</DragonName>
							<ClassIconsMini classes={classes} />
						</CardHeader>

						<DragonPicture src={getDragonPicture(name)} />

						<CardInner>
							<Salvo>
								<SalvoIcon src="/src/images/icons/salvo.svg" />
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
		</CardLink>
	)
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
