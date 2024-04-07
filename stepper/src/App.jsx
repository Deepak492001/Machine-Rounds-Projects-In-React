
import { useState } from 'react';
import './App.css'
import Stepper from "./components/Stepper.jsx";


function App() {
  const [count, setCount] = useState(0);
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: ()=><div>Provide your contact details</div>,
    },
       {
      name: "Shipping Info",
      Component: ()=><div>Enter your Shipping Address</div>,
    },
          {
      name: "Payment Info",
      Component: ()=><div>Complete Payment for your Order</div>,
    },
       {
      name: "Delivered",
      Component: ()=><div>YOur Order has been Delivered</div>,
    },
  ];

  return (
    <div>
      <h1>Chekcout</h1>
      <Stepper stepsConfig={ CHECKOUT_STEPS} />
  </div>
  )
}

export default App
