import { useState } from 'react'
import { nanoid } from 'nanoid'
import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'
import { Tooltip } from 'react-tooltip'
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
	TooltipLink,
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
									<TooltipLink
										data-tooltip-id="my-tooltip"
										data-tooltip-content={`Type: ${size.type}\n\t Size: ${size.number}`}
									>
										<SizeIcon type={size.type} number={size.number} />
									</TooltipLink>
									<TooltipLink
										data-tooltip-id="my-tooltip"
										data-tooltip-content={name}
									>
										<DragonName>{name}</DragonName>
									</TooltipLink>
									<TooltipLink
										data-tooltip-id="my-tooltip"
										data-tooltip-content={
											classes.length > 1
												? `Classes: ${classes.join(' and ')}`
												: `Class: ${classes[0]}`
										}
									>
										<ClassIconsMini classes={classes} />
									</TooltipLink>
								</CardHeader>

								<DragonPicture src={getDragonPicture(name)} />

								<CardInner>
									<Salvo>
										<SalvoIcon src="/src/images/icons/salvo.svg" />
										<TooltipLink
											data-tooltip-id="my-tooltip"
											data-tooltip-content={fireType}
										>
											<SalvoType>{fireType}</SalvoType>
										</TooltipLink>
									</Salvo>

									<Abilities>
										{abilities.map((ability) => (
											<TooltipLink
												data-tooltip-id="my-tooltip"
												data-tooltip-content={ability}
											>
												<AbilityIcon key={nanoid()} ability={ability} />
											</TooltipLink>
										))}
									</Abilities>
								</CardInner>

								<TooltipLink
									data-tooltip-id="my-tooltip"
									data-tooltip-content={description}
								>
									<DragonDescription>{description}</DragonDescription>
								</TooltipLink>
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
			<Tooltip
				id="my-tooltip"
				style={{
					fontFamily: 'Roboto',
					textTransform: 'none',
					height: 'auto',
					maxWidth: '400px',
					whiteSpace: 'pre-line',
					textAlign: 'left'
				}}
			/>
		</ModalOverlay>
	)
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
