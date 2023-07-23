import React, { useRef, useState } from 'react';
import icons from '../assets/icons';

const Carousel = () => {
    const containerRef = useRef(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 200;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200;
        }
    };

    const test1 = [
        {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        },
    ];


    //TODO: when clicking outside modal should close the modal
    // when clicking on the element div should open a windows with a form to check the element or add a date
    // create a button to create a new element

    const modalWindows = (taskName) => {
        return (
            <div className='bg-blur-bg fixed z-10 left-0 top-0 w-full h-full backdrop-blur-sm flex justify-center items-center'
            >
                <div className='bg-slate-200 flex flex-col border-2 border-slate-900 m-auto w-[40%] h-[40%]'>
                    <div className='flex flex-row gap-2 items-center bg-slate-300 p-5 relative'>
                        <h1 className='text-2xl font-bold'>{taskName}</h1>
                        <span className='absolute top-4 right-4 cursor-pointer rounded-full'
                            onClick={() => setSelectedTask(null)}
                        >{icons.x_circle}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='relative'>
                <div className='flex items-center scroll-smooth mx-10 overflow-hidden'
                    id='scrollElement'
                    ref={containerRef}
                >
                    <span className='absolute left-0 top-0 h-full flex justify-start items-center w-10 rounded bg-gradient-to-r from-white cursor-pointer'
                        onClick={handleScrollLeft}>
                        {icons.chevron_left}
                    </span>
                    {test1.map((item, index) => {
                        return (
                            <div className='bg-slate-200 flex flex-col p-1 m-1 rounded min-w-[200px]'
                                key={index}
                                onClick={() => setSelectedTask(item.name)}
                            >
                                {item.status ?
                                    <span>{icons.check_circle}</span> :
                                    <span>{icons.arrow_right_circle}</span>}
                                <p className=''>{item.name}</p>
                                <p className='text-sm font-medium'>{item.date}</p>
                            </div>
                        );
                    })}

                    <span className='absolute right-0 top-0 z-10 h-full flex justify-start items-center w-10 rounded bg-gradient-to-l from-white cursor-pointer'
                        onClick={handleScrollRight}>
                        {icons.chevron_right}
                    </span>
                </div>
            </div>
            {selectedTask && modalWindows(selectedTask)}
        </>
    );
};

export default Carousel;