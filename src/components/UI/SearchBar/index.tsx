import React, { FunctionComponent, useState, useEffect, useRef, SyntheticEvent } from 'react'
import { Button, Flex, Input } from 'components'
import {
  GuestDropdown,
  GuestDropdownWrapper,
  GuestWrapper,
  LocationDropdownWrapper,
  LocationWrapper,
  StyledSearchBar
} from './styles'
import searchIcon from 'assets/icon-search.svg'

interface ISearchBar {
  children?: React.ReactNode;
}

interface ITerm {
  name: string;
  amount: number;
}

export const SearchBar: FunctionComponent<ISearchBar> = () => {
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [term, setTerm] = useState<ITerm>({
    name: '',
    amount: 0
  })
  const searchRef = useRef<HTMLDivElement | null>(null);

  const incrementAdult = () => {
    setAdultCount(prevCount => prevCount + 1)
  }
  const decrementAdult = () => {
    setAdultCount(prevCount => prevCount - 1)
  }
  const incrementChildren = () => {
    setChildrenCount(prevCount => prevCount + 1)
  }
  const decrementChildren = () => {
    setChildrenCount(prevCount => prevCount - 1)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(term);
  }

  useEffect(() => {
    if (searchRef.current) {
      const test = searchRef.current.getBoundingClientRect();
      console.log('test :>> ', test);
    }
  }, [])

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <LocationWrapper>
          <Input className="dropdown__location" type="text" placeholder="Location" />
          <LocationDropdownWrapper>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </LocationDropdownWrapper>
        </LocationWrapper>

        <GuestWrapper>
          <Input className="dropdown__guest" type="text" placeholder="Add guests" tabindex="-1" />
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
        </GuestWrapper>


        <Button className="dropdown__btn" icon src={searchIcon} handleClick={() => alert('clicked')}>Search</Button>
      </form>
    </StyledSearchBar >
  )
}
