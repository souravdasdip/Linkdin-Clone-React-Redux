import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("LinkedIn is..","LinkedIn is being cloned, Warning!")}
      {newsArticle("The way to get..","The way to get started is to quit talking and begin doing.")}
      {newsArticle("Your time is..","Your time limited, so don't waste it living someone else's life.")}
      {newsArticle("If life were..","If life predictable it would cease to be life, and be without flavor.")}
      {newsArticle("The greatest..","The greatest glory in living lies not in never falling, but in rising every time we fall.")}
    </div>
  )
}

export default Widgets
