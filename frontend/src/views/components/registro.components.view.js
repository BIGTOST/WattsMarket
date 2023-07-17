import '../../css/registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from  'axios';
import React,{useEffect,useState} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function RegistraUser(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nome, setNome] = useState('');
    const [nif, setNif] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [address, setAddress] = useState('');
    const [IBAN, setIBAN] = useState('');
    const [phone, setPhone] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [userProfile, setUserProfile] = useState(0);
    const [allFit, setAllfit] = useState(false);

    const [highlightInputNome, setHighlightInputNome] = useState(false);
    const [highlightInputPhone, setHighlightInputPhone] = useState(false);
    const [highlightInputBirthday, setHighlightInputBirthday] = useState(false);
    const [highlightInputProfile, setHighlightInputProfile] = useState(false);
    const [highlightInputAddress, setHighlightInputAddress] = useState(false);
    const [highlightInputNIF, setHighlightInputNIF] = useState(false);
    const [highlightInputIBAN, setHighlightInputIBAN] = useState(false);
    const [highlightInputEmail, setHighlightInputEmail] = useState(false);
    const [highlightInputPassword, setHighlightInputPassword] = useState(false);
    const [highlightInputConfirmPassword, setHighlightInputConfirmPassword] = useState(false);



    const nextPage = ()=>{
        switch(currentPage){
            case 1:
                if(nome == '' && phone == 0 && birthday == null && userProfile == 0){
                    alert('Prencha o Formulario antes de passa para a proxima pagina');
                    setHighlightInputNome(true);
                    setHighlightInputPhone(true);
                    setHighlightInputBirthday(true);
                    setHighlightInputProfile(true);
                }
                else if(nome === '' || phone === 0 || birthday === null || userProfile === 0){
                    alert('Prencha todos os campos antes de avançar');
                    if(nome === ''){
                        setHighlightInputNome(true);
                    }
                    if(phone === 0){
                        setHighlightInputPhone(true);
                    }
                    if(birthday === null){
                        setHighlightInputBirthday(true);
                    }
                    if(userProfile === 0){
                        setHighlightInputProfile(true);
                    }
                }
                else{
                    setCurrentPage(currentPage + 1);
                }
                break;
            case 2:
                if(address === '' && nif === '' && IBAN === ''){
                    alert('Prencha o Formulario antes de passa para a proxima pagina');
                    setHighlightInputAddress(true);
                    setHighlightInputNIF(true);
                    setHighlightInputIBAN(true);
                }
                else if(address === '' || nif === '' || IBAN === ''){
                    alert('Prencha todos os campos antes de avançar');
                    if(address === ''){
                        setHighlightInputAddress(true);
                    }
                    if(nif === ''){
                        setHighlightInputNIF(true);
                    }
                    if(IBAN === ''){
                        setHighlightInputIBAN(true);
                    }
                }
                else{
                    setCurrentPage(currentPage + 1);
                }
                break;
            case 3:
                if(email === '' && password === '' && confirmPassword === ''){
                    alert('Prencha o Formulario antes de passa para a proxima pagina');
                    setHighlightInputEmail(true);
                    setHighlightInputPassword(true);
                    setHighlightInputConfirmPassword(true);
                    break;
                }
                else if(email === '' || nif === '' || IBAN === ''){
                    alert('Prencha todos os campos antes de avançar');
                    if(address === ''){
                        setHighlightInputEmail(true);
                    }
                    if(password === ''){
                        setHighlightInputPassword(true);
                    }
                    if(confirmPassword === ''){
                        setHighlightInputConfirmPassword(true);
                    }
                    break;
                }
                else{
                    if(password !== confirmPassword){
                        alert('as password não condizem')
                        setHighlightInputConfirmPassword(true);
                        setHighlightInputPassword(true)
                        break;
                    }
                    else{
                        setAllfit(true)
                        Registra(allFit);
                        break;
                    }
                    break;
                }
                break;
            default: return null

        }
        
    }

    //teste de altenativa para  aplicar data to
    const handleDateChange =(date) =>{
        setBirthday(date);
        setHighlightInputBirthday(false);
    }
    //função para trocar a pagina do Formulario
    const renderPage = ()=>{
        switch(currentPage){
            case 1:
                return(
                    <form className='mt-5'>
                        <div className='form-outline mb-4'>
                            <label className='form-label branco' htmlFor='formNomeRegister'>Nome Completo</label>
                            <input
                                type='text'
                                id='formNomeRegister'
                                className={`form-control ${highlightInputNome ? 'highlight' : ''}`}
                                value={nome}
                                onChange={value => {
                                    setNome(value.target.value);
                                    setHighlightInputNome(false);
                                }}
                            />
                        </div>
                        <div className='form-outline mb-4'>
                            <label className='Form-label branco' htmlFor='formContactoRegister'>Numero</label>
                            <input
                                type='text'
                                id='formContactoRegister'
                                className={`form-control ${highlightInputPhone ? 'highlight' : ''}`}
                                pattern='/[0-9]{9}/'
                                value={phone}
                                onChange={value => {
                                    setPhone(value.target.value);
                                    setHighlightInputPhone(false);
                                }}

                            />
                        </div>

                        <div className='form-outline mb-4'>
                            <label class='form-label branco' >Data de Nascimento: </label>&nbsp;
                            <DatePicker
                                selected={birthday}
                                onChange={handleDateChange}
                                placeholder='dd/MM/yyyy'
                                dateFormat={'dd/MM/yyyy'}
                                autoComplete='on'
                                className={`form-control ${highlightInputBirthday ? 'highlight' : ''}`}
                            />
                        </div>

                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label branco' htmlFor='inlineRadio1'>Comprador</label>
                                <input
                                    className={`form-check-label branco ${highlightInputProfile ? 'highlight' : ''}`}
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio1'
                                    value={userProfile}
                                    onChange={() => {
                                        setUserProfile(1);
                                        setHighlightInputProfile(false);
                                    }}
                                />
                            </div>
                            <div className='form-check form-check-inline'>
                                <input
                                    className={`form-check-label branco ${highlightInputProfile ? 'highlight' : ''}`}
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio2'
                                    value={2}
                                    onSelect={() =>{
                                        setUserProfile(2);
                                        setHighlightInputProfile(false);
                                    }}
                                />
                                <label className='form-check-label branco' htmlFor='inlineRadio2'>Vendedor</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label branco' htmlFor='inlineRadio2'>Comprador e Vendedor</label>
                                <input
                                    className={`form-check-label branco ${highlightInputProfile ? 'highlight' : ''}`}
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio2' value={3}
                                    onClick={() => {
                                        setUserProfile(3);
                                        setHighlightInputProfile(false);
                                    }}
                                />
                            </div>
                        </div>

                        <div className='text-center pt-1 mb-4 pb-1 ex'>
                            <button className='btn btn-primary btn-block fa-lg mb-3' type='button'  onClick={() => nextPage()}>Próximo</button>
                        </div>

                        <div className='d-flex align-items-center justify-content-center pb-4'>
                            <p className='mb-0 me-2'>Já tens conta?</p>
                            <Link to={'/login'} type='button' className='btn btn-outline-danger'>Login</Link>
                        </div>
                    </form>
                );
            case 2:
                return(
                    <form className='mt-5'>
                        <div className='form-outline mb-4'>
                            <label className='form-label branco' htmlFor='formEmailLogin'>Endereço</label>
                            <input type='text'
                                id='formMoradaRegister'
                                className={`form-control email ${highlightInputAddress ? 'highlight' : ''}`}
                                placeholder='Rua-Codigo Postal, cidade, '
                                value={address}
                                onChange={value => {
                                    setAddress(value.target.value);
                                    setHighlightInputAddress(false);
                                }}
                            />
                        </div>
                        <div className='form-outline mb-4'>
                            <label className='form-label branco' htmlFor='formNifRegister'>NIF</label>
                            <input
                                type='text'
                                id='formNifRegister'
                                className={`form-control email ${highlightInputNIF ? 'highlight' : ''}`}
                                value={nif}
                                onChange = {value => {
                                    setNif(value.target.value);
                                    setHighlightInputNIF(false)
                                }}
                            />
                        </div>
                        <div className='form-outline mb-4'>
                            <label className='form-label branco' htmlFor='formIbanRegister'>IBAN</label>
                            <input
                                type='text'
                                id='formIbanRegister'
                                className={`form-control email ${highlightInputIBAN ? 'highlight' : ''}`}
                                value={IBAN}
                                onChange={value => {
                                    setIBAN(value.target.value);
                                    setHighlightInputIBAN(false);
                                }}
                            />
                        </div>
                        <div className='text-center pt-1 mb-4 pb-1 ex'>
                            <button className='btn btn-primary btn-block fa-lg mb-3' type='button' onClick={() => nextPage()}>Próximo</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center pb-4'>
                                <p className='mb-0 me-2'>Já tens conta?</p>
                            <Link to={'/login'} type='button' className='btn btn-outline-danger'>Login</Link>
                        </div>
                    </form>
                );
            case 3:     
                return(
                    <form className='mt-5'>
                            <div className='form-outline mb-4'>
                                <label className='form-label branco' for='formEmailRegister'>Email</label>
                                <input
                                    type='email'
                                    id='formEmailRegister'
                                    className={`form-control email ${highlightInputEmail ? 'highlight' : ''}`}
                                    value={email}
                                    onChange={value=> {
                                        setEmail(value.target.value);
                                        setHighlightInputEmail(false)
                                    }}
                                />
                            </div>
                        <div className='form-outline mb-4'>
                                <label className='form-label branco' for='formPassRegister'>Password</label>
                                <input
                                    type='password'
                                    id='formPassRegister'
                                    className={`form-control email ${highlightInputPassword ? 'highlight' : ''}`}
                                    value={password}
                                    onChange={value => {
                                        setPassword(value.target.value);
                                        setHighlightInputPassword(false);
                                    }}
                                    />
                        </div>
                        <div className='form-outline mb-4'>
                            <label className='form-label branco' for='formPass2Register'>Confirmar Password</label>
                            <input
                                type='password'
                                id='formPass2Register'
                                className={`form-control email ${highlightInputConfirmPassword ? 'highlight' : ''}`}
                                value ={confirmPassword}
                                onChange={value => {
                                    setConfirmPassword(value.target.value);
                                    setHighlightInputConfirmPassword(false)
                                }}
                            />
                        </div>
                        <div className='text-center pt-1 mb-4 pb-1 ex'>
                            <button  class="btn btn-success btn-block fa-lg mb-3" type="button" onClick={() =>nextPage()}>Finalizar</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center pb-4'>
                            <p className='mb-0 me-2'>Já tens conta?</p>
                            <Link to={'/LOGIN'} type='button' className='btn btn-outline-danger'>Login</Link>
                        </div>
                    </form>
                );
            default: return null;
        };
    }
    function Registra(){
        if(allFit){
            const Url = 'http://localhost:3000/user/registrar'
            const datapost ={
                email:email,
                password:password,
                name:nome,
                NIF:nif,
                birthday:birthday,
                address: address,
                IBAN:IBAN,
                phone:phone,
                idUserProfile:userProfile
            }
            axios
            .post(Url, datapost)
            .then(response =>{
                if(response.data.success){
                    alert(response.data.message)
                }
                else{
                    alert(response.data.message)
                }
            })
            .catch(error =>{
                alert('Error 34'+ error)
            })
        }
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
                                                <Link to={'/'} className='btn btn-outline-primary btn-block fa-lg mb-3' type='button'>Voltar</Link>
                                            </div>


                                            <div className='text-center'>
                                                <h4 className='mt-1 mb-3 pb-1 colorL'>Bem vindo </h4>
                                            </div>

                                            {renderPage()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
