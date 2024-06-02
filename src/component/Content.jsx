import ListItem from './ListItem';
import React from 'react';

function Content() {
    return (
      <React.Fragment>  
       <ListItem name="Посмотреть урок по реакту"/>
       <ListItem name="Сделать домашку"/>
       <ListItem name="Позаниматься йогой"/>
       <ListItem name="Написать список покупок"/>
       </React.Fragment>
    );
  }

  export default Content;