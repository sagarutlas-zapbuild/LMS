import React from 'react'

import Card from 'react-bootstrap/Card'

const CourseCard = (props) => {


    return(<Card>
        <Card.Header>
            <Card.Title>
                {props.title}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Text>
            {props.description}
            </Card.Text>
        </Card.Body>
    </Card>)
}

export default CourseCard;