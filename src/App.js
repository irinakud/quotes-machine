import './App.css'
import React from 'react'
import { randomQuote } from './randomQuote'
import { randomColor } from './randomColor'
import $ from 'jquery'
import 'jquery-color';

class App extends React.Component {
	constructor(props)	{
    super(props);
    const quote = randomQuote();
    this.state = {
            quote: quote.quote,
            author: quote.author
           };
	}

  setBackground (){
    $('#wrapper').animate({'backgroundColor': randomColor()}, 1000);
  }  
  

	handleClick()	{
    const quote = randomQuote();
    this.setState({quote: quote.quote,
                  author: quote.author});
    this.setBackground ();
	}


  render () {
    let quote = this.state.quote;
    let author = this.state.author;
    let hrefText = "https://twitter.com/intent/tweet?text=" + quote + "%20" + author;

    return (
      <div id="wrapper" className="container-fluid">
          <div id="quote-box">
        
          <div id="text">"{quote}"</div>
          <div id="author">- {author}</div>
          <div id="bottom-row">
            <div><a href={hrefText} className="btn btn-primary shadow-none" target="_top" id="tweet-quote"><i className="fa fa-twitter"></i></a></div>
            <button id="new-quote" className="btn btn-primary shadow-none" onClick={this.handleClick.bind(this)}>New Quote</button>
          </div>
        
          </div>
      </div>
    );
  }

  componentDidMount() {
    this.setBackground ();
  }
  
}

export default App;
