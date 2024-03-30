import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

function ResultSectionLeft() {
    const word = useSelector(state => state.word);
    console.log(word)

    return (
        <div>
            {word?.word?.map((word, index) => (
                <MDBCard key={index} className='my-5 shadow-lg'>
                    <MDBCardHeader className='text-capitalize fs-4 text-center'>{index + 1} : {word.word} - {word.phonetic}</MDBCardHeader>
                    <MDBCardBody>
                        {word.meanings.map((partOfSpee, indexPart) => (
                            <MDBTypography key={indexPart} blockquote className='mb-0 fs-4 fw-normal'>
                                <p className='fs-5 fw-normal'>{indexPart + 1} : {partOfSpee.partOfSpeech}</p>
                                {partOfSpee.definitions.map((definition, defIndxe) => (
                                    <footer key={defIndxe} className='blockquote-footer fs-6 fw-normal'>
                                        {definition.definition}
                                        <cite title='Source Title'></cite>
                                    </footer>
                                ))}
                            </MDBTypography>
                        ))}
                    </MDBCardBody>
                </MDBCard>
            ))}
        </div>

    );
}

export default ResultSectionLeft;
