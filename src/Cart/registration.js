import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../home/home_header';
import './registration.css';
import { useNavigate } from 'react-router-dom';

const ErrorMsg = ({ children }) => (
    <div className="error-registr">{children}</div>
);

const RegistrationForm = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        address: Yup.string()
            .max(100, 'Address should be at most 100 characters')
            .required('Address is required'),
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
    };

    const handleSubmit = (values) => {
        console.log('Registration form submitted!', values);
        localStorage.setItem('userEmail', values.email);
        localStorage.setItem('userPassword', values.password);
        navigate('/successful');
    };

    return (
        <div>
            <Header />
            <h1 className='reg'>Registration</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label className='first'>First Name:</label>
                            <Field className='firstName' type="text" name="firstName" />
                            <ErrorMessage name="firstName" component={ErrorMsg} />
                        </div>
                        <div>
                            <label className='last'>Last Name:</label>
                            <Field className='lastName' type="text" name="lastName" />
                            <ErrorMessage name="lastName" component={ErrorMsg} />
                        </div>
                        <div>
                            <label className='mail'>Email:</label>
                            <Field className='emmail' type="email" name="email" />
                            <ErrorMessage name="email" component={ErrorMsg} />
                        </div>
                        <div>
                            <label className='phone'>Password:</label>
                            <Field
                                className='phon'
                                type="password"
                                name="password"
                                minLength="8"
                            />
                            <ErrorMessage name="password" component={ErrorMsg} />
                        </div>
                        <div>
                            <label className='adress'>Address:</label>
                            <Field className='addres' type="text" name="address" />
                            <ErrorMessage name="address" component={ErrorMsg} />
                        </div>
                        <div>
                            <button className='regis' type="submit">Register</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;


