import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props; //deconstructing props

    const onChange = event => {
        const name = event.target.name;
        const { value } = event.target;
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    return (
        <form className='team-form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Team Member Name
                    <input
                        type='text'
                        name='memberName'
                        placeholder='Enter your Name'
                        value={values.memberName}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email Address'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Work Role
                    <select
                        value={values.role}
                        name='role'
                        onChange={onChange}>
                        <option value=''>--- Select a Role ---</option>
                        <option value='Technical Writer'>Technical Writer</option>
                        <option value='Scrum Master I'>Scrum Master I</option>
                        <option value='Scrum Master II'>Scrum Master II</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Application Developer'>Application Developer</option>
                        <opiton value='Backend Application Developer'>Backend Application Developer</opiton>
                        <option value='System Administrator'>System Administrator</option>
                        <option value='Backend Developer'>Backend Developer</option>
                        <option value='Frontend Developer'>Frontend Developer</option>

                    </select>
                </label>
                <div className='submit'>
                    <button>Submit Data</button>
                </div>
            </div>
        </form >

    )
}