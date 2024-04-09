import React, { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import './index.css';
import TaskOne from './Task01';
import TaskTwo from './Task02';
import { Product, TaskThree } from './Task03ProductData';
import TaskFour from './Task04'
import reportWebVitals from './reportWebVitals';

const TaskTwoContainer = () =>
{
  const numbers = [1, 2, 3, 4, 5]
  return (
   <div>
    <h2>List of Numbers</h2>
    <TaskTwo numbers = {numbers} /> {/* Pass the array of numbers as properties */}
   </div>
  );
};

const TaskThreeContainer = () =>
{
  const product1 = new Product(`Banana bread`, `Toasted with butter and cinnamon`, `3.50`);
  return (
    <div>
      <TaskThree product = {product1} /> {/* Pass the product instance as a prop to TaskThree */}
    </div>
  );
};

const TaskFourContainer = () =>
{
  const productsArray = 
  [
    { name: `Blade`, unitPrice: `19.95`},
    { name: `Nemo`, unitPrice: `29.95`},
    { name: `Shrek`, unitPrice: `39.95`}
  ];

  return (
    <div>
      <TaskFour products = {productsArray} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render
(
  <StrictMode>
    <TaskOne />
    <TaskTwoContainer />
    <TaskThreeContainer />
    <TaskFourContainer />
  </StrictMode>
);

reportWebVitals();

export { TaskTwoContainer, TaskThreeContainer, TaskFourContainer};