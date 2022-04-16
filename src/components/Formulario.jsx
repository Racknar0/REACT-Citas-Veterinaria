import React from 'react';
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando formulario');
    };




    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y{' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl py-10 px-5 mb-10">
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        Nombre Mascota {nombre}
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        Nombre del Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email contacto del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="alta"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        placeholder="Fecha de alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >
                        Sitomas
                    </label>
                    <textarea
                        name=""
                        id="sintomas"
                        rows="5"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full rounded p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={'agregar paciente'}
                />
            </form>
        </div>
    );
};

export default Formulario;
