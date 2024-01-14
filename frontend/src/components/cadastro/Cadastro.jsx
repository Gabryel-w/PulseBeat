import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

function Cadastro() {
    const [loginData, setLoginData] = useState({
        loginNome: '',
        loginSenha: '',
    });

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/Login', loginData);
            console.log(response.data);
            // Retornar Home depois de logado
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/Cadastro', formData);
            console.log(response.data);
            // Retornar Home depois de Cadastrado
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <>
            <main>
                <section className="container">
                    <div className="login">
                        <i className="fas fa-sign-in-alt"></i>
                        <strong>Bem Vindo!</strong>
                        <span>Faça login em sua conta</span>

                        <form onSubmit={handleLoginSubmit}>
                            <fieldset>
                                <div className="form">
                                    <div className="form-row">
                                        <i className="fas fa-user"></i>
                                        <label className="form-label" htmlFor="loginNome">Nome</label>
                                        <input type="text" className="form-text" placeholder="Insira Seu Nome" name="loginNome" value={loginData.loginNome} onChange={handleLoginChange} />
                                    </div>
                                    <div className="form-row">
                                        <i className="fas fa-eye"></i>
                                        <label className="form-label" htmlFor="loginSenha">Senha</label>
                                        <input type="password" className="form-text" placeholder="Insira Senha" name="loginSenha" value={loginData.loginSenha} onChange={handleLoginChange} />
                                    </div>
                                    <div className="form-row button-login">
                                        <button className="btn btn-login">Entrar <i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    <div className="register">
                        <i className="fas fa-user-circle"></i>
                        <strong>Criar Conta!</strong>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="form">
                                    <div className="form-row">
                                        <i className="fas fa-user"></i>
                                        <label className="form-label" htmlFor="nome">Nome</label>
                                        <input type="text" className="form-text" placeholder="Insira Seu Nome" name="nome" value={formData.nome} onChange={handleChange} required />
                                    </div>
                                    <div className="form-row">
                                        <i className="fas fa-envelope"></i>
                                        <label className="form-label" htmlFor="email">E-mail</label>
                                        <input type="email" className="form-text" placeholder="Insira Seu E-mail" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-row">
                                        <i className="fas fa-lock"></i>
                                        <label className="form-label" htmlFor="senha">Senha</label>
                                        <input type="password" className="form-text" placeholder="Insira Sua Senha" name="senha" value={formData.senha} onChange={handleChange} required />
                                    </div>
                                    <div className="form-row button-login">
                                        <button className="btn btn-login" type="submit">Criar <i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Cadastro;