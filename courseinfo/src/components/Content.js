import React from 'react'
import Part from './Part'

export default function Content({ parts }) {

    return (
        <div>
            {parts.map(part => (
                <Part
                    key={part.id}
                    name={part.name}
                    exercises={part.exercises}
                />
            ))}
            <p><strong>total of {parts.reduce((first, second) => first + second.exercises, 0)} exercises</strong></p>
        </div>
    )
}
