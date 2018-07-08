import React,{ Component } from 'react'
import { Input,Button,List } from 'antd'

// 只有一个render函数的是无状态组件
// 无状态组件性能更优
const TodoListUI = (props) =>{
	return (
		<div style={{marginTop:'10px',marginLeft:'10px'}}>
			<Input 
					value={props.inputValue} 
					placeholder='请输入' 
					style={{width:'400px'}} 
					onChange={props.handleInputChange}
			/>
			<Button type="primary" style={{marginLeft:'10px'}} onClick={props.handleButtonClick}>提交</Button>
			<List
		      bordered
		      dataSource={props.list}
		      renderItem={(item,index) => (<List.Item onClick={(index) => props.handleItemDelete(index)}>{item}</List.Item>)}
		      style={{width:'400px',marginTop:'10px'}}
		    />
		</div>
	)
}

//UI组件
// class TodoListUI extends Component{
// 	render(){
// 		return (
// 			<div style={{marginTop:'10px',marginLeft:'10px'}}>
// 				<Input 
// 						value={this.props.inputValue} 
// 						placeholder='请输入' 
// 						style={{width:'400px'}} 
// 						onChange={this.props.handleInputChange}
// 				/>
// 				<Button type="primary" style={{marginLeft:'10px'}} onClick={this.props.handleButtonClick}>提交</Button>
// 				<List
// 			      bordered
// 			      dataSource={this.props.list}
// 			      renderItem={(item,index) => (<List.Item onClick={(index) => this.props.handleItemDelete(index)}>{item}</List.Item>)}
// 			      style={{width:'400px',marginTop:'10px'}}
// 			    />
// 			</div>
// 		)
// 	}
// }

export default TodoListUI;