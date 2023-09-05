import React, { useState } from 'react';
import '../Styles/Style.css';
import { FaChevronRight, FaCubes, FaUsers, FaTasks, FaLock } from 'react-icons/fa';


function AdminDashboard() {
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
            <ul className="no-list sb_top_lv">
                <li onClick={handleSidebarToggle}>
                    <FaChevronRight />
                    <span>Home</span>
                </li>
                <li>
                    <FaCubes />
                    <span>Projects</span>
                    <ul className="no-list sb_dropdown clearfix">
                        <li><a>Awesome Project</a></li>
                        <li><a>No Lama No!!</a></li>
                        <li><a>I Like Trains</a></li>
                    </ul>
                </li>
                <li>
                    <FaUsers />
                    <span>CRM</span>
                    <ul className="no-list sb_dropdown clearfix">
                        <li><a>Dashboard</a></li>
                        <li><a>Contacts</a></li>
                        <li><a>Pipeline</a></li>
                        <li><a>Tasks</a></li>
                    </ul>
                </li>
                <li>
                    <FaTasks />
                    <span>Task Center</span>
                    <ul className="no-list sb_dropdown clearfix">
                        <li><a>The Dash</a></li>
                    </ul>
                </li>
                <li>
                    <FaLock />
                    <span>Access Vault</span>
                    <ul className="no-list sb_dropdown clearfix">
                        <li><a>The Vault</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

export default AdminDashboard;
