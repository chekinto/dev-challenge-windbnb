import React, { FunctionComponent } from 'react'
import {
  StyledFeatureCard,
  ImageWrapper,
  TextWrapper,
  TextInfo,
  TextDescription
} from './styles'
import { Pill } from 'components'
import { ReactComponent as Star } from 'assets/icon-star.svg'

interface IFeatureCard {
  image: string;
  superHost: boolean;
  info: string;
  rating: number;
  description: string;
}

export const FeatureCard: FunctionComponent<IFeatureCard> = ({
  image, superHost, info, rating, description }) => {
  return (
    <StyledFeatureCard>
      <ImageWrapper>
        <img src={image} alt={description} />
      </ImageWrapper>

      <TextWrapper>
        <TextInfo>
          {superHost && <Pill className="pill">SUPER HOST</Pill>}
          <p className="info">{info}</p>
          <div className="rating__container">
            <Star className="star" />
            <span className="rating">{rating.toFixed(2)}</span>
          </div>
        </TextInfo>
        <TextDescription>
          <p>{description}</p>
        </TextDescription>
      </TextWrapper>
    </StyledFeatureCard>
  )
}
