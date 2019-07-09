import React from 'react';
import { connect } from 'react-redux';
class Show extends React.Component{

    render(){
        return (
            <div className='app-show'>
                <div className='title'>
                    清秀大方科二热辣剩菜情
                </div>
                <div className='show-body'>
                    <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562566995271&di=43d3f5b8f816d3e52b49d8bef1ce5727&imgtype=0&src=http%3A%2F%2Fwww.wndhw.com%2Frenti%2Fmingxing%2Fimages%2Fmx123t2.jpg'} alt=''/>
                    <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562566995271&di=43d3f5b8f816d3e52b49d8bef1ce5727&imgtype=0&src=http%3A%2F%2Fwww.wndhw.com%2Frenti%2Fmingxing%2Fimages%2Fmx123t2.jpg'} alt=''/>
                    <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562566995271&di=43d3f5b8f816d3e52b49d8bef1ce5727&imgtype=0&src=http%3A%2F%2Fwww.wndhw.com%2Frenti%2Fmingxing%2Fimages%2Fmx123t2.jpg'} alt=''/>
                    <img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562566995271&di=43d3f5b8f816d3e52b49d8bef1ce5727&imgtype=0&src=http%3A%2F%2Fwww.wndhw.com%2Frenti%2Fmingxing%2Fimages%2Fmx123t2.jpg'} alt=''/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Show)

