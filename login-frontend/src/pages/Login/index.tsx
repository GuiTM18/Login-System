import React from 'react';
 
const Login: React.FC = () => {
    return (
        <div>
            <h2>Email</h2>
            <input type="text" />
            <h2>Senha</h2>
            <input type="text" />
            <button>Entrar</button>
        </div>
    )
}
 
export default Login;