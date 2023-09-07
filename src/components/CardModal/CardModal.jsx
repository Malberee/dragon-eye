import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Tooltip } from 'react-tooltip'
import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'
import { uid } from 'uid'

import { getDragonPicture } from '../../utils/getDragonPicture'
import { getCardOutline } from '../../utils/getCardOutline'

import RaritySticker from '../RaritySticker'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import ClassIcon from '../ClassIcon'
import ClassIconsMiniBack from '../ClassIconsMiniBack/ClassIconsMiniBack'

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
	DragonDescriptionWrapper,
} from '../Card/Card.styled'
import {
	CardBackWrapper,
	CardBackClassIconWrapper,
	TooltipLink,
} from './CardModal.styled'

const CardModal = (props, ref) => {
	const dragon = useSelector((state) => state.dragons.selectedDragon)

	const [isFlipped, setIsFlipped] = useState(false)

	useImperativeHandle(ref, () => ({
		setIsFlipped: (value) => setIsFlipped(value),
		isFlipped,
	}))

	const {
		name,
		classes,
		size,
		fireType,
		abilities,
		picture,
		description,
		rarity,
	} = dragon

	return (
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
					outline={getCardOutline(classes)}
					onClick={() => setIsFlipped((x) => !x)}
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
								<SalvoIcon src="./images/icons/salvo.svg" />
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
										key={uid()}
										data-tooltip-id="my-tooltip"
										data-tooltip-content={ability}
									>
										<AbilityIcon key={uid()} ability={ability} width={18} />
									</TooltipLink>
								))}
							</Abilities>
						</CardInner>
						<TooltipLink
							data-tooltip-id="my-tooltip"
							data-tooltip-content={description}
						>
							<DragonDescriptionWrapper>
								<DragonDescription>{description}</DragonDescription>
							</DragonDescriptionWrapper>
						</TooltipLink>
						<RaritySticker rarity={rarity} />
					</CardWrapper>
				</CardOutline>
				
				<CardOutline
					outline={getCardOutline(classes)}
					onClick={() => setIsFlipped((x) => !x)}
					style={{ transform: 'scaleX(-1)' }}
				>
					<CardBackWrapper countClasses={classes.length}>
						<CardBackClassIconWrapper>
							{classes.map((dragonClass) => (
								<ClassIcon
									key={uid()}
									dragonClass={dragonClass}
									countClasses={classes.length}
								/>
							))}
						</CardBackClassIconWrapper>
						<ClassIconsMiniBack classes={classes} />
					</CardBackWrapper>
				</CardOutline>
			</ReactCardFlip>
			<Tooltip
				id="my-tooltip"
				style={{
					fontFamily: 'Roboto',
					textTransform: 'none',
					height: 'auto',
					maxWidth: '400px',
					whiteSpace: 'pre-line',
					textAlign: 'left',
				}}
			/>
		</Tilt>
	)
}

export default forwardRef(CardModal)
