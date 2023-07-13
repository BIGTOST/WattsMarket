import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/login.css'

import React, {useEffect, useState} from 'react';

import AuthSevice from '../auth/auth.service.views'
import CheckButton from 'react-validation/build/button'
import Form from 'react-validation/build/form';
import {Link} from 'react-router-dom';
import input from 'react-validation/build/input';
import {useNavigate} from 'react-router-dom';
import useParams from 'react-router-dom';

const require = (value)=>{
    if(!value){
        return(
            <div className='alert alert-danger' role='alert'>
                    Este Campo é obrigatorio
            </div>
        );
    }
};


export default function LoginComponent(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function HandleLogin(event){
        event.preventDefault();
        setMessage('');
        setLoading(true);
        
        AuthSevice.login(username, password)
        .then((res)=>{
            if(res === '' || res === false){
                setMessage('Autenticação falhou');
                setLoading(false);
            }
            else{
                navigate('/')
            }
        })
        .catch((error)=>{
            setMessage('Autenticação Falhou');
            setLoading(false);
        });
    }


    return(
        <>
            <section className='h-100 gradient-form'>
                <div className='container py-5 h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-xl-10'>
                            <div className='card rounded-3 text-black'>
                                <div className='row g-0'>
                                    <div className='col-lg-6 d-flex'>
                                        <img src='img/engenheiro.jpg' className='imagem tst' alt='engenheiro'/>
                                    </div>
                                    <div className='col-lg-6 backG'>
                                        <div className='card-body p-md-5 mx-md-4 margT'>

                                            <div className='text-center pt-1 mb-5 pb-1 ex'>
                                                <button className='btn btn-outline-primary btn-block fa-lg mb-3' type='button'>Voltar</button>
                                            </div>

                                            <div className='text-center'>
                                                <h4 className='mt-1 mb-3 pb-1 colorL'>Bemvindo de volta</h4>
                                                <p>Junte-se a Revolução Energética</p>
                                            </div>

                                            <form className='mt-5' onSubmit={HandleLogin}>
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label branco' htmlFor='formEmailLogin'>Email</label>
                                                    <input
                                                        type='email'
                                                        id='formEmailLogin'
                                                        className='form-control'
                                                        value={username}
                                                        onChange={(value)=>setUsername(value.target.value)}
                                                        />
                                                </div>
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label branco' htmlFor='formPassLogin'>Password</label>
                                                    <input
                                                        type='password'
                                                        id='formPassLogin'
                                                        className='form-control'
                                                    />
                                                </div>

                                                <div className='text-center pt-1 mb-5 pb-1 ex'>
                                                    <button className='btn btn-primary btn-block fa-lg mb-3' type='button'>Login</button>
                                                    <a className='branco' href='#!'>Esqueci-me da password?</a>
                                                </div>

                                                <div className='d-flex align-items-center justify-content-center pb-4'>
                                                    <p className='mb-0 me-2'>Ainda não tens conta?</p>
                                                    <button type='button' className='btn btn-outline-danger'>Cria Agora</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}