import React, { FunctionComponent } from 'react'
import {
  StyledHeader,
  HeaderInner,
  SearchBtn
} from './styles'
import { Container } from 'components'
import logo from 'assets/logo.svg'
import searchIcon from 'assets/icon-search.svg'

interface IHeader {
  isFilterOpen: boolean;
  setIsFilterOpen: (arg: boolean) => void;
  totalGuests: number;
  filteredPlaces: any;
}

export const Header: FunctionComponent<IHeader> = ({ isFilterOpen, setIsFilterOpen, filteredPlaces, totalGuests }) => {
  console.log('filteredPlaces Header:>> ', filteredPlaces);
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <a href="#">
            <img src={logo} alt="windbnb logo" />
          </a>
          <SearchBtn onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <div className="location">
              <span>{`${filteredPlaces[0]?.city}, ${filteredPlaces[0]?.country}`}</span>
            </div>
            <div className="guests">
              <span>
                {totalGuests < 1 ? 'Add Guest' :
                  totalGuests === 1 ? `${totalGuests} guest` :
                    `${totalGuests} guests`}
              </span>
            </div>
            <div className="search">
              <img src={searchIcon} alt="search icon" width={18} height={18} />
            </div>
          </SearchBtn>
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
}
