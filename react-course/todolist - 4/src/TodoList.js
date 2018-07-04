import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './style.css';

class TodoList extends Component{

	constructor(props){
		super(props);
		//当组件的state或者props发生改变的时候，render函数就会重新执行
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
							ref={(input) => {this.input = input}}
						/>
						<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}}>
					{this.getTodoItem()}
				</ul>
				<Test content={this.state.inputValue}/>
			</Fragment>
			)
	}

	getTodoItem(){
		return this.state.list.map((item,index) => {
			return (
				<TodoItem 
					key={index}
					content={item} 
					index={index}
					deleteItem={this.handleItemDelete}
				/>
			)
		})
	}

	handleInputChange(e){
		//ref的用法操作dom
		//const value =this.input.value;
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
		//setSate 是异步的，获取ref也许不对的问题，用setSate的回调
		this.setState((prevState)=>({
			list:[...prevState.list,prevState.inputValue],
			inputValue:''
		}),() => {
			console.log(this.ul.querySelectorAll("div").length);
		});
		
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