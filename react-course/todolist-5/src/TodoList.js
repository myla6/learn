import React,{ Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'
import { getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'

/*const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];*/

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state=store.getState();
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleStoreChange=this.handleStoreChange.bind(this);
		this.handleButtonClick=this.handleButtonClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	render(){
		return (
				<div style={{marginTop:'10px',marginLeft:'10px'}}>
					<Input value={this.state.inputValue} placeholder='请输入' style={{width:'400px'}} onChange={this.handleInputChange}/>
					<Button type="primary" style={{marginLeft:'10px'}} onClick={this.handleButtonClick}>提交</Button>
					<List
				      bordered
				      dataSource={this.state.list}
				      renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
				      style={{width:'400px',marginTop:'10px'}}
				    />
				</div>
			)
	}

	handleInputChange(e){
		const action=getInputChangeAction(e.target.value)
		store.dispatch(action);
	}

	handleStoreChange(){
		this.setState(store.getState());
	}

	handleButtonClick(){
		const action=getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index){
		const action=getDeleteItemAction(index)
		store.dispatch(action);
	}

}

export default TodoList;