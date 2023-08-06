import { useState } from 'react'
import { nanoid } from 'nanoid'
import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'
import {
	CardOutline,
	CardWrapper,
	CardBackWrapper,
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
} from '../Card/Card.styled'
import { ModalOverlay, ModalWrapper } from './Modal.styled'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import ClassIcon from '../ClassIcon'

const Modal = ({ dragon, toggleModal }) => {
	const [isFlipped, setFlipped] = useState(false)

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

	const { name, classes, size, fireType, abilities, picture, description } =
		dragon
	return (
		<ModalOverlay onClick={toggleModal}>
			<ModalWrapper onClick={(e) => e.stopPropagation()}>
				<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} tiltReverse={true}>
					<ReactCardFlip
						isFlipped={isFlipped}
						flipDirection="horizontal"
						cardStyles={{
							front: {
								transformStyle: 'none',
							},
							back: {
								transformStyle: 'none',
							},
						}}
					>
						<CardOutline
							classes={getCardOutline(classes)}
							onClick={() => setFlipped((x) => !x)}
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

						<CardOutline
							classes={getCardOutline(classes)}
							onClick={() => setFlipped((x) => !x)}
							style={{ transform: 'scaleX(-1)' }}
						>
							<CardBackWrapper>
								<ClassIcon classes={classes} countClasses={classes.length} />
								<CardBackIconsWrapper>
									<ClassIconsMini
										classes={classes}
										countClasses={classes.length}
									/>
									<ClassIconsMini
										classes={classes}
										countClasses={classes.length}
									/>
									<ClassIconsMini
										classes={classes}
										countClasses={classes.length}
									/>
									<ClassIconsMini
										classes={classes}
										countClasses={classes.length}
									/>
								</CardBackIconsWrapper>
							</CardBackWrapper>
						</CardOutline>
					</ReactCardFlip>
				</Tilt>
			</ModalWrapper>
		</ModalOverlay>
	)
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
