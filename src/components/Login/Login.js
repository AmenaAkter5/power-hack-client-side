import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import hack from '../../images/power.PNG';


const Login = () => {

    // use react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();


    // form submit
    const onSubmit = async data => {

        const email = data.email;
        const password = data.password;

        const result = await fetch('https://power-hack-superb.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            // console.log('Got the token: ', result.data)
            localStorage.setItem('token', result.data)
            alert('Success')
        } else {
            alert(result.error)
        }

    };


    // use token
    const token = localStorage.getItem('token');

    // use navigate hook
    const navigate = useNavigate();


    // after getting token redirect user to the previous page
    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate])


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <img src={hack} alt="" />
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password?.message}</span>}
                            </label>
                        </div>
                        {/* {errorMessage} */}
                        <input className='btn w-full max-w-xs' type="submit" value="Login " />
                    </form>

                    <p className='text-center'>New to Power Hack? <a href="/signup" className='text-secondary'>Create New Account</a></p>
                </div>
            </div>
        </div >
    );
};

export default Login;