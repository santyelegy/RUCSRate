import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Announcement',
        icon: <i className='bx bx-announcement'></i>,
        to: '/announcement',
        section: 'announcement'
    },
    {
        display: 'Departments',
        icon: <i className='bx bx-department'></i>,
        to: '/department',
        section: 'department'
    },
    {
        display: 'Courselist',
        icon: <i className='bx bx-courselist'></i>,
        to: '/courselist',
        section: 'courselist'
    },
    /* 
    {
        display: 'Courses',
        icon: <i className='bx bx-course'></i>,
        to: '/course',
        section: 'course'
    },
    */
    {
        display: 'Professors',
        icon: <i className='bx bx-professor'></i>,
        to: '/professor/0',
        section: 'professor'
    },
    {
        display: 'Reviews',
        icon: <i className='bx bx-review'></i>,
        to: '/review/0',
        section: 'review'
    },    
    {
        display: 'About Us',
        icon: <i className='bx bx-contributor'></i>,
        to: '/aboutus',
        section: 'aboutus'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Rate in RU
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
