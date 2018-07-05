import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}

	shouleComponentUpdate(nextProps,nextState){
		if(nextProps.content !== this.props.content){
			return true;
		}else{
			return false;
		}
	}

	render(){
		console.log('child render');
		const {content,test}=this.props;
		//JSX  -> createElement->虚拟DOM(JS对象) ->DOM
		//return <div>item</div>
		//等价于
		//return React.createElement('div',{'item'});
		
		return <div onClick={this.handleClick}>
			{test}-{content}
		</div>
	}

	handleClick(){
		const {deleteItem,index}=this.props;
		deleteItem(index);
	}

	// 一个组件要从父组件接受参数
	// 如果这个组件第一次存在于父组件中，不会被执行
	// 如果这个组件已经存在父组件中了，才会被执行
	componentWillReceiveProps(){
		console.log('child componentWillReceiveProps');
	}

	// 当这个组件即将被从页面中剔除的时候
	componentWillUnMount(){
		console.log('child componentWillUnMount');
	}
}

TodoItem.propTypes={
	test:PropTypes.string.isRequired,
	content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
	deleteItem:PropTypes.func,
	index:PropTypes.number
}

TodoItem.defaultProps={
	test:'hello world'
}

export default TodoItem;