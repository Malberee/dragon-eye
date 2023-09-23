import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Tooltip } from 'react-tooltip'
import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'
import { uid } from 'uid'
import ScaleText from 'react-scale-text'

import { useCardColor } from '../../hooks/useCardColor'

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
  DragonNameWrapper,
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

const CardModal = (_, ref) => {
  const [overlayIsLoaded, setOverlayIsLoaded] = useState(false)
  const [backOverlayIsLoaded, setBackOverlayIsLoaded] = useState(false)
  const [classOverlayIsLoaded, setClassOverlayIsLoaded] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const dragon = useSelector((state) => state.dragons.selectedDragon)

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

  const cardColor = useCardColor(classes)

  let backOverlayImg =
    classes.length > 1
      ? './images/overlays/backOverlayHybrid.jpg'
      : './images/overlays/backOverlay.jpg'
  let backOverlayImgLow =
    classes.length > 1
      ? './images/overlays/low/backOverlayHybrid.jpg'
      : './images/overlays/low/backOverlay.jpg'

  useEffect(() => {
    const classImg = new Image()
    classImg.src = picture
    classImg.onload = () => setClassOverlayIsLoaded(true)

    const overlayImg = new Image()
    overlayImg.src = `./images/overlays/overlay.jpg`
    overlayImg.onload = () => setOverlayIsLoaded(true)

    const backOverlayImg = new Image()
    backOverlayImg.src = backOverlayImg
    backOverlayImg.onload = () => setBackOverlayIsLoaded(true)
  }, [cardColor])

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
          color={cardColor}
          onClick={() => setIsFlipped((x) => !x)}
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
              <TooltipLink
                onClick={(e) => e.stopPropagation()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Type: ${size.type}\n\t Size: ${size.number}`}
              >
                <SizeIcon type={size.type} number={size.number} />
              </TooltipLink>
              <TooltipLink
                onClick={(e) => e.stopPropagation()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={name}
              >
                <DragonNameWrapper>
                  <ScaleText minFontSize={24} maxFontSize={32}>
                    <DragonName nameLength={name.length}>{name}</DragonName>
                  </ScaleText>
                </DragonNameWrapper>
              </TooltipLink>
              <TooltipLink
                onClick={(e) => e.stopPropagation()}
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

            <DragonPicture
              src={picture || './images/unknown.png'}
              alt="dragon picture"
            />

            <CardInner>
              <Salvo>
                <SalvoIcon src="./images/icons/salvo.svg" alt="salvo icon" />
                <TooltipLink
                  onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      ability.charAt(0).toUpperCase() + ability.slice(1)
                    }
                  >
                    <AbilityIcon key={uid()} ability={ability} width={20} />
                  </TooltipLink>
                ))}
              </Abilities>
            </CardInner>
            <TooltipLink
              onClick={(e) => e.stopPropagation()}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={description}
            >
              <DragonDescriptionWrapper>
                <DragonDescription>{description}</DragonDescription>
              </DragonDescriptionWrapper>
            </TooltipLink>

            <TooltipLink
              onClick={(e) => e.stopPropagation()}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`Rarity: ${rarity}`}
            >
              <RaritySticker rarity={rarity} withLink={true} />
            </TooltipLink>
          </CardWrapper>
        </CardOutline>

        <CardOutline
          color={cardColor}
          onClick={() => setIsFlipped((x) => !x)}
          style={{
            transform: 'scaleX(-1)',
            backgroundImage: classOverlayIsLoaded
              ? `url(./images/overlays/${cardColor}.jpg)`
              : `url(./images/overlays/low/${cardColor}.jpg)`,
          }}
        >
          <CardBackWrapper
            countClasses={classes.length}
            style={{
              backgroundImage: backOverlayIsLoaded
                ? `url(${backOverlayImg})`
                : `url(${backOverlayImgLow})`,
            }}
          >
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
          height: 'auto',
          maxWidth: '350px',
          whiteSpace: 'pre-line',
          textAlign: 'center',
        }}
      />
    </Tilt>
  )
}

export default forwardRef(CardModal)
