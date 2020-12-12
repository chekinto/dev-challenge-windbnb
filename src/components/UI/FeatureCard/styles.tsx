import styled from 'styled-components/macro';

export const StyledFeatureCard = styled.article`
  height: auto;
`;

export const ImageWrapper = styled.div`
    border-radius: 24px;
    overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const TextWrapper = styled.div`
  overflow: hidden;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
      color: var(--grey1);
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
