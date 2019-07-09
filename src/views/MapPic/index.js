import React from 'react';
import { connect } from 'react-redux';
import { ListView, PullToRefresh } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Banner from '../../components/common/banner';
import Hot from '../../assets/img/hot.png';
import './index.scss';

const data = [
	{
		img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562566995271&di=43d3f5b8f816d3e52b49d8bef1ce5727&imgtype=0&src=http%3A%2F%2Fwww.wndhw.com%2Frenti%2Fmingxing%2Fimages%2Fmx123t2.jpg',
        title: '仙子玉质李小冉鲜艳红唇',
        link:'',
        id:1
	}
	// {
	//   img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
	//   title: 'McDonald\'s invites you',
	//   des: '不是所有的兼职汪都需要风吹日晒',
	// },
	// {
	//   img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
	//   title: 'Eat the week',
	//   des: '不是所有的兼职汪都需要风吹日晒',
	// },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
	const dataArr = [];
	for (let i = 0; i < NUM_ROWS; i++) {
		dataArr.push(`row - ${pIndex * NUM_ROWS + i}`);
	}
	return dataArr;
}

class MapPic extends React.Component {
	constructor(props) {
		super(props);
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2
		});
		this.state = {
			dataSource,
			refreshing: true,
			isLoading: true,
			down: true,
			height: document.documentElement.clientHeight,
			useBodyScroll: false
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
		// console.log(document.documentElement.clientHeight,ReactDOM.findDOMNode(this.lv).offsetTop)
		// const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
		setTimeout(() => {
			this.rData = genData();
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(genData()),
				height: document.documentElement.clientHeight,
				refreshing: false,
				isLoading: false
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
				isLoading: false
			});
		}, 60000);
	};

	onEndReached = event => {
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
				isLoading: false
			});
		}, 1000);
	};

	render() {
		let index = data.length - 1;
		const row = (rowData, sectionID, rowID) => {
            console.log(rowID)
			if (index < 0) {
				index = data.length - 1;
			}
			const obj = data[index--];
			return (
				<div key={rowID} className='listViewItem'>
					<Link to={'/mappic/'+obj.id} className='aDisplayInlinBlock'>
                        <img src={obj.img} alt='' />
                        <p className='title'>{obj.title}</p>
                    </Link>
				</div>
			);
		};
		const BannerList = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'];
		return (
			<div className="app-mappic">
				<PullToRefresh
					damping={300}
					distanceToRefresh={100}
					ref={el => (this.ptr = el)}
					style={{
						height: this.state.height,
						overflow: 'auto'
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
					<div style={{ paddingTop: '10px' }}>
						<Banner height={400} data={BannerList} />
						<div className="hotCard hasMarginTop" style={{ height: 'auto', marginTop: '1rem' }}>
							<div className="hot-title">
								<div className="icon">
									<img src={Hot} alt="" style={{ verticalAlign: 'top' }} />
								</div>
								<p className="name">热门美女</p>
							</div>
							<div className="hot-body" style={{ height: 'auto', paddingLeft: 0,paddingRight:0 }}>
								<ListView
									key={'1'}
									ref={el => (this.lv = el)}
									dataSource={this.state.dataSource}
									renderRow={row}
									useBodyScroll={false}
									style={{ height: this.state.height }}
									onEndReached={this.onEndReached}
									pageSize={5}
								/>
							</div>
						</div>
					</div>
				</PullToRefresh>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		banner: state.mappic.picBanner
	};
};

export default connect(mapStateToProps)(MapPic);
