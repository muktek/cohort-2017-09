import React from 'react';
import LessonDay from './lessonDay.js'
import shortid from 'shortid';

const CurriculumDaysContainer = (props) => {
  let dayDemos = props.dayDemos || []
  return <div className="curriculum-days">
    {dayDemos.map((dayObj,i) => <LessonDay {...dayObj} key={shortid.generate()}/> )}
  </div>
}

export default CurriculumDaysContainer;
