import React from 'react'
import SearchCard from '../../components/SearchCard'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import Navigator from '../../components/Navigator'
import Footer from '../../components/Footer'
import ResultSectionLeft from '../../components/ResultSectionLeft'

function LandingPage() {

  return (
    <>
      <MDBContainer >
        <Navigator />
        <MDBRow>
          <MDBCol className='d-flex justify-content-center'>
            <SearchCard />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12} className='d-flex justify-content-center'>
            <ResultSectionLeft />
          </MDBCol>
        </MDBRow>
        <Footer />
      </MDBContainer>

    </>
  )
}

export default LandingPage