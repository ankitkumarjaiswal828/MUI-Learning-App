import { Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import React from 'react'
import { ExpandMore } from '@mui/icons-material';

export default function Accordiannn() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={">"}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is MERN Stack</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            MERN is one of several variations of the MEAN stack (MongoDB Express
            Angular Node), where the traditional Angular.js front-end framework
            is replaced with React.js. Other variants include MEVN (MongoDB,
            Express, Vue, Node), and really any front-end JavaScript framework
            can work.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={">"}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is React</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components. It is maintained by
            Meta and a community of individual developers and companies. React
            can be used to develop single-page, mobile, or server-rendered
            applications with frameworks like Next.js.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is Next js</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Next.js is an open-source web development framework created by the
            private company Vercel providing React-based web applications with
            server-side rendering and static website generation
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
