import React from 'react';

const Header = ({tomaUnValor}) => {

    const variable = true;

    tomaUnValor(variable);


    return (
            <h1 className='font-black text-4xl text-center md:w-2/3 mx-auto'>Seguimiento Pacientes{' '}<span className='text-indigo-600'>Veterinaria</span></h1>
    );
};

export default Header;
