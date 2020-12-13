import React, { FunctionComponent, useState } from 'react'
import { Button, Input } from 'components'
import {
  // GuestDropdown,
  // GuestDropdownWrapper,
  // GuestWrapper,
  LocationDropdownWrapper,
  LocationWrapper,
  StyledSearchBar
} from './styles'
import searchIcon from 'assets/icon-search.svg'

interface ISearchBar {
  children?: React.ReactNode;
}


export const SearchBar: FunctionComponent<ISearchBar> = (): JSX.Element => {


  return (
    <StyledSearchBar>
      <LocationWrapper>
        <Input
          className="dropdown__location"
          type="text"
          placeholder="Location"
          value=""
          onChange={() => console.log('sljso')}
        />
        <LocationDropdownWrapper>
        </LocationDropdownWrapper>
      </LocationWrapper>

      {/* <GuestWrapper>
          <Input
            className="dropdown__guest"
            type="text"
            placeholder="Add guests"
            value={guests}
            onChange={(e): void => setGuests(parseInt(e.target.value))}
          />
          <GuestDropdownWrapper ref={searchRef}>
            <GuestDropdown>
              <h4>Adults</h4>
              <p>Ages 13 or above</p>
              <Flex>
                <button onClick={decrementAdult}>-</button>
                <span>{adultCount}</span>
                <button onClick={incrementAdult}>+</button>
              </Flex>
            </GuestDropdown>
            <GuestDropdown>
              <h4>Children</h4>
              <p>Ages 2-12</p>
              <Flex>
                <button onClick={decrementChildren}>-</button>
                <span>{childrenCount}</span>
                <button onClick={incrementChildren}>+</button>
              </Flex>
            </GuestDropdown>
          </GuestDropdownWrapper>
        </GuestWrapper> */}


      <Button className="dropdown__btn" icon src={searchIcon} onClick={() => console.log('button clicked')}>Search</Button>
    </StyledSearchBar >
  )
}
