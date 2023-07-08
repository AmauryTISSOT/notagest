import React from 'react';
import { useState } from 'react';

import icons from "../assets/icons";

const CreateFilesForm = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [features, setFeatures] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [closeMenu1, setCloseMenu1] = useState(true);
    const [closeMenu2, setCloseMenu2] = useState(true);

    const { checkListId } = useParams();
    const [checklistItems, setChecklistItems] = useState(
        checkListData[checkListId]
    );

    const featuresObject = {
        1: "Prêt",
        2: "Permis de constuire",
        3: "Autorisation d'urbanisme",
        4: "Autorisation des copropriétaires",
        5: "Vente d'un bien préalable",
        6: "Plus-value",
        7: "Représentant fiscal",
        8: "Négociation",
        9: "Procuration à établir",
        10: "DPU",
        11: "Purge préemption locataire",
        12: "Purge préemption preneur rural",
        13: "Purge préemption voisin (vois)",
        14: "Prêt vendeur à rembourser",
        15: "Ordre irrévocable",
        16: "Compromis d'agence",
    };

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
            setType('');
            setStatus('');
            setFeatures('');
            setError(null);
            setEmptyFields([]);
            console.log("new files added", json);
        }
    };

    const handleClickType = (e) => {
        setType(e.currentTarget.getAttribute("data-value"));
        setCloseMenu1(!closeMenu1);
    };

    const selectTypeFilesMenu = () => {
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
                <form className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%]'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <span>{icons.folder_plus}</span>
                        <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setCloseMenu1(false)}
                        >{icons.x_circle}</span>
                    </div>
                    <div className='p-5'>
                        <label className='font-bold'>Nature du dossier :</label>
                        <div className='flex flex-col gap-3 items-center font-semibold'>
                            <ul className='flex flex-col w-full gap-2 mt-4'>
                                <li className='flex gap-1 bg-slate-300 w-full p-3 cursor-pointer hover:bg-slate-400'
                                    data-value="vente"
                                    onClick={handleClickType}>
                                    <span>{icons.bank_notes}</span>
                                    Vente</li>
                                <li className='flex gap-1 bg-slate-300 w-full p-3 cursor-pointer hover:bg-slate-400'
                                    data-value="vente"
                                    onClick={handleClickType}>
                                    <span>{icons.shield_check}</span>
                                    Succession</li>
                                <li className='flex gap-1 bg-slate-300 w-full p-3 cursor-pointer hover:bg-slate-400'
                                    data-value="vente"
                                    onClick={handleClickType}>
                                    <span>{icons.building_office_2}</span>
                                    Modificatif EDD</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div >
        );
    };

    const selectNameForm = () => {
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
                <form className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%]'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <span>{icons.folder_plus}</span>
                        <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setCloseMenu2(false)}
                        >
                            {icons.x_circle}</span>
                    </div>
                    <div className='p-5'>
                        <label className='font-bold'>Nom du dossier : </label>
                        <input type='text'
                            className='w-full mt-3 h-8 p-2 font-bold'
                            placeholder='Nom du dossier'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className='h-full flex'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto w-[150px]'
                            onClick={() => setCloseMenu1(true)}
                        >Précédent</button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-auto w-[150px]' disabled={!name && true}>Suivant</button>
                    </div>
                </form>
            </div >
        );
    };

    const handleCheckboxClick = (id) => {
        setChecklistItems(
            checklistItems.map((item) => {
                if (item.id === id) {
                    item.checked = !item.checked;
                }
                return item;
            })
        );
    };


    const selectFeature = () => {
        <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
            <form className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%]'>
                <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                    <span>{icons.folder_plus}</span>
                    <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                    <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                        onClick={() => setCloseMenu2(false)}
                    >
                        {icons.x_circle}</span>
                </div>
                <div className='p-5'>
                    {
                        Object.values(featuresObject).map((value, index) => {
                            //checklist
                            <div className="flex justify-center mt-10">
                                <ul className="flex flex-col items-start">
                                    {checklistItems.map((item) => (
                                        <li key={item.id} className="flex items-center justify-center">
                                            <input
                                                className="w-4 h-4 mr-2"
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => handleCheckboxClick(item.id)}
                                            />
                                            <label
                                                data-testid={item.id}
                                                style={{
                                                    textDecoration: item.checked ? "line-through" : "none",
                                                }}
                                                onClick={() => handleCheckboxClick(item.id)}
                                            >
                                                {item.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>;
                        })
                    }
                </div>
                <div className='h-full flex'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto w-[150px]'
                        onClick={() => setCloseMenu1(true)}
                    >Précédent</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-auto w-[150px]' disabled={!name && true}>Suivant</button>
                </div>
            </form>
        </div >;

    };



    return (
        <>
            {closeMenu1 && selectTypeFilesMenu()}
            {closeMenu2 && type && selectNameForm()}

            {/* <input
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className={emptyFields.includes('type') ? 'error' : ''}
                /> */}
            {/* 
                    
                    <label className='block'>Nom du dossier</label>
                    <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={`border-2 border-solid border-slate-300 rounded-e ${emptyFields.includes('name') ? 'border-2 border-solid border-red-700' : ''}`}
                    />

                    <button className='bg-slate-300 p-3 rounded-e cursor-pointer'>Créer le dossier</button>
                    {error && <div className='error'>{error}</div>} */}
        </>
    );
};

export default CreateFilesForm;