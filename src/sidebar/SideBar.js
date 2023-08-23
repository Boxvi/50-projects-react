import {useState} from "react";
import {SideBarToggler, SideBarWrapper} from "./SideBarStyled";
import {
    DiezDias,
    SideBarDataLinks,
    VeinteDias
} from "./SideBarData";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";

const SideBar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen20, setIsDropdownOpen20] = useState(false);
   /* const [isDropdownOpen30, setIsDropdownOpen30] = useState(false);
    const [isDropdownOpen40, setIsDropdownOpen40] = useState(false);
    const [isDropdownOpen50, setIsDropdownOpen50] = useState(false);*/


    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    // toggling the Dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown20 = () => {
        setIsDropdownOpen20(!isDropdownOpen20);
    }

/*  const toggleDropdown30 = () => {
        setIsDropdownOpen30(!isDropdownOpen30);
    }

    const toggleDropdown40 = () => {
        setIsDropdownOpen40(!isDropdownOpen40);
    }

    const toggleDropdown50 = () => {
        setIsDropdownOpen50(!isDropdownOpen50);
    }*/

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
                                        <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i
                                            className={icon2}></i></i></Link>
                                </button>
                            )
                        })}

                        <li>
                            <div className={"dropdown"} onClick={toggleDropdown}>
                                <span style={{fontSize: '25px', color: 'gold'}}>Diez Dias</span>
                                <span>{isDropdownOpen ?
                                    <i className="bi bi-eye-slash-fill" style={{fontSize: '25px', color: 'gold'}}></i> :
                                    <i className="bi bi-eye-fill" style={{fontSize: '25px', color: 'gold'}}></i>}</span>
                            </div>
                            {
                                isDropdownOpen && (
                                    <ul>
                                        {DiezDias.map((currValue) => {
                                            const {id, name, path, icon1, icon2} = currValue;
                                            return (
                                                <button key={id} style={{fontSize: '25px', color: 'gold'}}>
                                                    <Link to={path}>{name}
                                                        <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i
                                                            className={icon2}></i></i></Link>
                                                </button>
                                            )
                                        })}
                                    </ul>
                                )
                            }
                        </li>

                        <li>
                            <div className={"dropdown"} onClick={toggleDropdown20}>
                                <span style={{fontSize: '25px', color: 'gold'}}>Veinte Dias</span>
                                <span>{isDropdownOpen20 ?
                                    <i className="bi bi-eye-slash-fill" style={{fontSize: '25px', color: 'gold'}}></i> :
                                    <i className="bi bi-eye-fill" style={{fontSize: '25px', color: 'gold'}}></i>}</span>
                            </div>
                            {
                                isDropdownOpen20 && (
                                    <ul>
                                        {VeinteDias.map((currValue) => {
                                            const {id, name, path, icon1, icon2} = currValue;
                                            return (
                                                <button key={id} style={{fontSize: '25px', color: 'gold'}}>
                                                    <Link to={path}>{name}
                                                        <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i
                                                            className={icon2}></i></i></Link>
                                                </button>
                                            )
                                        })}
                                    </ul>
                                )
                            }
                        </li>


                        {/*<li>*/}
                        {/*    <div className={"dropdown"} onClick={toggleDropdown30}>*/}
                        {/*        <span style={{fontSize: '25px', color: 'gold'}}>Treinta Dias</span>*/}
                        {/*        <span>{isDropdownOpen30 ?*/}
                        {/*            <i className="bi bi-eye-slash-fill" style={{fontSize: '25px', color: 'gold'}}></i> :*/}
                        {/*            <i className="bi bi-eye-fill" style={{fontSize: '25px', color: 'gold'}}></i>}</span>*/}
                        {/*    </div>*/}
                        {/*    {*/}
                        {/*        isDropdownOpen30 && (*/}
                        {/*            <ul>*/}
                        {/*                {TreintaDias.map((currValue) => {*/}
                        {/*                    const {id, name, path, icon1, icon2} = currValue;*/}
                        {/*                    return (*/}
                        {/*                        <button key={id} style={{fontSize: '25px', color: 'gold'}}>*/}
                        {/*                            <Link to={path}>{name}*/}
                        {/*                                <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i*/}
                        {/*                                    className={icon2}></i></i></Link>*/}
                        {/*                        </button>*/}
                        {/*                    )*/}
                        {/*                })}*/}
                        {/*            </ul>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</li>*/}


                        {/*<li>*/}
                        {/*    <div className={"dropdown"} onClick={toggleDropdown40}>*/}
                        {/*        <span style={{fontSize: '25px', color: 'gold'}}>Cuarenta Dias</span>*/}
                        {/*        <span>{isDropdownOpen40 ?*/}
                        {/*            <i className="bi bi-eye-slash-fill" style={{fontSize: '25px', color: 'gold'}}></i> :*/}
                        {/*            <i className="bi bi-eye-fill" style={{fontSize: '25px', color: 'gold'}}></i>}</span>*/}
                        {/*    </div>*/}
                        {/*    {*/}
                        {/*        isDropdownOpen40 && (*/}
                        {/*            <ul>*/}
                        {/*                {CuarentaDias.map((currValue) => {*/}
                        {/*                    const {id, name, path, icon1, icon2} = currValue;*/}
                        {/*                    return (*/}
                        {/*                        <button key={id} style={{fontSize: '25px', color: 'gold'}}>*/}
                        {/*                            <Link to={path}>{name}*/}
                        {/*                                <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i*/}
                        {/*                                    className={icon2}></i></i></Link>*/}
                        {/*                        </button>*/}
                        {/*                    )*/}
                        {/*                })}*/}
                        {/*            </ul>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</li>*/}


                        {/*<li>*/}
                        {/*    <div className={"dropdown"} onClick={toggleDropdown50}>*/}
                        {/*        <span style={{fontSize: '25px', color: 'gold'}}>Cincuenta Dias</span>*/}
                        {/*        <span>{isDropdownOpen50 ?*/}
                        {/*            <i className="bi bi-eye-slash-fill" style={{fontSize: '25px', color: 'gold'}}></i> :*/}
                        {/*            <i className="bi bi-eye-fill" style={{fontSize: '25px', color: 'gold'}}></i>}</span>*/}
                        {/*    </div>*/}
                        {/*    {*/}
                        {/*        isDropdownOpen50 && (*/}
                        {/*            <ul>*/}
                        {/*                {CincuentaDias.map((currValue) => {*/}
                        {/*                    const {id, name, path, icon1, icon2} = currValue;*/}
                        {/*                    return (*/}
                        {/*                        <button key={id} style={{fontSize: '25px', color: 'gold'}}>*/}
                        {/*                            <Link to={path}>{name}*/}
                        {/*                                <i className={icon1} style={{fontSize: '25px', color: 'gold'}}> <i*/}
                        {/*                                    className={icon2}></i></i></Link>*/}
                        {/*                        </button>*/}
                        {/*                    )*/}
                        {/*                })}*/}
                        {/*            </ul>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</li>*/}

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
                <span></span>
            </SideBarToggler>
        </>
    );

};

export default SideBar;

/*




 */
