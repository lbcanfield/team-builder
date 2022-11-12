import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

// Initial Values for the Form
const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

export default function App() {

  // Initial variable state values 
  const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

