import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Tooltip } from 'react-tooltip'
import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'
import { uid } from 'uid'
import ScaleText from 'react-scale-text'

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

            <DragonPicture src={picture} />

            <CardInner>
              <Salvo>
                <SalvoIcon src="./images/icons/salvo.svg" />
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
                    <AbilityIcon key={uid()} ability={ability} width={18} />
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
