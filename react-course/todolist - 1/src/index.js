import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// PWA progressive web application
// https协议的服务器上，用户访问一次之后实现浏览器缓存
// PWA ServiceWorker 
// 简单应用不需要，可删除
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
