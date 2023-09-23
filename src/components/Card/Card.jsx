import { useEffect, useState } from 'react'
import { uid } from 'uid'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import ScaleText from 'react-scale-text'
import { useInView } from 'react-intersection-observer'

import { useCardColor } from '../../hooks/useCardColor'

import { selectDragon } from '../../redux/dragons/slice'

import RaritySticker from '../RaritySticker'
import SizeIcon from '../SizeIcon'
import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'

import {
  CardSkeleton,
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

const Card = ({ dragon, openModal }) => {
  const [overlayIsLoaded, setOverlayIsLoaded] = useState(false)
  const [classOverlayIsLoaded, setClassOverlayIsLoaded] = useState(false)
  const dispatch = useDispatch()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

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

  const cardColor = useCardColor(classes)

  const setSelectedDragon = () => {
    openModal()
    dispatch(selectDragon({ id }))
  }

  useEffect(() => {
    const classImg = new Image()
    classImg.src = picture
    classImg.onload = () => setOverlayIsLoaded(true)

    const overlayImg = new Image()
    overlayImg.src = `./images/overlays/${cardColor}.jpg`
    overlayImg.onload = () => setClassOverlayIsLoaded(true)
  }, [cardColor])

  return (
    <li ref={ref}>
      {inView ? (
        <motion.div
          layoutId={name}
          whileHover={{
            scale: 1.015,
          }}
        >
          <CardLink onClick={setSelectedDragon}>
            <CardOutline
              color={cardColor}
              style={{
                backgroundImage: classOverlayIsLoaded
                  ? `url(./images/overlays/${cardColor}.jpg)`
                  : `url(./images/overlays/low/${cardColor}.jpg)`,
              }}
            >
              <CardWrapper
                style={{
                  backgroundImage: overlayIsLoaded
                    ? 'url(./images/overlays/overlay.jpg)'
                    : 'url(./images/overlays/low/overlay.jpg)',
                }}
              >
                <CardHeader>
                  <SizeIcon type={size.type} number={size.number} />
                  <DragonNameWrapper>
                    <ScaleText minFontSize={24} maxFontSize={32}>
                      <DragonName nameLength={name.length}>{name}</DragonName>
                    </ScaleText>
                  </DragonNameWrapper>
                  <ClassIconsMini classes={classes} />
                </CardHeader>

                <DragonPicture
                  src={picture || './images/unknown.png'}
                  alt="dragon picture"
                />

                <CardInner>
                  <Salvo>
                    <SalvoIcon
                      src="./images/icons/salvo.svg"
                      alt="salvo icon"
                    />
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
      ) : (
        <CardSkeleton />
      )}
    </li>
  )
}

export default Card
