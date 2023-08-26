import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
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
import RaritySticker from '../RaritySticker'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import { getDragonPicture } from '../../utils/getDragonPicture'
import { getCardOutline } from '../../utils/getCardOutline'

const Card = ({ dragon, toggleModal, setDragon, modal }) => {
	const { name, classes, size, fireType, abilities, picture, description, rarity } =
		dragon

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
			<CardLink
				onClick={() => {
					toggleModal()
					setDragon(dragon)
				}}
			>
				<CardOutline classes={getCardOutline(classes)}>
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
									<AbilityIcon key={nanoid()} ability={ability} />
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
