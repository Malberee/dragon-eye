import styled from 'styled-components'

export const AuthorsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 5px;
  z-index: 4;

  font-family: 'Roboto';
  font-size: 12px;

  background-color: #18181bca;

  @media (width >= 768px) {
    display: block;
    top: 1rem;
    right: 1rem;

    width: auto;
    height: 56px;
    background-color: transparent;

    text-align: right;
    font-size: 10px;
  }

  @media (width >= 992px) {
    font-size: 12px;
  }
`

export const Text = styled.p`
  color: white;
  text-shadow: 0px 1px 4px #000000;

  @media (width >= 768px) {
    text-shadow: none;
  }
`

export const Link = styled.a`
  color: #f6c06a;
  text-decoration: none;

  transition: color 100ms linear;

  &:hover,
  &:focus {
    color: #5dbbcc;
  }
`
