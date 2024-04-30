import React, { useState } from 'react';

function TaskOne()
{
  const [msg, setMsg] = useState('Hello World!');

  const changeMsg = () =>
  {
    setMsg(`Goodby World!`);
  };

  return(
    <div>
      <h2>{msg}</h2>
      <button onClick={changeMsg}>Change Message</button>
    </div>
  );
};

export default TaskOne;