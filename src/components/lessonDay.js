import React, { Component } from 'react';
import shortid from 'shortid';


const MajorLinks = (props)=>{
  let topic = props.topic
  let repoLink = `https://github.com/muktek-class-demos/${props.repoName}`
  let liveDemoLink = props.liveDemo

  if(props.liveDemo === true){
    liveDemoLink === `https://muktek-class-demos.github.io/${props.repoName}`
  }

  if (typeof liveDemo === 'string') {
    liveDemoLink === props.liveDemo
  }

  return <article>
    {
      props.repoName ?
        <a href={repoLink} className="repo-link"><i className="ion-social-github"/></a> :
        <i className="ion-android-remove repo-link repo-link--disabled"/>
    }

    <span style={{height: '30px', borderLeft: '2px solid #ddd', margin: '0px 10px'}}></span>

    {
      props.liveDemo ?
        <a href={liveDemoLink}>{topic}</a>:
        <span>{topic}</span>
    }
  </article>
}

const MiscContent = (props)=>{
  console.log(props.html)
  return <aside>
    <h5>{props.title}</h5>
    <div className="misc-content" dangerouslySetInnerHTML={{ __html: props.html}} />
  </aside>
}

const Day = (props) => {
  return (
    <section className="day-container">
      <h3>Day {props.day}</h3>
      {props.demos.map(demo => <MajorLinks {...demo} key={shortid.generate()} />) }
      {typeof props.misc === 'object' ? <MiscContent {...props.misc} /> : '' }
    </section>
  );
}

export default Day;
