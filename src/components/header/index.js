import React from 'react';
import './header.scss';
import Logo from '../../assets/img/logo.png'
import Menu from '../../assets/img/menu.svg'
export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state={}
    }
    showMenu = () => {
        const { isShowMenu, toggleMenu} = this.props
        toggleMenu(!isShowMenu);
    }
    showRegisterModal = () => {
        this.props.showRegisterModal();
    }
    showLoginModal = () => {
        this.props.showLoginModal();
    }
    render(){
        return (
            <div className='header'>
                <div className='headerMenu'>
                    <div className='menu' onClick={() => this.showMenu()}>
                        <img src={Menu} alt=''/>
                    </div>
                </div>
                <div className='headerLogo'>
                    <img src={Logo} alt='' />
                </div>
                <div className='headerLoginBox'>
                    <div className='box'>
                        <span className='register' onClick={() => this.showRegisterModal()}>注册</span>
                        <span className='login' onClick={() => this.showLoginModal()}>登录</span>
                    </div>
                </div>
            </div>)
    }
}
