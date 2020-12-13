import styled from 'styled-components/macro';

export const StyledFeatureCard = styled.article`
  height: auto;
`;

export const ImageWrapper = styled.div<{ bgImg: string }>`
  border-radius: 24px;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 270px;
  width: 100%;
  margin-bottom: 20px;
`

export const TextWrapper = styled.div`
  overflow: hidden;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  .pill {
    margin-right: 10px;
  }
  .info {
    color: var(--grey2);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
  .rating__container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    .star {
      width: 24px;
      height: 24px;
      fill: red;
    }
    .rating {
      color: var(--grey3);
      font-size: 14px;
      line-height: 22px;
      margin-left: 8px;
    }
  }
`;

export const TextDescription = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;
