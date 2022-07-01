import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {


    // use form
    const { register, formState: { errors }, handleSubmit } = useForm();


    // form submit
    const onSubmit = async data => {

        const name = data.name;
        const email = data.email;
        const password = data.password;

        const result = await fetch('http://localhost:5000/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            // everythign went fine
            localStorage.setItem('token', result.data)
            alert('Success')
        }
        else {
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
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name?.message}</span>}
                            </label>
                        </div>

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
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up " />
                    </form>

                    <p className='text-center'>Already Have an account? <a href="/login" className='text-secondary'>Log in Please</a></p>
                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline"
                    >Continue With Google
                    </button>
                    {/* <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google
                    </button> */}
                </div>
            </div>
        </div >
    );
};

export default SignUp;