/**
 * Ejemplo de componente tipo clase que dispone de los 
 * métodos de ciclo de vida
 */

import React, { Component } from "react";
import PropTypes from 'prop-types';

class LifeCicleExample extends Component {
    constructor(props){
        super(props)
        console.log('Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WillMount: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DidMount: Justo al acabar el montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(){
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(){
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(){
        console.log('WillUpdate: Justo antes de utilizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo después de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }


    render(){
        return(
            <div>
                
            </div>
        )
    }

}