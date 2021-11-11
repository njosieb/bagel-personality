import React from 'react'
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'
import './SubmitBtn.css'

const SubmitBtn = () => {

    return (
        <div>
            {/* <Link to="/quiz"> */}
                <Button className="button-link" type="button">Submit</Button>
            {/* </Link> */}
        </div>
    )
}

export default SubmitBtn