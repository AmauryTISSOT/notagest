import React from 'react';
import { useState } from 'react';

import icons from "../assets/icons";

const FilesForm = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [features, setFeatures] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const files = { type, name, status, features };

        // POST response
        const response = await fetch('/api/files', {
            method: 'POST',
            body: JSON.stringify(files),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        // Reset fields when data is submitted
        if (response.ok) {
            setType('');
            setName('');
            setStatus('');
            setFeatures('');
            setError(null);
            setEmptyFields([]);
            console.log("new files added", json);
        }
    };

    return (
        <form className='bg-slate-200 flex flex-col border-2 border-slate-900 p-3' onSubmit={handleSubmit}>
            <div className='flex flex-row gap-2 items-center'>
                <span>{icons.folder_plus}</span>
                <h1 className='text-xl font-bold'>Nouveau dossier</h1>
            </div>
            <div className='flex flex-row gap-3 items-center font-semibold'>

                <label>Nature du dossier</label>
                {/* <input
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className={emptyFields.includes('type') ? 'error' : ''}
                /> */}

                {/* //TODO: onchange select */}
                <select name='type'>
                    <option value="">Sélectionner un type de dossier</option>
                    <option value="vente">VENTE</option>
                    <option value="succession">SUCCESSION</option>
                    <option value="modifEDD">MODIFICATIF EDD</option>
                </select>

                <label className='block'>Nom du dossier</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={`border-2 border-solid border-slate-300 rounded-e ${emptyFields.includes('name') ? 'border-2 border-solid border-red-700' : ''}`}
                />

                <button className='bg-slate-300 p-3 rounded-e cursor-pointer'>Créer le dossier</button>
                {error && <div className='error'>{error}</div>}
            </div>
        </form>
    );
};

export default FilesForm;