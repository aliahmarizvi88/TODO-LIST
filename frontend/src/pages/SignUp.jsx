import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const SignUp = () => {
  const { signup } = useUser();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const { confirmPassword, ...signupValues } = values;
      await signup(signupValues);
      navigate('/');
    } catch (error) {
      setErrors({ email: error.message || 'Signup failed' });
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short').required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="m-10 px-10 " method="post">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <ErrorMessage name="name">
                  {(msg) => (
                    <div className="absolute text-red-500 text-xs mt-1 transition-opacity duration-200">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="xyz@email.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <div className="absolute text-red-500 text-xs mt-1 transition-opacity duration-200">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="••••••••••"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <div className="absolute text-red-500 text-xs mt-1 transition-opacity duration-200">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••••"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => (
                    <div className="absolute text-red-500 text-xs mt-1 transition-opacity duration-200">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800 transition disabled:opacity-50 hover:scale-120 duration-300"
                >
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already had account{' '}
          <a
            href="/login"
            className="text-purple-700 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
