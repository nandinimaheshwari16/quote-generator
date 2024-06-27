import React, { useState } from 'react';  
import './RandomQuote.css'
import twitter_icon from '../assets/icons8-twitter-50.png'
import reload_icon from '../assets/icons8-refresh-32.png'

const RandomQuote = () => {
    let quotes = [];
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    const random = () =>  {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    const [quote,setQuote] = useState( {
        text: "Difficulties increase the nearer we get to the goal.",
        author:  "John wolfgang von Goethe",
    });
    const twitter = ()=> {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes();
    return (
        <div className='container'>
            <div className='quote'>{quote.text}</div>
            <div>
                <div className='line'></div>
                <din className='bottom'>
                    <div className='author'>- {quote.author.split(',')[0]}</div>
                    <div className='icons'>
                    <img src={reload_icon} onClick={()=>{random()}}alt=""/>
                    <img src={twitter_icon} onClick={()=>{twitter()}}alt=""/>
                    </div>
                    </din>
                </div>


        </div>
    )
}
export default RandomQuote
