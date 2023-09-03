import { uid } from 'uid'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import { getDragonPicture } from '../../utils/getDragonPicture'
import { getCardOutline } from '../../utils/getCardOutline'

import { selectDragon } from '../../store/dragonsSlice'

import RaritySticker from '../RaritySticker'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'

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
	DragonDescriptionWrapper,
	DragonDescription,
} from './Card.styled'

const Card = ({ dragon, toggleModal }) => {
	const dispatch = useDispatch()

	const {
		id,
		name,
		classes,
		size,
		fireType,
		abilities,
		picture,
		description,
		rarity,
	} = dragon

	const setSelectedDragon = () => {
		toggleModal()
		dispatch(selectDragon({ id }))
	}

	return (
		<motion.div
			layoutId={name}
			whileHover={{
				scale: 1.03,
			}}
			whileTap={{
				scale: 0.97,
			}}
		>
			<CardLink onClick={setSelectedDragon}>
				<CardOutline outline={getCardOutline(classes)}>
					<CardWrapper>
						<CardHeader>
							<SizeIcon type={size.type} number={size.number} />
							<DragonName>{name}</DragonName>
							<ClassIconsMini classes={classes} />
						</CardHeader>

						<DragonPicture src={getDragonPicture(name)} />

						<CardInner>
							<Salvo>
								<SalvoIcon src="./images/icons/salvo.svg" />
								<SalvoType>{fireType}</SalvoType>
							</Salvo>

							<Abilities>
								{abilities.map((ability) => (
									<AbilityIcon key={uid()} ability={ability} width={18} />
								))}
							</Abilities>
						</CardInner>

						<DragonDescriptionWrapper>
							<DragonDescription>{description}</DragonDescription>
						</DragonDescriptionWrapper>

						<RaritySticker rarity={rarity} />
					</CardWrapper>
				</CardOutline>
			</CardLink>
		</motion.div>
	)
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
