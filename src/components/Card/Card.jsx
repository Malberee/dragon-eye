import { uid } from 'uid'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import ScaleText from 'react-scale-text'

import { getCardOutline } from '../../utils/getCardOutline'

import { selectDragon } from '../../redux/dragons/slice'

import RaritySticker from '../RaritySticker'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'

import {
  CardLink,
  CardOutline,
  CardWrapper,
  CardHeader,
  DragonNameWrapper,
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
        scale: 1.015,
      }}
    >
      <CardLink onClick={setSelectedDragon}>
        <CardOutline outline={getCardOutline(classes)}>
          <CardWrapper>
            <CardHeader>
              <SizeIcon type={size.type} number={size.number} />
              <DragonNameWrapper>
                <ScaleText minFontSize={24} maxFontSize={32}>
                  <DragonName nameLength={name.length}>{name}</DragonName>
                </ScaleText>
              </DragonNameWrapper>
              <ClassIconsMini classes={classes} />
            </CardHeader>

            <DragonPicture src={picture || './images/unknown.png'} />

            <CardInner>
              <Salvo>
                <SalvoIcon src="./images/icons/salvo.svg" />
                <SalvoType>{fireType}</SalvoType>
              </Salvo>

              <Abilities>
                {abilities.map((ability) => (
                  <AbilityIcon key={uid()} ability={ability} width={20} />
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
