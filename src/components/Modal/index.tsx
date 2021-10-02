import styled from 'styled-components'
import { SIZES } from '@resources/sizes'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  backdrop-filter: blur(3px);
  animation: modal-bg-show 0.4s;

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalComp = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: ${SIZES.maxWidth};
  border: solid 1px black;
  border-radius: 0.3rem;
  background-color: #fff;

  animation: modal-show 0.4s;
  overflow: hidden;
`

export const Modal = (props: any) => {
  return (
    <Container>
      <ModalComp>{props.children}</ModalComp>
    </Container>
  )
}
