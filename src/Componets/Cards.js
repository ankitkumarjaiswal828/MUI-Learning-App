import React, { useState } from 'react'
import { Button, Card ,CardActions,CardContent,CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from '@mui/material'

export default function Cards() {
    const [open,setOpen] = useState(false)

  return (
    <>
      <div style={{ display: "flex" }}> 
        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
            }}
            variant="outlined"
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={()=>setOpen(true)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>

          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Are You Sure</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are You Sure To Delete this product ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button>Delete</Button>
                </DialogActions>
          </Dialog>
        </div>
        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
            }}
            variant="outlined"
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://media.istockphoto.com/id/1214111410/photo/in-technology-research-facility-chief-engineer-stands-in-the-middle-of-the-lab-and-uses.jpg?s=612x612&w=0&k=20&c=pwpzBFjUwWevuKmOfRsqbzbwwOG8eESG7_6I5zCudis="
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
              borderColor: "black",
            }}
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://media.istockphoto.com/id/1214111410/photo/in-technology-research-facility-chief-engineer-stands-in-the-middle-of-the-lab-and-uses.jpg?s=612x612&w=0&k=20&c=pwpzBFjUwWevuKmOfRsqbzbwwOG8eESG7_6I5zCudis="
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "10px",
              borderColor: "black",
            }}
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Card sx={{ maxWidth: 300, marginTop: "20px", marginLeft: "20px" }}>
            <CardMedia
              component={"img"}
              height="140"
              image="https://media.istockphoto.com/id/1214111410/photo/in-technology-research-facility-chief-engineer-stands-in-the-middle-of-the-lab-and-uses.jpg?s=612x612&w=0&k=20&c=pwpzBFjUwWevuKmOfRsqbzbwwOG8eESG7_6I5zCudis="
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 300, marginTop: "20px", marginLeft: "20px" }}>
            <CardMedia
              component={"img"}
              height="140"
              image="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 300, marginTop: "20px", marginLeft: "20px" }}>
            <CardMedia
              component={"img"}
              height="140"
              image="https://media.istockphoto.com/id/1154231467/photo/gui-concept.jpg?s=612x612&w=0&k=20&c=-nVu4-TWkgG6PkQPvy-cfRuC6Rkw8_17NzpAx4hWw8s="
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 300, marginTop: "20px", marginLeft: "20px" }}>
            <CardMedia
              component={"img"}
              height="140"
              image="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "10px",
            }}
          >
            <CardMedia
              component={"img"}
              height="140"
              image="https://media.istockphoto.com/id/1335050732/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=612x612&w=0&k=20&c=5zAzuOclaBXMudc56RisW9yNyGxLt3wO8Xh2wtShmo0="
              alt="IT image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component={"div"}>
                Web Developer
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                accusantium quo iure repellat vero architecto nisi dolorem
                voluptatem, at ad neque aperiam pariatur eveniet perferendis
                praesentium reiciendis atque officia placeat!
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary" onClick={()=>setOpen(true)}>
                Delete
              </Button>
            </CardActions>
          </Card>

          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Are You Sure</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Are You Sure To Delete this product ?
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button>Cancle</Button>
              <Button>Delete</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}
