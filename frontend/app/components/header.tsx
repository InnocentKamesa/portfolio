export default function Header() {
    return (    
            <div className=" my-2 flex flex-row p-2 w-full justify-center items-center sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
                <div className="mr-auto">
                    <a className="btn btn-ghost text-black text-xl hover:bg-gray-100 hover:border-0">Innocent</a>
                </div>

                {/**navigate */}
                <div className="ml-auto hidden md:flex flex-row items-center gap-4 px-1">
                    <a>About</a>
                    <a>Skills</a>
                    <a>Projects</a>

                    {/**contact me */}
                    <div className="">
                        <a className="btn btn-neutral rounded-full">Contact</a>
                    </div>
                </div>
                {/**dropdown */}
                <div className=" dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
    )
}
