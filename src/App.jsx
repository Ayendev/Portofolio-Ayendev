import { Box, Button, Divider, IconButton, Link, List, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import './App.css'
import Header from './Components/Navigation/Header'
import Logo from './Assets/LOGOAYENDEV.svg'
import Space from './Assets/Space.jpg'


function App() {

  return (
    <>

      <div className='container showreel'>
        <div>
          <Typography variant='h2'>UNIVERS</Typography>
          <Typography variant='h6'>AYEN.DEV</Typography>
          <Typography variant='Subtitle1'>I'M A DEVELOPER</Typography>
        </div>
        {/* <KeyboardArrowDownRoundedIcon sx={{ fontSize: 50, width: 80, height: 80, fontWeight: '100' }} /> */}
        <button className='button'></button>
      </div>
      <div className='placeholder'>
      </div>
      <div className='container space'>
        <div className='space_content' >
          <Header />
          <Box id={"header_placeholder"}>
            <Box component={"div"} >
              <Typography component={"p"} variant='h2' color={"white"} align='justify' >Lorem Ipsum</Typography>
              <Typography variant='body1' component={"p"} color={"white"} align='justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a dolorem doloribus nostrum molestiae voluptates odit ea dicta illo possimus eveniet et,
                ex exercitationem dolor ut expedita soluta obcaecati recusandae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a dolorem doloribus nostrum molestiae voluptates odit ea dicta illo possimus eveniet et,
              </Typography>
              <Typography variant='body1' component={"p"} color={"white"} align='justify' sx={{ marginTop: "20px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a dolorem doloribus nostrum molestiae voluptates odit ea dicta illo possimus eveniet et,
              </Typography>
            </Box>
            <img src={Logo} alt="logo" className='profile' />
          </Box>
          <Box sx={{
            display: "flex",
            gap: "20px",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: "40px 40px",
            marginTop: '10px',
            color: "hsla(240, 100%, 99%, 1)",
          }}
          >
            <Box component={"div"} sx={{ width: "250px", height: "250px", border: "1px solid hsla(240, 100%, 99%, 1)", }}>
              <Typography>Social Network 1</Typography>
            </Box>
            <Box component={"div"} sx={{ width: "250px", height: "250px", border: "1px solid hsla(240, 100%, 99%, 1)" }}>
              <Typography>Social Network 2</Typography>
            </Box>
            <Box component={"div"} sx={{ width: "250px", height: "250px", border: "1px solid hsla(240, 100%, 99%, 1)" }}>
              <Typography>Social Network 3</Typography>
            </Box>
            <Box component={"div"} sx={{ width: "250px", height: "250px", border: "1px solid hsla(240, 100%, 99%, 1)" }}>
              <Typography>Social Network 4</Typography>
            </Box>
          </Box>
          <Box component={"main"}>
            <section id='Home'>
              <Box component={"div"} sx={{ width: "500px", paddingLeft: "20px", textAlign: "justify" }}>
                <Typography variant='h3'>SECTION 0</Typography>
                <Typography variant='h5'>SECTION 1</Typography>
                <Typography variant='body1'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugiat natus voluptates distinctio in? Cum repellat itaque molestiae fuga,
                  quo officiis repellendus doloribus ipsam cupiditate! Quaerat officia delectus facere enim?
                </Typography>
              </Box>
              <img src={Logo} alt="logo" className='profile' />
            </section>
            <section id='About'>
              <Box component={"div"} sx={{ width: "500px", paddingLeft: "20px" }}>
                <Typography variant='h3'>SECTION 0</Typography>
                <Typography variant='h5'>SECTION 1</Typography>
                <Typography variant='body1'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugiat natus voluptates distinctio in? Cum repellat itaque molestiae fuga,
                  quo officiis repellendus doloribus ipsam cupiditate! Quaerat officia delectus facere enim?
                </Typography>
              </Box>
              <img src={Logo} alt="logo" className='profile' />
            </section>
            <section id='Projects'>
              <Box  sx={{display: "flex", flexDirection: 'row', gap: "50px", justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
                <Paper variant='elevated' component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)" }}>
                  <Typography>Social Network 1</Typography>
                </Paper>
                <Paper  component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)" }}>
                  <Typography>Social Network 2</Typography>
                </Paper>
                <Paper component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)" }}>
                  <Typography>Social Network 2</Typography>
                </Paper>
              </Box>
              <Box sx={{ display: "flex", gap: "50px", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                <Paper component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)" }}>
                  <Typography>Social Network 3</Typography>
                </Paper>
                <Paper component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)" }}>
                  <Typography>Social Network 4</Typography>
                </Paper>
                <Paper component={"div"} sx={{ width: "250px", height: "250px", backgroundColor: "hsla(248, 100%, 68%, 1)"}}>
                  <Typography>Social Network 4</Typography>
                </Paper>
              </Box>
            </section>
            <section id='Contact'>
              <Box >
                <Stack sx={{ paddingLeft: "20px", textAlign: "justify" }}>
                  <Typography variant='h3'>SECTION 0</Typography>
                  <Typography variant='body1'>
                    Lorem ipsum dolorquo officiis repellendus doloribus 
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", gap: "50px", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                <img src={Space} alt="logo" width={"200px"} height={"150px"} />
                <img src={Space} alt="logo" width={"200px"} height={"150px"} />
              </Box>
            </section>
          </Box>
          <Box component={"footer"} sx={{padding: "30px 0px"}}>
            <Stack spacing={1} display={"flex"} direction="column" sx={{maxWidth: "400px", margin: "0 auto", padding: "20px", borderRadius: "10px" }}>
              <List sx={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "center" }} >
                <Link component="a" href="youtube.com" >Home</Link>
                <Link component="a" href="youtube.com" >About</Link>
                <Link component="a" href="youtube.com" >Projects</Link>
                <Link component="a" href="youtube.com" >Contact</Link>
              </List>
              <List sx={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }} >
                <ListItemButton>
                  <ListItemText primary="facebook" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="twitter" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="instagram" />
                </ListItemButton>
              </List>
            </Stack>
            <Box id="divider" sx={{width: "100%", height: "1px", backgroundColor: "hsla(248, 100%, 68%, 1)", margin: "20px 0"}}></Box>
            <Stack sx={{display: "flex",flexDirection: "row", gap: "10px", justifyContent: "space-between", alignItems: "center"}}>
              <Typography variant='subtitle1'>Footer</Typography>
              <Typography variant='subtitle1'>Footer</Typography>
            </Stack>
          </Box>
        </div >
      </div >
    </>
  )
}

export default App
