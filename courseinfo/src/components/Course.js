import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Course( {courses} ) {
  return (
    <div>
      {courses.map( course => {
        return (
            <div key={course.id}>
                <Header 
                courseName = {course.name}
                />
                <Content 
                    parts={course.parts}
                />
            </div>
        )
      })}
    </div>
  )
}
