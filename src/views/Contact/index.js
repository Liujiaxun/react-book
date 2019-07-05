import React from 'react';
import Jy from '../../assets/img/jy.png'
import BottomImg from '../../assets/img/bottom.png'
export default function Contact(props){
    console.log(props);
    return (
        <div className='app-contact'>
            <p className='title'> 联系我们  </p>
            <p className='email'> email:  mantomanga@gmail.com</p>
            <p className='kefu'> 在线客服： <a href='javascript:void(0)'>客服系统连接</a> </p>
            <div className='input'>
                <a className='btn' href='javscript:;'>提交</a>
                <div className='input-header'>
                    <img  src={Jy} alt='' />
                </div>
                <textarea></textarea>
            </div>
            <div className='footer'>
                <img src={BottomImg} alt='' />
            </div>
        </div>
    )
}