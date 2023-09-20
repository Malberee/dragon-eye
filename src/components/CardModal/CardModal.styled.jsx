import styled, { css } from 'styled-components'

export const CardBackWrapper = styled.div((props) => {
	let overlay = './images/overlays/backOverlay.png'

	if(props.countClasses > 1) {
		overlay = './images/overlays/backOverlayHybrid.png'
	}

  return css`
    position: relative;

    width: 301px;
    height: 418px;
    border-radius: 37px;

    background-image: url(${overlay});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    transform: scaleX(-1);
  `
})

export const CardBackClassIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`

export const TooltipLink = styled.a`
  display: block;
  cursor: pointer;

  &:has(.sticker) {
    position: absolute;
    right: 10px;
    bottom: 15px;

    width: 50px;
    height: 30px;

    transform: rotate(-10deg);
  }
`
