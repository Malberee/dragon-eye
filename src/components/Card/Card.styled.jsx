import styled, { css } from 'styled-components'
import { Skeleton } from '@nextui-org/react'

export const CardSkeleton = styled(Skeleton)`
  width: 327px;
  height: 444px;
  border-radius: 37px;
`

export const CardLink = styled.a`
  cursor: pointer;
`

export const CardOutline = styled.div(({ color }) => {
  let bgColor = ''

  switch (color) {
    case 'stoker':
      bgColor = '#8b4f1b'
      break
    case 'boulder':
      bgColor = '#5e5b14'
      break
    case 'tracker':
      bgColor = '#275e1b'
      break
    case 'sharp':
      bgColor = '#0a6061'
      break
    case 'tidal':
      bgColor = '#415175'
      break
    case 'mystery':
      bgColor = '#634976'
      break
    default:
      bgColor = '#902831'
      break
  }

  return css`
    display: inline-block;
    border-radius: 30px;
    padding: 13px;

    color: black;
    background-color: ${bgColor};
    background-size: 100% 100%;
    background-repeat: no-repeat;

    font-family: 'Runic';
    text-transform: uppercase;
  `
})

export const CardWrapper = styled.div`
  position: relative;

  width: 301px;
  height: 418px;
  padding: 10px 9px 7px 10px;
  border-radius: 37px;

  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const CardHeader = styled.div`
  width: 100%;
  height: 42px;
  padding: 0px 2px;
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DragonNameWrapper = styled.div`
  height: 42px;
  width: 180px;

  .scaletext-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const DragonName = styled.h2`
  line-height: 0.7;
  font-weight: 700;
  text-align: center;
  word-spacing: ${(props) => (props.nameLength >= 12 ? '100px' : 'normal')};
`

export const DragonPicture = styled.img`
  display: block;
  width: 100%;
  padding: 7.5px 0;
`

export const CardInner = styled.div`
  height: 42px;
  padding: 10px 0;

  display: flex;
  align-items: center;
  gap: 9.5px;
`

export const Salvo = styled.div`
  width: calc(100% - 10px);
  height: 100%;
  padding: 0px 4px;

  display: flex;
  align-items: center;
  gap: 8px;
`

export const SalvoIcon = styled.img`
  width: 13px;
`

export const SalvoType = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 0.9;
`

export const Abilities = styled.div`
  width: calc(100% - 5px);
  height: 100%;
  padding: 0px 2.5px;

  display: flex;
  align-items: center;
  gap: 2.5px;
`

export const DragonDescriptionWrapper = styled.div`
  display: table-cell;

  padding: 4px;
  height: 70px;
  border-radius: 0 0 27px 27px;

  vertical-align: middle;
`

export const DragonDescription = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 13px;
`
