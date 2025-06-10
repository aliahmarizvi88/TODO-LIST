import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user, login } = useUser();
  const initialValues = { email: '', password: '' };
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await login(values);
      navigate('/home');
    } catch (error) {
      setErrors({ email: error.message || 'Login failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Login
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="m-10 px-10 ">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
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
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800 transition disabled:opacity-50 hover:scale-120 duration-300"
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-purple-700 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
