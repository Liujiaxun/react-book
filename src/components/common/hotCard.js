import React from 'react';
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom';
import Hot from '../../assets/img/hot.png';
export default function HotCard(props){
    return (
        <div className='hotCard hasMarginTop'>
            <div className='hot-title'>
            <div className='icon'>
                <img src={Hot} alt='' />
            </div>
            <p className='name'>{props.title}</p>
            </div>
            <div className='hot-body'>
            <Carousel
            autoplay={false}
            dots={false}
            >
            {props.data ? props.data.map((val,i) => (
                <div className='hot-item' key={i}>
                {
                    val.map((item,index) => (
                        <Link key={index} to={item.link}>
                            <img
                                src={item.thumb}
                                alt={item.thumb}
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => { window.dispatchEvent(new Event('resize'));}}
                            />
                            <p className='name'>{item.title}</p>
                            <p className='version'>第{item.index}{props.type ? '章':'期'}</p>
                        </Link>
                    ))
                }
                </div>
            )):null}
            </Carousel>
            </div>
        </div>
)
}