import React, {Component} from 'react';

import './../common/style/reset.css'
import './../common/style/base.css'


 
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer.js'




class App extends Component{

	 updateData = (id, title, category, photo, date, authorName, authorPhoto) => {
		this.setState({
		id: {id},
		title: { title },
		category:{ category },
		photo: {photo},
		date: {date},
		authorName: {authorName},
		authorPhoto: {authorPhoto}
	})
	}


	render(){
	return(
		<div>
			<Header updateData = {this.updateData}/>
			<Main/>
			{/* <Footer/> */}
		</div>
	)
	}
}


export default App;