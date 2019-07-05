import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './index.scss'
import { ListView,PullToRefresh } from 'antd-mobile';

const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }

class MapPic extends React.Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
          dataSource,
          refreshing: true,
          isLoading: true,
          height: document.documentElement.clientHeight,
          useBodyScroll: false,
        };
      }
    
      // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
      // componentWillReceiveProps(nextProps) {
      //   if (nextProps.dataSource !== this.props.dataSource) {
      //     this.setState({
      //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
      //     });
      //   }
      // }
    
      componentDidUpdate() {
        document.body.style.overflow = 'hidden';
      }
    
      componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(genData()),
            height: hei,
            refreshing: false,
            isLoading: false,
          });
        }, 1500);
      }
    
      onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            refreshing: false,
            isLoading: false,
          });
        }, 60000);
      };
    
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = [...this.rData, ...genData(++pageIndex)];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      };
    
      render() {
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
          if (index < 0) {
            index = data.length - 1;
          }
          const obj = data[index--];
          return (
            <div key={rowID} style={{ padding: '0 15px' }}>
              <div
                style={{
                  lineHeight: '50px',
                  color: '#888',
                  fontSize: 18,
                  borderBottom: '1px solid #F6F6F6',
                }}
              >{obj.title}</div>
              <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                <div style={{ lineHeight: 1 }}>
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                  <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
                </div>
              </div>
            </div>
          );
        };
    
        return (
            <div>
            <ListView
              key={'1'}
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
              </div>)}
              renderRow={row}
              useBodyScroll={false}
              style={{height: this.state.height,border: '1px solid #ddd',}}
              pullToRefresh={
              <PullToRefresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />}
              onEndReached={this.onEndReached}
              pageSize={5}
            />
          </div>
        );
      }
}

const mapStateToProps = state => {
    return {
        banner: state.mappic.picBanner
    }
}

export default connect(mapStateToProps)(MapPic);
