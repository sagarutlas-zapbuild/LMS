import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import CourseCard from '../cards/CourseCard';
import { coursesUrl } from '../res/urls';

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch(coursesUrl).then(res => { return (res.json()); }).then(data => setAllCourses(data));
    }, [])

    return (<Container>

        <h2>List of Courses</h2>

        {allCourses.map(course => {
            return (<CourseCard id={course.id} key={course.id} title={course.title} description={course.description} />);
        })}
    </Container>);
}


export default Courses