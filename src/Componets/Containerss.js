import { Container, Typography ,Box} from '@mui/material'
import React from 'react'

export default function Containerss() {
  return (
    <div>
      <Container maxWidth="xs" sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6"> This is extra small ----> xs </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="sm" sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6"> This is small ----> sm</Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md" sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6"> This is medium ----> md</Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="lg" sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6"> This is large ----> lg</Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="xl" sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6">
          {" "}
          The container is used to centers your content horizontally. This is
          extra large ----> xl
        </Typography>
      </Container>
      
      <br />
      <br />
      <Container fixed sx={{ backgroundColor: "yellow" }}>
        <Typography variant="h6">
          If you prefer to design for a fixed set of sizes instead of trying to
          accommodate a fully fluid viewport, you can set the fixed prop. The
          max-width matches the min-width of the current breakpoint.------>fixed
        </Typography>
      </Container>
    </div>
  );
}
