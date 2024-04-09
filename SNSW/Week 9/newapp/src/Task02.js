import React from "react";

const TaskTwo = ({numbers}) =>
{
  return (
    <ul>
      {numbers.map((number, index) =>     /* Map() method to iterate over each element of the numbers array.*/
      (                                   /* number is the current element. index is the index of the element in the array*/
        <li key = {index}> {number}</li>  /* For each element in 'numbers' a list item is created. Key attibute set to index*/
      ))}                                 {/*Content of list item is set to value of the element {number}*/} 
    </ul>
  );
};

export default TaskTwo;