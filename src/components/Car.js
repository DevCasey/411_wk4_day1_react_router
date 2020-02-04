import React from 'react'
import cars from '../cars.json'
import {Container, Paper, Chip} from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    
    const id = props.match.params.id
    const car = cars.find(e => e.id == id)

    return (
        
        <Container maxWidth="300px" className="car-outter">
            <Paper className="paper-car">
                <h1>{car.Name}</h1>
                {Object.keys(car).map((key, index) => {
                    return <Chip label={`${key}: ${car[key]}`}></Chip>
                })}
            </Paper>
        </Container>
    )
}

export default Car