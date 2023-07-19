import {useState} from "react";
import {SideBarToggler, SideBarWrapper} from "./SideBarStyled";
import {SideBarDataLinks} from "./SideBarData";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";

const SideBar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    window.addEventListener('click', (e) => {
        if (e.target.closest('.section')) {
            setIsSideBarOpen(false);
        }
    })

    const docBody = document.body;
    isSideBarOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');

    return (
        <>
            <SideBarWrapper className={isSideBarOpen ? 'show' : ''}>
                <div className="sidebar_head">
                    <h3>50 Proyectos en 50 Dias</h3>
                </div>

                <div className="sidebar_body">
                    <ul>
                        {SideBarDataLinks.map((currValue) => {
                            const {id, name, path, icon1, icon2} = currValue;
                            return (
                                <button key={id} style={{fontSize: '25px', color: 'gold'}}>
                                    <Link to={path}>{name}
                                        <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i className={icon2}></i></i></Link>
                                </button>
                            )
                        })}
                    </ul>
                </div>

                <div className="sidebar_foot">
                    <p>
                        {new Date().getFullYear() + ' '}
                        | BOXVI
                    </p>

                    <br/>

                    <p>
                        PATROCINADORES:
                    </p>

                    <br/>
                    <ul>
                        <li>AKI PUEDE APARECER TU NOMBRE ^^, buy me a coffe</li>
                    </ul>

                    <br/>

                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1627326063491/iWr_Ppp1_.png"/>

                </div>


            </SideBarWrapper>

            <SideBarToggler
                onClick={toggleSideBar}
                title={isSideBarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            >
                <span></span>
                <span></span>
                <span></span>
            </SideBarToggler>
        </>
    );

};

export default SideBar;
