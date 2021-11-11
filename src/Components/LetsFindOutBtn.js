import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './LetsFindOutBtn.css'

const LetsFindOutBtn = () => {

    return (
        <div>
            <Link to="/quiz">
                <Button className="button-link" type="button">Let's Find Out!</Button>
            </Link>
        </div>
    )
}

export default LetsFindOutBtn