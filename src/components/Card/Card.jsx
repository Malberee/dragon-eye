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
	DragonDescription,
} from './Card.styled'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import { getDragonPicture } from '../../helpers/getDragonPicture'
import { getCardOutline } from '../../helpers/getCardOutline'

const Card = ({ dragon, toggleModal, setDragon, modal }) => {
	const { name, classes, size, fireType, abilities, picture, description } =
		dragon

	return (
		<motion.div layoutId={name}>
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

						<DragonDescription>{description}</DragonDescription>
					</CardWrapper>
				</CardOutline>
			</CardLink>
		</motion.div>
	)
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
