import React, { FunctionComponent, useState } from 'react'
import { Button, Input } from 'components'
import {
  GuestDropdown,
  GuestDropdownWrapper,
  GuestWrapper,
  LocationWrapper,
  LocationDropdownWrapper,
  LocationDropdown,
  StyledSearchBar
} from './styles'
import searchIcon from 'assets/icon-search.svg'
import locationIcon from 'assets/icon-location.svg'
import { IPlaces } from 'App'

interface ISearchBar {
  children?: React.ReactNode;
  totalGuests: number;
  location: string;
  guestTotal: { adults: number, children: number }
  handleSubmit: (e: any) => void;
  setLocation: (e: any) => void;
  incrementAdultTotal: () => void;
  decrementAdultTotal: () => void;
  incrementChildrenTotal: () => void;
  decrementChildrenTotal: () => void;
  places: IPlaces[]
}

export const SearchBar: FunctionComponent<ISearchBar> = ({
  location,
  guestTotal,
  totalGuests,
  setLocation,
  handleSubmit,
  incrementAdultTotal,
  decrementAdultTotal,
  incrementChildrenTotal,
  decrementChildrenTotal,
  places
}): JSX.Element => {
  const [isActive, setIsActive] = useState('')
  const uniquePlaces = [...new Set(places.map(place => place.city))]

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <LocationWrapper>
        <Input
          className="dropdown__location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={() => setIsActive('location')}
        />
        <LocationDropdownWrapper>
          {isActive === 'location' && (
            <>
              {uniquePlaces.map(place => (
                <LocationDropdown key={place} onClick={() => setLocation(place)}>
                  <img src={locationIcon} alt="" width={24} height={24} />
                  {place}
                </LocationDropdown>
              ))}
            </>
          )}
        </LocationDropdownWrapper>
      </LocationWrapper>

      <GuestWrapper>
        <Input
          className="location__guest"
          type="text"
          value={`${totalGuests === 0 ? 'Add guest' :
            totalGuests === 1 ? `${totalGuests} guest` :
              `${totalGuests} guests`
            }`}
          onFocus={() => setIsActive('guest')}
          onChange={() => setIsActive('guest')}
        />
        {isActive === 'guest' && (
          <GuestDropdownWrapper>
            <GuestDropdown>
              <div>
                <div className="adults">
                  <h4>Adults</h4>
                  <p>Ages 13 or above</p>
                  <button type="button" onClick={decrementAdultTotal} disabled={guestTotal.adults <= 0}><p>-</p></button>
                  <span>{guestTotal.adults}</span>
                  <button type="button" onClick={incrementAdultTotal}>+</button>
                </div>
              </div>
            </GuestDropdown>
            <GuestDropdown>
              <div className="children">
                <h4>Children</h4>
                <p>Ages 2-12</p>
                <button type="button" onClick={decrementChildrenTotal} disabled={guestTotal.children <= 0}>-</button>
                <span>{guestTotal.children}</span>
                <button type="button" onClick={incrementChildrenTotal}>+</button>
              </div>
            </GuestDropdown>
          </GuestDropdownWrapper>
        )}
      </GuestWrapper>

      <Button icon src={searchIcon} alt="search icon" type="submit">Search</Button>
    </StyledSearchBar >
  )
}
