// import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const initialValues = {
    email: '',
    password: ''
}

const validate = values => {
    const errors = {}


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
        errors.password = 'It has to be at least 8 characters long'
    }

    return errors
}

function Login() {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            console.log(values)
            alert('Form submitted')
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-black text-white font-poppins">
            <div className="bg-black border border-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                <form className="space-y-5" onSubmit={formik.handleSubmit}>

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
                            placeholder="Input user Email"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${
                                formik.touched.email && formik.errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.email}
                            </p>
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
                            placeholder="Input Password"
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

                
                    <div className="flex items-center justify-between mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-300 transition duration-300"
                        >
                            Login
                        </button>
                    </div>

                
                    <p className="text-sm text-gray-400 text-center mt-4">
                        Don’t have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-green-400 hover:text-green-300 font-medium"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login 