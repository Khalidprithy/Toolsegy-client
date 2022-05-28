import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import useToken from '../../../hooks/useToken';

const Login = () => {

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || userG)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    let errorMessage;

    if (loading || loadingG || sending) {
        return <Loading></Loading>
    }

    if (error || errorG) {
        errorMessage = <p className='text-orange-500'>{error?.message || errorG?.message}</p>
    }



    const handleReset = async (data) => {
        const email = data.email;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('please enter your email address');
        }
    }


    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/51L3Mqz/20943394.jpg" className="max-w-sm rounded-lg hidden lg:block shadow-2xl" alt='' />
                <div>
                    <div className="card w-80 bg-primary border rounded-md">
                        <div className="card-body">
                            <h2 className="text-2xl m-2 font-bold text-center text-white">Login</h2>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn border-white hover:border-white text-black hover:text-white bg-white"><FcGoogle className='mr-2'></FcGoogle>Sign in with Google</button>
                            <div className="divider text-white">OR</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <input

                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter You Email'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Enter a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs "
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Please Enter You Password'
                                            },
                                            pattern: {
                                                value: /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                                message: 'Password must contain one special character and one number'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.password.message}</span>}

                                    </label>
                                </div>

                                {errorMessage}
                                <input className='btn w-full text-white' type="submit" value='Login' />
                            </form>
                            <div className='flex items-baseline'>
                                <p className='text-white p-0 m-0'>Forgot Password?  </p>
                                <p>
                                    <button
                                        onClick={handleReset}
                                        className='btn btn-link text-xs text-orange-500 p-0 m-0'>Reset</button>
                                </p>
                            </div>
                            <div

                                className='flex items-center'>
                                <p className='text-white'>Dont have an account?<Link className='btn btn-link text-xs text-orange-500' to='/signup'>Sign Up</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;



/* 

     <p>Password 'test&examin12' </p>
     <p>Email 'examiner@tester.com' </p>
                
*/