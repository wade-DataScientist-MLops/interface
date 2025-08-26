import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Mot de passe:', password);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Assurez-vous d'avoir les images logo.png et illustration.png dans le dossier public */}
                <img src="/logo.png" alt="Logo MOVALI.ai" className="logo" />
                <h2>Vos identifiants</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Votre adresse email de connexion</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="exemple@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group password-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* Assurez-vous d'installer Font Awesome pour cette icône */}
                        <i
                            className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} password-toggle`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                    <button type="submit" className="btn-continue">CONTINUER</button>
                </form>
                <a href="#" className="forgot-password">MOT DE PASSE OUBLIÉ</a>
                <div className="create-account">
                    <span>Vous n'avez pas de compte ?</span>
                    <a href="#">Créez un compte</a>
                </div>
            </div>
            <div className="illustration">
                <img src="/illustration.png" alt="Illustration des personnages" />
            </div>
        </div>
    );
};

export default LoginPage;