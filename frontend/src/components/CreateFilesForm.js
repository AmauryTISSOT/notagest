import React from 'react';
import { useState } from 'react';
import featuresObject from '../constants/featuresObject';

import icons from "../assets/icons";

const CreateFilesForm = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('inProgress');
    const [features, setFeatures] = useState([]);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [menu, setMenu] = useState({ menu1: true, menu2: false, menu3: false, menu4: false });

    const [checklistItems, setChecklistItems] = useState(
        featuresObject
    );


    const handleSubmit = async (e) => {
        e.preventDefault();

        // eslint-disable-next-line array-callback-return
        checklistItems.map(item => {
            if (item.checked === true) {
                features.push(item.id);
            }
        });

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
            setFeatures([]);
            setError(null);
            setEmptyFields([]);
            console.log("new files added", json);
        }

        setMenu({
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false
        });
    };

    const handleClickType = (e) => {
        setType(e.currentTarget.getAttribute("data-value"));
        setMenu({
            menu1: false,
            menu2: true,
            menu3: false,
            menu4: false
        });
    };

    const selectTypeFilesMenu = () => {
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%]'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <span>{icons.folder_plus}</span>
                        <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setMenu(
                                {
                                    menu1: false,
                                    menu2: false,
                                    menu3: false,
                                    menu4: false,
                                }
                            )}
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
                </div>
            </div >
        );
    };

    const selectNameForm = () => {
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%] relative'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <span>{icons.folder_plus}</span>
                        <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setMenu(
                                {
                                    menu1: false,
                                    menu2: false,
                                    menu3: false,
                                    menu4: false
                                }
                            )}
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
                    <div className='absolute bottom-4 flex w-full'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto w-[150px]'
                            onClick={() => setMenu(
                                {
                                    menu1: true,
                                    menu2: false,
                                    menu3: false,
                                    menu4: false,
                                }
                            )}
                        >Précédent</button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-auto w-[150px] disabled:cursor-not-allowed' disabled={!name && true}
                            onClick={() => setMenu({
                                menu1: false,
                                menu2: false,
                                menu3: true,
                                menu4: false,
                            })}
                        >Suivant</button>
                    </div>
                </div>
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
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%] relative'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <span>{icons.folder_plus}</span>
                        <h1 className='text-2xl font-bold'>Nouveau dossier</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setMenu(
                                {
                                    menu1: false,
                                    menu2: false,
                                    menu3: false,
                                    menu4: false,
                                }
                            )}
                        >
                            {icons.x_circle}</span>
                    </div>
                    <div className='p-5'>
                        {
                            <div className="flex justify-center">
                                <ul className="grid grid-cols-2 justify-items-start gap-x-16">
                                    {checklistItems.map((item) => (
                                        <li key={item.id} className="flex items-center justify-center">
                                            <input
                                                className="w-4 h-4 mr-2"
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => handleCheckboxClick(item.id)}
                                            />
                                            <label
                                                style={{
                                                    fontWeight: item.checked ? "500" : "none",
                                                }}
                                                onClick={() => handleCheckboxClick(item.id)}
                                            >
                                                {item.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='absolute bottom-4 flex w-full'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto w-[150px]'
                            onClick={() => setMenu(
                                {
                                    menu1: false,
                                    menu2: true,
                                    menu3: false,
                                    menu4: false,
                                }
                            )}
                        >Précédent</button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-auto w-[150px]'
                            onClick={handleSubmit}
                        >Suivant</button>
                    </div>
                </div>
            </div >

        );
    };

    return (
        <>
            {menu.menu1 && selectTypeFilesMenu()}
            {menu.menu2 && type && selectNameForm()}
            {menu.menu3 && selectFeature()}

        </>
    );
};

export default CreateFilesForm;