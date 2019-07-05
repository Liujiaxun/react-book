import React from 'react';
import RegisterHeaderImg from '../../assets/img/register_header.png'
import LoginsHeaderImg from '../../assets/img/logins_header.png'
import LoginError from '../../assets/img/login_error.png'
import Close from '../../assets/img/close.svg'
export function RegisterModal({isShowRegisterModal,isRegisterSuccess,toggleClose}){
    return (
        isShowRegisterModal?
        <div className='modal' style={isRegisterSuccess ? {}:{height:'5.7rem',marginTop:-(5.7/2)+'rem' }}>
            <div className='modal-header'>
                <img className='headerImg' src={RegisterHeaderImg} alt=''/>
                <div className='close' onClick={toggleClose}>
                    <img src={Close} alt='close' />
                </div>
            </div>
            {
                isRegisterSuccess ? (<div className='modal-body'>
                <div className='hintSpan'> 恭喜注册成功 </div>
                <div className='btn'>
                    <span className='btn-regis' >登录</span>
                </div>
            </div>):(<div className='modal-body'>
                <div className='form'>
                    <form>
                        <div className='formItem'>
                            <div className='formLable'>
                                用户名:
                            </div>
                            <div className='formInput'>
                                <input name='user' />
                            </div>
                        </div>
                        <div className='formItem'>
                            <div className='formLable'>
                                密码:
                            </div>
                            <div className='formInput'>
                                <input name='password' type='password'/>
                            </div>
                        </div>
                        <div className='formItem'>
                            <div className='formLable'>
                                确认密码:
                            </div>
                            <div className='formInput'>
                                <input name='comfir_password' type='password'/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='btn'>
                    <span className='btn-regis' >注册</span>
                    <span className='btn-has' >已有账号</span>
                </div>
            </div>)
            }
            
            
        </div>:null
    )
}

export function LoginsModal({isShowLoginsModal,toggleClose,loginSuccess}){
    return (
        isShowLoginsModal?
        <div className='modal' style={{height:'5rem',marginTop:-(5/2)+'rem' }}>
            <div className='modal-header'>
                <img className='headerImg' src={LoginsHeaderImg} alt=''/>
                <div className='close' onClick={toggleClose}>
                    <img src={Close} alt='close' />
                </div>
            </div>
            {
                loginSuccess ? (
                <div className='modal-body'>
                <div className='form'>
                    <form>
                        <div className='formItem'>
                            <div className='formLable'>
                                用户名:
                            </div>
                            <div className='formInput'>
                                <input name='user' />
                            </div>
                        </div>
                        <div className='formItem'>
                            <div className='formLable'>
                                密码:
                            </div>
                            <div className='formInput'>
                                <input name='password' type='password'/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='btn'>
                    <span className='btn-regis' >登录</span>
                    <span className='btn-has' >忘记密码</span>
                </div>
            </div>):(
                <div className='modal-body'>
                    <div className='loginsSpan'>
                        <img src={LoginError} alt='' />
                        <p className='span'>请点击任何一处重试或找回您的密码</p>
                        <span className='findPassword'> 忘记密码 </span>
                    </div>
                </div>
            )
            }
            
        </div>:null
    )
}

export function RegisterSuccessModal({isShowRegisterSuccessModal,toggleClose}){
    return (
        isShowRegisterSuccessModal?
        <div className='modal' style={{height:'5rem',marginTop:-(5/2)+'rem' }}>
            <div className='modal-header'>
                <img className='headerImg' src={RegisterHeaderImg} alt=''/>
                <div className='close' onClick={toggleClose}>
                    <img src={Close} alt='close' />
                </div>
            </div>
            <div className='modal-body'>
                <div className='hintSpan'> 恭喜注册成功 </div>
                <div className='btn'>
                    <span className='btn-regis' >登录</span>
                </div>
            </div>
        </div>:null
    )
}