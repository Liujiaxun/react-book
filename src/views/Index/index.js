import React from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/common/banner';
import Pic from '../../assets/img/pic.png';
import Picm from '../../assets/img/picm.png';
import Book from '../../assets/img/book.png';
import { Link } from 'react-router-dom';
import { PullToRefresh } from 'antd-mobile';
import HotCard from '../../components/common/hotCard'
import './index.scss';
function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
  }
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          down: true,
          height: document.documentElement.clientHeight,
          data: [],
          manhuaData:[
              [{thumb:`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png` , title:'火影忍者：博人传',index:87,link:''},{thumb:`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png` , title:'海贼王',index:1876,link:'/'},{thumb:`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png` , title:'一圈超人',index:87,link:'/'}],
              [{thumb:`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png` , title:'博人传',index:87,link:'/'},{thumb:`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png` , title:'海贼王',index:1876,link:'/'},{thumb:`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png` , title:'一圈超人：第二季',index:87,link:'/'}],
              [{thumb:`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png` , title:'火影忍者',index:87,link:'/'},{thumb:`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png` , title:'海贼王',index:1876,link:'/'},{thumb:`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png` , title:'一圈超人',index:87,link:'/'}],
            ]
        };
      }
      componentDidMount() {
          console.log(this.ptr)
          console.log(document.getElementById('appIndex').clientHeight)
        // const hei = this.state.height - this.ptr.offsetTop;
        setTimeout(() => this.setState({
          height: document.getElementById('appIndex').clientHeight,
          data: genData(),
        }), 0);
      }
    render(){
        return (
            (<div className='app-index' id='appIndex'>
                <PullToRefresh
                  damping={300}
                  distanceToRefresh={100}
                  ref={el => this.ptr = el}
                  style={{
                    height: this.state.height,
                    overflow: 'auto',
                  }}
                  direction={this.state.down ? 'down' : 'up'}
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                      this.setState({ refreshing: false });
                    }, 10000);
                  }}
                >
                <div style={this.state.refreshing ? {paddingTop:'10px'}:{}}>
                    <Banner imgHeight={200} data={['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']} />
                    <Bar/>
                    <HotCard title='热门漫画' data={this.state.manhuaData}/>
                    <HotCard title='热门小说' type={true} data={this.state.manhuaData}/>
                </div>
                </PullToRefresh>
              </div>)
        )
    }
}

export default Index;

function Bar(props){
    return (
        <div className='bars'>
            <Link to='/index' className='bars-item'>
                <div className='bars-icon sm'>
                    <img src={Book}  alt=''/>
                </div>
                <div className='bars-name'>
                    小说
                </div>
            </Link>
            <Link to='/index' className='bars-item'>
                <div className='bars-icon'>
                    <img src={Pic}  alt=''/>
                </div>
                <div className='bars-name'>
                    漫画
                </div>
            </Link>
            <Link to='/index' className='bars-item'>
                <div className='bars-icon'>
                    <img src={Picm}  alt=''/>
                </div>
                <div className='bars-name'>
                    贴图
                </div>
            </Link>
        </div>
    )
}