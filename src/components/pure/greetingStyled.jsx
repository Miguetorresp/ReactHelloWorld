import React, { useState } from 'react';

//Definiendo estilos constantes
// ? Estilo para usuario logueado
const loggedStyled = {
    color: 'white'
}

// ? Estilo para usuario no logueado
const unloggedStyled = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    // y asi controlar si el usuario estas o no logueado
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, { props.name }</p>);
    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={ logged ? loggedStyled : unloggedStyled } >
            { logged ? greetingUser() : pleaseLogin() }
            
            <button className='btn btn-info text-light' onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged);
            }} >
                { logged ? 'Logout' : 'Login' }
            </button>
            
        </div>
    );
}

export default GreetingStyled;
