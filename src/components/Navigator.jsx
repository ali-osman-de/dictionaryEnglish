import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Navigator() {


  return (
    <MDBNavbar expand='lg' light className=' navigator rounded-5 my-3 shadow-lg '>
      <MDBContainer fluid>
        <MDBNavbarBrand
          className='title p-1 fs-3 fw-light'
          style={{ color: "dimgray" }}
          href='/'
        >
          DICTIONARY
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navigator;