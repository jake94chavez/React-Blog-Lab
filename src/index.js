import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Post title={'Bears'} author={'Dwight Schrute'} body={'Bears, Beats, Battlestar Gallactica'} comments={['Identity theft is not a joke Jim!', 'Millions of families suffer every year!']} />, 
	document.getElementById('root'));
registerServiceWorker();
