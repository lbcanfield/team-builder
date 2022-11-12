import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import axios from './axios/index';

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
    <div className="container">
      <h1>Team Management Form</h1>
      {/* add form error section here */}
      <Form
        // sending form values to <Form />
        values={formValues}
      />
    </div>
  );
}

