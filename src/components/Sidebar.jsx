import React from 'react';
const Sidebar = () => {
    return (
        <div className='z-10 absolute inset-0 flex w-56 bg-black h-screen'>
        <div className="xl:navigation-desktop flex flex-row items-center gap-6 xl:flex-col xl:items-start py-4 px-4 xl:py-8 xl:px-8 ">
            <div className="menu flex  mt-36 text-white flex-row  justify-between xl:flex-col xl:justify-start pt-4 px-10 xl:p-0 relative select-none tracking-wider">
                <span className='flex ml-5 flex-col items-center xl:flex-row xl:items-start
                    relative
                    xl:py-4
                    font-semibold
                    nav-desktop
                    nav-desktop--active'>
                    <span className='inline xl:hidden pb-1 xl:pb-0'></span>
                    <span className="absolute top-full left-2/4 transform cursor-pointer -translate-x-2/4 xl:static xl:-translate-x-0 whitespace-nowrap text-glow">Home</span>
                </span>
                <span className='flex ml-5 flex-col items-center xl:flex-row xl:items-start
                    relative
                    xl:py-4
                    font-semibold
                    nav-desktop'>
                    <span className='inline xl:hidden pb-1 xl:pb-0'></span>
                    <span className="absolute top-full left-2/4 transform cursor-pointer -translate-x-2/4 xl:static xl:-translate-x-0 whitespace-nowrap hover:text-glow transition duration-500 ease-in-out">Projects</span>
                </span>
                    <span className='flex ml-5 flex-col items-center xl:flex-row xl:items-start
                relative
                xl:py-4
                font-semibold
                nav-desktop'>
                    <span className='inline xl:hidden pb-1 xl:pb-0'></span>
                    <span className="absolute top-full left-2/4 transform cursor-pointer -translate-x-2/4 xl:static xl:-translate-x-0 whitespace-nowrap hover:text-glow transition duration-500 ease-in-out">Work Experience</span>
                </span>
                <span className='flex ml-5 flex-col items-center xl:flex-row xl:items-start
              relative
              xl:py-4
              font-semibold
              nav-desktop'>
                    <span className='inline xl:hidden pb-1 xl:pb-0'></span>
                    <span className="absolute top-full left-2/4 transform -translate-x-2/4 cursor-pointer xl:static xl:-translate-x-0 whitespace-nowrap hover:text-glow transition duration-500 ease-in-out">Education</span>
                </span>
                <div className="absolute top-0 -left-10 nav-light-large">
                    <img className='w-full h-full object-center object-cover' src="nav-light-aqua.png" alt="selected item Home" />
                </div>
                <div className="absolute top-0  -left-10 nav-light-small">
                    <img className="w-full h-56 object-center object-cover" src="nav-light-blue.png" alt="selected item Home" />
                </div>

            </div>

            {/* icons */}
            <ul className="flex ml-6 items-center gap-3 ">
               
                <li><a href="#" target='_blank' rel="noreffer">
                    <div color="#F6F6F6" className=' hub-icon cursor-pointer' style={{
                        width: '18px',
                        height: 'auto',
                        color: '#F6F6F6',
                        transition: 'color 0.3s ease 0s'
                    }}></div>
                    <div><img src="vector.svg" alt="My SVG Image"className="filter invert" /></div>
                </a></li>
                
                <li><a href="#" target='_blank' rel="noreffer">
                    <div color="#F6F6F6" className=' hub-icon cursor-pointer' style={{
                        width: '20px',
                        height: 'auto',
                        color: '#F6F6F6',
                        transition: 'color 0.3s ease 0s'
                    }}></div>
                    <div><img src="vectorL.svg" alt="My SVG Image" className="filter invert"/></div>
                </a></li>
                <li><a href="#" target='_blank' rel="noreffer">
                    <div color="#F6F6F6" className=' hub-icon cursor-pointer' style={{
                        width: '20px',
                        height: 'auto',
                        color: '#F6F6F6',
                        transition: 'color 0.3s ease 0s'
                    }}></div>
                    <div><img src="vectorG.svg" alt="My SVG Image" className="filter invert"/></div>
                </a></li>
                <li><a href="#" target='_blank' rel="noreffer">
                    <div color="#F6F6F6" className=' hub-icon cursor-pointer' style={{
                        width: '17px',
                        height: 'auto',
                        color: '#F6F6F6',
                        transition: 'color 0.3s ease 0s'
                    }}></div>
                    <div><img src="vector2.svg" alt="My SVG Image" className="filter invert"/></div>
                </a></li>
               
                <li><a href="#" target='_blank' rel="noreffer">
                    <div color="#F6F6F6" className=' hub-icon cursor-pointer' style={{
                        width: '16px',
                        height: 'auto',
                        color: '#F6F6F6',
                        transition: 'color 0.3s ease 0s'
                    }}></div>
                    <div><img   src="vector3.svg" alt="My SVG Image"className="filter invert" /></div>
                </a></li>
            </ul>
            <div className='mt-14 ml-9 '>
                <a>
                    <button className='text-center text-white font-semibold align-middle hub-btn hub-btn-ghost overflow-hidden no-underline py-3 px-4 rounded-lg border hover:border-glow hover:text-glow transition duration-500 ease-in-out' type='button'>
                        <div className='flex items-center justify-center'>
                        <span className='text-center flex items-center  font-semibold align-middle whitespace-nowrap no-underline pr-2 text-l'>Resume</span>
                                <div className="hub-icon" color='inherit' style={{width:'15px',height:'auto',color
                                :'inherit',transition:'color 0.3s ease 0s'}} >
                                    <div><img src="vectorD.svg" alt="My SVG Image" className="filter invert" /></div>
                                </div>
                        </div>
                    </button>
                </a>
            </div>
        </div>
        </div>
        
        
    )
}

export default Sidebar