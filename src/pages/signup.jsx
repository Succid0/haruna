import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const initialValues = {
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const validate = values => {
    const errors = {}

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters'
    }

    if (!values.surname) {
        errors.surname = 'Required'
    } else if (values.surname.length < 2) {
        errors.surname = 'Must be at least 2 characters'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email format'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters long'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match'
    }

    return errors
}

function Signup() {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            console.log(values)
            alert('Sign up successful!')
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-black text-white font-poppins">
            <div className="bg-black border border-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                <form className="space-y-5" onSubmit={formik.handleSubmit}>
                    
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            First Name 
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="Enter your first name"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.firstName && formik.errors.firstName
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.firstName}
                            </p>
                        )}
                    </div>

                    
                    <div>
                        <label
                            htmlFor="surname"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Surname 
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.surname}
                            placeholder="Enter your surname"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.surname && formik.errors.surname
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.surname && formik.errors.surname && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.surname}
                            </p>
                        )}
                    </div>

                    
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Email 
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.email && formik.errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Password 
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Enter password"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.password && formik.errors.password
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Confirm Password 
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            placeholder="Re-enter password"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.confirmPassword && formik.errors.confirmPassword
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                    </div>

                    
                    <div className="flex items-center justify-between mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-300 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>

                    <p className="text-sm text-gray-400 text-center mt-4">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-green-400 hover:text-green-300 font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup