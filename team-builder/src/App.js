import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from './axios/index';
import Member from './components/Member';

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
  const [formError, setFormError] = useState('');

  const formUpdate = (inputData, inputValue) => {
    setFormValues({ ...formValues, [inputData]: inputValue });
  }


  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName,
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.memberName || !newMember.email || !newMember.role) {
      setFormError('Invalid Data Submitted')
      return;
    }
    axios.post('dummyapi.com', newMember)
      .then(response => {
        //console.log(response)
        setMember([response.data, ...member])
        setFormValues(initialFormValues);
      })
      .catch(error => console.error(error))
  }


  useEffect(() => {
    axios.get('dummyapi.com')
      .then(response => {
        //console.log(response);
        setMember(response.data);
      })
  }, [])

  return (
    <div className="container">
      <h1>Team Management Form</h1>
      {formError && <h2 className='error'>{formError}</h2>}
      <Form
        // sending form values to <Form />
        values={formValues}
        update={formUpdate}
        submit={submitForm}
      />
      {
        member.map(member => {
          return (
            <Member key={member.id} information={member} />
          )
        })
      }
    </div>
  );
}

