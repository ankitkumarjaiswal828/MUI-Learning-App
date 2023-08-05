import React from 'react'
import { List,ListItem,ListItemButton,ListItemText } from '@mui/material'

export default function LIstcom() {
    let course=['React','Mern','Expressjs','Nodejs']
  return (
    <div>
      <List sx={{ width: 250, background: "yellow" }}>
        {course.map((course) => (
          <ListItem>
            <ListItemButton>{'=>'}</ListItemButton>

            <ListItemText primary={course} color="white"></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
