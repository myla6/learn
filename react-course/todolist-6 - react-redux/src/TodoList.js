import React,{ Component } from 'react'
import { connect } from 'react-redux';

const TodoList=(props) => {
	const {inputValue,list,handleInputChange,handleClick,handleDelete} =props;
		return (
			<div>
				<input 
					value={inputValue} 
					onChange={handleInputChange}
				/>
				<button onClick={handleClick}>提交</button>
				<ul>
					{
						list.map((item,index) => {
							return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
						})
					}
				</ul>
			</div>
			)
}

// class TodoList extends Component{

// 	render(){
// 		const {inputValue,list,handleInputChange,handleClick,handleDelete} =this.props;
// 		return (
// 			<div>
// 				<input 
// 					value={inputValue} 
// 					onChange={handleInputChange}
// 				/>
// 				<button onClick={handleClick}>提交</button>
// 				<ul>
// 					{
// 						list.map((item,index) => {
// 							return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
// 						})
// 					}
// 				</ul>
// 			</div>
// 			)
// 	}
//}

const mapStateToProps=(state) => {
	return {
		inputValue:state.inputValue,
		list:state.list
	}
}

//store.dispatch,props
const mapDispatchToProps=(dispatch) => {
	return {
			handleInputChange(e){
				const action={
					type:'change_input_value',
					value:e.target.value
				};
				dispatch(action);
			},

			handleClick(){
				const action={
					type:'add_item'
				};
				dispatch(action);
			},

			handleDelete(index){
				const action={
					type:'delete_item',
					index
				}
				dispatch(action);
			}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);