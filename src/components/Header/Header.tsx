import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Navigation from '~/components/Navigation';

const Container = styled.header`
  margin-bottom: 40px;

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    margin-top: 30px;

    @media (min-width: 760px) {
      margin-top: 10px;
    }
  }
`;

const Name = styled.span<{ small: boolean }>`
  font-size: ${(props) => (props.small ? '6vw' : '15vw')};
  color: #fff;
  font-weight: 700;
  text-transform: lowercase;

  @media (min-width: 760px) {
    font-size: ${(props) => (props.small ? '24px' : '80px')};
  }
`;

const LastName = styled.span`
  color: #d73738;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;

  :focus {
    border-bottom: 1px solid #d73738;
    outline: none;
  }
`;

interface HeaderProps {
  small: boolean;
  author: string;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const [name, lastname] = props.author.split(' ');

  return (
    <Container>
      <StyledLink to="/">
        <Name small={props.small}>
          {name}
          {lastname && <LastName data-testid="header-lastname">{lastname[0]}.</LastName>}
        </Name>
      </StyledLink>
      <Navigation />
    </Container>
  );
}
