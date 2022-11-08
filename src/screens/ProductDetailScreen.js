import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import one from '../style/static/images/1.jpeg';
import two from '../style/static/images/2.jpeg';
import three from '../style/static/images/3.jpeg';
import four from '../style/static/images/4.jpeg';
import ProductContainer from './ProductContainer';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function ProductDetailScreen() {

    //const { id } = useParams();
    const [selectedOption, setSelectedOption] = useState('42');
    const [qty, setQty] = useState(1);
    //const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleClick = e => {
        // 👇️ toggle isActive state on click
        //setIsActive(current => !current);
        e.currentTarget.classList.toggle('current');
    };

    const onValueChange = e => {
        setSelectedOption(e.target.value)
        console.log(e.target.value)
    }

    const decrement = e => {
        let count = qty
        --count
        if (count === 0){
            setQty(1)
        }else {
            setQty(count)
        }
    }

    const increment = e => {
        setQty(qty + 1)
    }

    return (
        <>
        <div className="px-0 py-0 lg:px-4 lg:py-8 lg:w-11/12 w-full mx-auto">
            <div className='w-full mx-auto lg:relative lg:flex lg:justify-center lg:items-start lg:gap-10'>
                <div className='hidden lg:grid lg:grid-cols-2 lg:sticky flex-wrap gap-2 max-w-[170px] top-[140px]'>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                    <img src={one} className='w-[45px] h-[56px] lg:w-[70px] lg:h-[91px] cursor-pointer' alt='one'/>
                </div>
                <div className='relative overflow-hidden lg:overflow-auto lg:w-[40%] xl:w-[44.5%]'>
                    <img src={one} className='cursor-pointer' alt='one'/>
                </div>
                <div className='p-5 text-left lg:p-0 lg:w-[30%] lg:max-w-[460px] lg:top-[100px]'>
                    <h1 className='mb-1 text-sm md:text-lg font-bold text-left'>Make Your Own Luck Military Overshirt - Olive</h1>
                    <div className="text-base font-thin">
                        <span className="price" data-product-price="">$105</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <p className="flex items-center w-full mt-0 mb-1 pt-2 pb-1 text-sm text-gray-600 font-thin">Colour: 
                            <span className='text-gray-900'>&nbsp;Black</span>
                        </p>
                        <Link to='#' className={`rounded-full`} onClick={handleClick}>
                            <span className='bg-teal-800 rounded-full block w-6 h-6'></span>
                        </Link>
                        <Link to='#' className={`rounded-full ml-2`} onClick={handleClick}>
                            <span className='bg-brown-800 rounded-full block w-6 h-6'></span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center radio-toolbar">
                        <p className="flex items-center w-full mt-0 mb-1 pt-3 pb-1 text-sm text-gray-600 font-thin">Size: 
                            <span className='text-gray-900'>&nbsp;{selectedOption}</span>
                        </p>
                        <label className="unavailable">
                            <input type="radio" name="size" value="38"
                            checked={selectedOption === '38'}
                            onChange={onValueChange} />
                            <span>38</span>
                        </label>
                        <label className="unavailable">
                            <input type="radio" name="size" value="41"
                            checked={selectedOption === '41'}
                            onChange={onValueChange} />
                            <span>41</span>
                        </label>
                        <label className="">
                            <input type="radio" name="size" value="42"
                            checked={selectedOption === '42'}
                            onChange={onValueChange} />
                            <span>42</span>
                        </label>
                        <label className="unavailable">
                            <input type="radio" name="size" value="43"
                            checked={selectedOption === '43'}
                            onChange={onValueChange} />
                            <span>43</span>
                        </label>
                        <label className="">
                            <input type="radio" name="size" value="44"
                            checked={selectedOption === '44'}
                            onChange={onValueChange} />
                            <span>44</span>
                        </label>
                        <label className="">
                            <input type="radio" name="size" value="46"
                            checked={selectedOption === '46'}
                            onChange={(onValueChange)} />
                            <span>46</span>
                        </label>
                    </div>
                    <div className="custom-number-input w-32">
                        <label htmlFor="custom-input-number" className="w-full mt-0 mb-1 pt-4 pb-1 text-sm text-gray-600 font-thin">Quantity
                        </label>
                        <div className="flex flex-row h-10 w-full relative mt-1 border border-gray-900">
                            <button data-action="decrement" onClick={decrement} className="bg-gray-100 text-gray-800 hover:bg-gray-200 h-full w-20 cursor-pointer outline-none focus:outline-none">
                                <span className="text-lg m-auto font-bold">&mdash;</span>
                            </button>
                            <input 
                                type="number"
                                className="flex items-center justify-center text-gray-900 outline-none focus:outline-none text-center w-full bg-transparent font-thin text-sm hover:text-black"
                                name="custom-input-number" value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            />
                            <button data-action="increment" onClick={increment} className="bg-gray-100 text-gray-800 hover:bg-gray-200 h-full w-20 cursor-pointer focus:outline-none">
                                <span className="text-lg text-center m-auto font-bold">&#xff0b;</span>
                            </button>
                        </div>
                    </div>
                    <button
                        className="flex w-full items-center justify-center px-4 py-3 my-5 text-xs font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:bg-gray-800"
                        onClick={() => {console.log(selectedOption)}}
                    >
                        <span>Add To Cart</span>
                    </button>
                    <>
                        <Accordion open={open === 1}>
                            <AccordionHeader className='text-sm text-gray-900 font-body' onClick={() => handleOpen(1)}>
                                Description
                            </AccordionHeader>
                            <AccordionBody className='text-gray-900 text-sm font-body font-thin'>
                                We're not always in the position that we want to be at. We're
                                constantly growing. We're constantly making mistakes. We're constantly
                                trying to express ourselves and actualize our dreams.
                                <ul className='list-disc list-outside px-10'>
                                    <li className='py-1'>Free shipping on all orders across Lagos</li>
                                    <li>Orders dispatched within 1-2 working days</li>
                                    <li className='py-1'>Free shipping on all orders across Lagos</li>
                                    <li>Orders dispatched within 1-2 working days</li>
                                    <li className='py-1'>Free shipping on all orders across Lagos</li>
                                    <li>Orders dispatched within 1-2 working days</li>
                                </ul>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader className='text-sm text-gray-900 font-body' onClick={() => handleOpen(2)}>
                            Fit
                            </AccordionHeader>
                            <AccordionBody className='text-gray-900 text-sm font-body font-thin'>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} className='h-full'>
                            <AccordionHeader className='text-sm text-gray-900 font-body' onClick={() => handleOpen(3)}>
                                Delivery
                            </AccordionHeader>
                            <AccordionBody className='text-gray-900 text-sm font-body font-thin' height='220px'>
                                <ul className='list-disc list-outside px-10'>
                                    <li className='py-1'>Free shipping on all orders across Lagos</li>
                                    <li>Orders dispatched within 1-2 working days</li>
                                    <li className='py-1'>Free shipping on all orders across Lagos</li>
                                    <li>Orders dispatched within 1-2 working days</li>
                                </ul>
                            </AccordionBody>
                        </Accordion>
                    </>
                </div>
            </div>
        </div>
        <ProductContainer>
            <section>
            <div className='mt-8'>
                <h1 className='text-gray-900 text-lg font-bold text-left'>Recommended for you</h1>
            </div>
            <div className='py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                    <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={one} alt='product'></img>
                    </div>
                    <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                    <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                    </div>
                </Link>
                </div>
                <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                    <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={two} alt='product'></img>
                    </div>
                    <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                    <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                    </div>
                </Link>
                </div>
                <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                    <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={three} alt='product'></img>
                    </div>
                    <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                    <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                    </div>
                </Link>
                </div>
                <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                    <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={four} alt='product'></img>
                    </div>
                    <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                    <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                    </div>
                </Link>
                </div>
            </div>
            </section>
        </ProductContainer>
        </>
    )
}

export default ProductDetailScreen