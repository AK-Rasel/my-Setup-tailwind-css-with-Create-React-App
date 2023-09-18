import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import Link from "../Link/Link";
import { useState } from 'react';


const NavBer = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
    ];


    return (
        <nav className='bg-lime-600'>
            <div className='md:hidden pt-4 ml-4 text-2xl text-white' onClick={() => setOpen(!open)}>
                {
                    open === true 
                    ? <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu ></AiOutlineMenu>
                }
                
            </div>
            <ul className={
                `md:flex mr-10 bg-lime-600 p-5  text-xl text-white duration-1000 absolute md:static
                ${open ? 'left-0': '-left-80'}`
            }>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBer;