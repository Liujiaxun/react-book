import React from 'react';
import {connect} from 'react-redux';
import './index.scss';
class Books extends React.Component{
    render(){
        return (
            <div className='app-books'>
                books
            </div>
        )
    }
}

export default connect()(Books)