import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state={
			inputValue:'',
			list:[]
		}
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
	}

	render(){
		return(
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
						<input 
							id="insertArea"
							className="input" 
							value={this.state.inputValue}
							onChange={this.handleInputChange}
						/>
						<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
			)
	}

	getTodoItem(){
		return this.state.list.map((item,index) => {
			return (
				<div key={index}>
					<TodoItem 
						content={item} 
						index={index}
						deleteItem={this.handleItemDelete}//this指向指向父组件
					/>
					{/*
						删除外面包裹的div的话，key写在todoitem上
					<li 
						key={index} 
						onClick={this.handleItemDelete.bind(this,index)}
						dangerouslySetInnerHTML={{__html:item}}
						>
					</li>*/}
				</div>
			)
		})
	}

	handleInputChange(e){
		const value=e.target.value;
		this.setState(()=>({ 
				inputValue:value
		}));
		
		//等价于下面的写法（以前的写法）
		// this.setState({
		// 	inputValue:e.target.value
		// })
	}

	handleBtnClick(){
		this.setState((prevState)=>({
			list:[...prevState.list,prevState.inputValue],
			inputValue:''
		}));

		// this.setState({
		// 	list:[...this.state.list,this.state.inputValue],
		// 	inputValue:''
		// })
	}

	handleItemDelete(index){
		
		// immutable
		// state 不允许我们做任何的修改

		/*const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})*/

		this.setState((prevState)=>{
			const list=[...prevState.list];
			list.splice(index,1);
			return {list}
		});
	}

}

export default TodoList