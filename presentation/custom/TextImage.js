import React from 'react'
import { Text, Image } from 'spectacle'
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterText = styled(Text)`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: left;
`

export default class TextImage extends React.Component {
  render() {
    const { src, children } = this.props

    return (
      <CenterDiv>
        <div
          style={{
            display: 'flex',
          }}
        >
          <CenterText>{children}</CenterText>
        </div>
        <div>
          <Image src={src} margin="0px auto 40px" />
        </div>
      </CenterDiv>
    )
  }
}
