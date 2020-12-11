import React from 'react'
import {
  StyledFeatureCard,
  ImageWrapper,
  TextWrapper,
  TextInfo,
  TextDescription
} from './styles'
import { Pill } from 'components'
import { ReactComponent as Star } from 'assets/icon-star.svg'

export const FeatureCard = () => {
  return (
    <StyledFeatureCard>
      <ImageWrapper>
        <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="" />
      </ImageWrapper>
      <TextWrapper>
        <TextInfo>
          <Pill className="pill">SUPER HOST</Pill>
          <p className="beds">Entire apartment . 2 beds</p>
          <div className="rating__container">
            <Star className="star" />
            <span className="rating">4.40</span>
          </div>
        </TextInfo>
        <TextDescription>
        </TextDescription>
      </TextWrapper>
    </StyledFeatureCard>
  )
}
