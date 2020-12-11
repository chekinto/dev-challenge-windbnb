import styled from 'styled-components/macro';

export const StyledFeatureCard = styled.article`
  max-width: 395px;
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 24px;
    max-width: 100%;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .pill {
    margin-right: 10px;
  }
  .beds {
    color: var(--grey2);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
  .rating__container {
    display: flex;
    align-items: center;
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

export const TextDescription = styled.div``;
