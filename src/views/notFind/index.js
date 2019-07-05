import React from 'react';
import NotFind from '../../assets/img/notfind.png';
import Left from '../../assets/img/left.svg';
import './indes.scss';
export function notFind404(){
    return (
        <div className='notfind'>
            <div className='img'>
                <img src={NotFind} alt='' />
                <p className='hint1'>
                哎呀！好像没有
            </p>
            <p className='hint2'>
                抱歉，您要的内容我们现在展示没有了
            </p>
            </div>
            
            <p className='btn'>
                <img alt='' src={Left} /> <span> 返回 </span>
            </p>
        </div>
    )
}