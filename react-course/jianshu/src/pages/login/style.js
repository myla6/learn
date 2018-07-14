import styled from 'styled-components';

export const LoginWrapper=styled.div`
	position:fixed;
	top:57px; 
	left:0;
	background:#f1f1f1;
	width:100%; 
	height:100%;
`;

export const LoginBox=styled.div`
	width: 400px;
    margin: 60px auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    text-align:center;
    box-sizing:border-box;
`;
export const Title =styled.div`
	margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    span{
    	padding:10px;
    }
    .login{
    	font-weight: 700;
	    color: #ea6f5a;
	    border-bottom: 2px solid #ea6f5a;
    }
    b{
    	padding:10px;
    }
`;

export const InputBox =styled.div`
	margin-bottom:30px;
`;

export const Input=styled.input`
	width: 100%;
    height: 50px;
    margin-bottom: 0;
    border: 1px solid #c8c8c8;
    border-radius: 4px 4px 0 0;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    &.password{
    	border-radius: 0 0 4px 4px;
    	border-top:0;
    }
`;

export const Button=styled.button`
	margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #187cb7;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`;