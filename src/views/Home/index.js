import React from 'react';
import Headers from '../../components/header';
import './home.scss';
import { connect } from 'react-redux';
import { toggloMenuShow, toggloRegisterModal,toggloLoginModal } from '../../store/actions'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { RegisterModal, LoginsModal } from '../../components/common/modal'
import {Route,Redirect,Switch} from 'react-router-dom';
import Index from '../Index';
import Contact from '../Contact';
import MapPic from '../MapPic';
import {notFind404} from '../notFind/index';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    showRegisterModal = () => {
        const {isShowRegisterModal} = this.props;
        this.props.toggleRegisterModal(!isShowRegisterModal);
    }
    showLoginModal =() => {
        const {isShowLoginsModal} = this.props;
        this.props.toggloLoginModal(!isShowLoginsModal);
    }
    toggleBack = status => {
        this.props.toggleMenu(false);
        this.props.toggleRegisterModal(false);
        this.props.toggloLoginModal(false);
    }
    render(){
        const { isShowMenu,toggleMenu,backShow,isShowRegisterModal, isShowLoginsModal,isRegisterSuccess} = this.props;
        return (
            <div className='book-app'>
                <Switch>
                    <Route  path="/index" component={Index}/>
                    <Redirect exact from='/' to='/index'></Redirect>
                    <Route path="/mappic" component={MapPic}/>
                    <Route path="/contact" component={Contact}/>
                    <Route  path="*"  component={notFind404}/>
                </Switch>
                {
                    /* back-mubu */
                    backShow ? <div className='back' onClick={() => this.toggleBack(false) }></div>:null
                }
                {/* header */}
                <Headers toggleMenu={toggleMenu} showRegisterModal={()=> this.showRegisterModal()} showLoginModal={() => this.showLoginModal()}/>
                {/* header-menu */}
                <CSSTransition
                    in={isShowMenu}
                    timeout ={200}
                    apper="true"
                    classNames = 'fade'>
                        <MenuList isShowMenu={isShowMenu } />
                </CSSTransition>
                <RegisterModal isShowRegisterModal={isShowRegisterModal} isRegisterSuccess={isRegisterSuccess} toggleClose={this.showRegisterModal}/>
                <LoginsModal isShowLoginsModal={isShowLoginsModal} toggleClose={this.showLoginModal}/>
            </div>
        )
    }
}
const MenuList = props => {
    return (
        props.isShowMenu ? 
            <div className='menuList'>
                <div className='link'>
                    <Link to='/index' > 首页 </Link>
                </div>
                <div className='link'>
                    <Link to='/index123123' > 小说区 </Link>
                </div>
                <div className='link'>
                    <Link to='/mappic' > 贴图区 </Link>
                </div>
                <div className='link'>
                    <Link to='/index' > 漫画区 </Link>
                </div>
                <div className='link'>
                    <Link to='/contact' > 联系我们 </Link>
                </div>
            </div> : <div></div>
    )
} 
const mapStateToProps = state => {
    console.log(state)
    return {
        isShowMenu:state.app.isShowMenu,
        isShowRegisterModal:state.app.isShowRegisterModal,
        isShowLoginsModal:state.app.isShowLoginsModal,
        backShow: state.app.backShow,
        isRegisterSuccess: state.app.isRegisterSuccess
    } 
}
const mapDispatchToProps = dispatch => ({
    toggleMenu: status => dispatch(toggloMenuShow(status)),
    toggleRegisterModal: status => dispatch(toggloRegisterModal(status)),
    toggloLoginModal: status => dispatch(toggloLoginModal(status))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)