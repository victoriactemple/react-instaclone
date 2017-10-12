import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const FlexRow = styled.div`
display: flex;
flex-direction: row;
` 



const Title = styled.h3`
font-family: "Bitter";

`
const Nav = FlexRow.extend`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
font-size: 25px;
`

const SearchBar = styled.div`

`


class Navbar extends Component{

  render(){
    return (
      <Nav>
        <Title>
        <h3><FaInstagram /> | Instaclone</h3>
        </Title>

       
        <SearchBar>
        <FaSearch/><input type="text" placeholder="Search"/>
       </SearchBar>
        

       
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
       

      </Nav>
    );
  }
}

export default Navbar