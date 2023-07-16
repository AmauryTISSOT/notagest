import React from 'react';
import CreateFilesForm from './CreateFilesForm';

const Navbar = () => {
    return (
        <nav className='w-full py-3 px-6 flex items-center justify-between bg-slate-300 text-lg font-bold'>
            <h1>
                NotaGest
            </h1>
            <CreateFilesForm />
        </nav>
    );
};

export default Navbar;