import React, { FunctionComponent } from 'react'
import { StyledFilterContainer } from './styles'
import { SearchBar } from 'components'
import closeIcon from 'assets/icon-close.svg'
import { IPlaces } from 'App'

interface IFilterContainer {
  isFilterOpen: boolean;
  location: string;
  totalGuests: number;
  setIsFilterOpen: (arg: boolean) => void;
  handleSubmit: (e: any) => void;
  setLocation: (e: any) => void;
  incrementAdultTotal: () => void;
  decrementAdultTotal: () => void;
  incrementChildrenTotal: () => void;
  decrementChildrenTotal: () => void;
  guestTotal: { adults: number, children: number };
  places: IPlaces[]
}

export const FilterContainer: FunctionComponent<IFilterContainer> = ({
  location,
  places,
  isFilterOpen,
  totalGuests,
  guestTotal,
  setIsFilterOpen,
  handleSubmit,
  setLocation,
  incrementAdultTotal,
  decrementAdultTotal,
  incrementChildrenTotal,
  decrementChildrenTotal }): JSX.Element => {
  return (
    <StyledFilterContainer isFilterOpen={isFilterOpen}>
      <img
        className="close--btn"
        src={closeIcon}
        alt="close icon"
        width={18}
        height={18}
        onClick={() => setIsFilterOpen(false)}
      />
      <SearchBar
        location={location}
        setLocation={setLocation}
        handleSubmit={handleSubmit}
        totalGuests={totalGuests}
        incrementAdultTotal={incrementAdultTotal}
        decrementAdultTotal={decrementAdultTotal}
        incrementChildrenTotal={incrementChildrenTotal}
        decrementChildrenTotal={decrementChildrenTotal}
        guestTotal={guestTotal}
        places={places}
      />
    </StyledFilterContainer>
  )
}
