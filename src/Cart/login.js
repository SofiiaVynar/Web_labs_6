import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../home/home_header';
import './registration.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';

const ErrorMsg = ({ children }) => (
    <div className="error-registr">{children}</div>
);

const LoginForm = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleLogin = (values) => {
        if (login(values.email, values.password)) {
            console.log('Login form submitted!', values);
            navigate('/home');
        } else {
            console.log('Invalid credentials!');
        }
    };
    
    
    return (
        <div>
            <Header />
            <h1 className='logiin'>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}

            >
                {({ handleSubmit }) => (
                    <Form className='logform' onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <Field className='email' type="email" name="email" />
                            <ErrorMessage name="email" component={ErrorMsg} />
                        </div>
                        <div className='pas'>
                            <label>Password:</label>
                            <Field className='pass' type="password" name="password" />
                            <ErrorMessage name="password" component={ErrorMsg} />
                        </div>
                        <div>
                            <button className='log' type="submit">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <p className='dont'>
                Don't have an account? <a href="/registration">Register</a>
            </p>
        </div>
    );
};

export default LoginForm;
