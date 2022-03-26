import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div className="question-1">
                <h1 className='heading'>Difference Between Props and State?</h1>
                <h2 className='answer'>Answer:</h2>
                <h3>Props: </h3> <p>1. Props are Read only</p>
                <p>2. Props can not be changed.</p>
                <p>3. props are used by a component to get data from another component.</p>
                <p>4. Props can be used in both functional and class components</p>

                <h3>State: </h3> <p>1. State changes can be asynchronous. </p>
                <p>2. State can be changed</p>
                <p>3. states are used to manage data changes inside the component</p>
                <p>4. State can only be used in class components</p>
            </div>

            <div className="question-2">
                <h1 className='heading'>How React works?</h1>
                <h2 className='answer'>Answer:</h2>
                <p>React is a JavaScript library (not a framework). We can use it to help build single-page applications and mobile apps. Most commonly  React work for-</p>
                <p>1. React makes it easier to create dynamic web applications because it requires less coding and offers more functionality and reliability.</p> <p>2. React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components  previous states and updates only <br /> the items in the Real DOM that were changed, instead of updating all of the components again.</p> <p>3.Components are the building blocks of any React application, and a single app usually consists of multiple components. These components can be reused. </p><p>4. React is easy to learn, as it mostly combines basic HTML and JavaScript concepts </p>

            </div>
        </div>
    );
};

export default Question;