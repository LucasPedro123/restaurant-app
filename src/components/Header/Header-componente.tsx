import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg'
import './Header-style.css'

function Header() {
    let [active, setActive] = useState(false);
    let [activeBgHeader, setActiveBgHeader] = useState(false);


    function toggleNavbar() {
        setActive(true);
    }

    function closeNavbar(){
        setActive(false);
    }
    function scrollHeader() {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY >= 50) {
            setActiveBgHeader(true);
        } else {
            setActiveBgHeader(false); // Se o usuário rolar para cima e o deslocamento for menor que 50, desative a classe ativa
        }
    }
    
    // Use o hook useEffect para adicionar o evento de rolagem quando o componente for montado
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader); // Adiciona o evento de rolagem à janela
    
        // Função de limpeza para remover o evento de rolagem quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []); // O segundo argumento do useEffect, um array vazio, significa que este efeito só será executado uma vez após a montagem do componente
    

    return (
        <header className={`header-container ${activeBgHeader ? "active" : ""}`} onScroll={()=>{scrollHeader()}}>

            <div className='wrapper-logo'>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='header-content'>
                <nav className={`navbar ${active ? "active" : ""}`} >
                    <div className='close-btn' onClick={()=>{closeNavbar()}}>
                        <i className="fa-solid fa-xmark-large"></i>
                    </div>

                    <button className='navbar-btn'></button>
                    
                    <a className='logo' href="#">
                        <img src={logo} alt="" />
                    </a>
                    
                    <ul className='navbar-list'>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>Home</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>Menus</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>About Us</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>Our Chefs</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>Pages</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href="#" className='navbar-link hover-underline '>
                                <div className='separator'></div>

                                <span className='span'>Contact</span>
                            </a>
                        </li>
                    </ul>

                    <div className='text-center'>
                        <p className='headline-1 navbar-title'> Visit Us</p>

                        <div className='body-4'>
                            Restaurant St, Delicious City, <br />
                            London 9578, UM
                        </div>

                        <p className='body-4 navbar-text'>Open: 9.30 am - 2.30pm</p>
                        <a href="#" className='body-4 sidebar-link'>booking@grilli.com</a>

                        <div className='separator'></div>

                        <p className='contact-label'>
                            Booking Request
                        </p>

                        <a href="+88-123-123456" className='body-1 contact-number hover-underline'>+88-123-123456</a>

                    </div>
                </nav>

                <a href="" className='btn btn-secondary'>
                    <span className='text text-1'>Find A Table</span>
                    <span className='text text-2'>Find A Table</span>
                </a>
                <button className='nav-open-btn' onClick={()=>{toggleNavbar()}}>
                    <span className='line line-1'></span>
                    <span className='line line-2'></span>
                    <span className='line line-3'></span>
                </button>

                <div className={`overlay ${active ? "active" : ""}`}>

                </div>
            </div>
        </header>
    )
}

export default Header;