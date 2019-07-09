import React from 'react';
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './banner.scss'
export default function Banner(props){
    return (
        <Carousel
          autoplay={false}
          infinite
          style={{height:(props.height/100)+'rem '}}>
          {props.data ? props.data.map(val => (
            <Link
              key={val}
              className='banner'
              to={val.link}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                onLoad={() => {window.dispatchEvent(new Event('resize'));}}
              />
            </Link>
          )):<div></div>}
        </Carousel>
    )
}
