import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { fetchWord } from '../actions/fetchWords';
import { useDispatch, useSelector } from 'react-redux';

function SearchCard() {
    const [input, setInput] = useState('');
    const [color, setColor] = useState('info');
    const [placeHolder, setPlaceHolder] = useState("Word Here");
    const word = useSelector(state => state.word);
    const dispatch = useDispatch();
    const error = word?.error

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClickOnSearch = () => {
        if (input.trim() === "") {
            setColor("danger");
            setPlaceHolder("You forgot something");
        } else {
            dispatch(fetchWord(input.trim()));
        }
    };

    return (
        <MDBCard style={{
            height: "200px",
            width: "300px",
            textAlign: "center"
        }}
            className='mt-5 pt-4 shadow-lg'>
            <MDBCardBody>
                <div className='my-2'>
                    <MDBInput className='shadow-sm' label={placeHolder} id='formTextExample1' type='text' aria-describedby='textExample1' value={input} onChange={handleChange} />
                    <div id='textExample1' className='form-text'>
                        You can write word.
                    </div>
                </div>
                <MDBBtn color={color} onClick={handleClickOnSearch}>Search</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}

export default SearchCard;
