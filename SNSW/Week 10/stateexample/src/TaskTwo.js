import React, { useState } from 'react';

function createListItem(num, index)
{
    return(
        <li key = {index}>{num}</li>
    )
}

function TaskTwo()
{
    const [numbers, setNumbers] = useState([])
    const renderedList = numbers.map(createListItem);

    function addRandomNumber(e)
    {
        let n = Math.floor(Math.random() * 100);
        let newNumbers = numbers.concat(n);
        setNumbers(newNumbers);
    }

    return(
        <div>
            <ul>
                {renderedList}
            </ul>
            <button onClick={addRandomNumber}>Add random number</button>
        </div>
    );
};

export default TaskTwo;