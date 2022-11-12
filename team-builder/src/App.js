import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import axios from './axios/index';

// Initial Values for the Form
const initialFormValues = {
  memberName: '',
  email: '',
  role: ''
};

export default function App() {
  const [member, setMember] = useState([]);

  // Initial variable state values 
  const [formValues, setFormValues] = useState(initialFormValues);

  const formUpdate = (inputData, inputValue) => {
    setFormValues({ ...formValues, [inputData]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName,
      email: formValues.email.trim(),
      role: formValues.role
    }
  }
  return (
    <div className="container">
      <h1>Team Management Form</h1>
      {/* add form error section here */}
      <Form
        // sending form values to <Form />
        values={formValues}
        update={formUpdate}
        submit={submitForm}
      />
    </div>
  );
}

