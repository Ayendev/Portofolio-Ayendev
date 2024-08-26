import { AppBar, Box, Button, Link, styled, Toolbar, Typography } from "@mui/material";
import Logo from '../../Assets/LOGOAYENDEV.svg'

const StyleAppbar = styled(AppBar)({
    backgroundColor: 'rgba(0, 0, 0, 0.273)',
    backdropFilter: "blur(7px)",
    webkitBackdropFilter: "blur(7px)",
    boxShadow: "none",
    left: 0,
    right: 0,
    // backgroundColor: 'transparent !important',
    // backgroundColor: "rgb(118, 65, 52)",
    borderRadius: "50px",
    top: 12,
    zIndex: 999,
    // boxShadow: "1px 2px 5px 1px hsla(240, 100%, 99%, 1)",
    '& .MuiAppBar-root': {
        'boxShadow': "5px 2px 5px 5px red",
    }
})


export default function Header() {
    return (
        <>
            <StyleAppbar position="sticky">
                <Toolbar
                variant="regular"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',

                    }}
                >
                    {/* <Typography>Ayendev</Typography> */}
                    {/* <Link href="#"> */}
                        {/* <img id="logo" src={Logo} alt="Ayen.dev" /> */}
                    {/* </Link> */}
                    <Typography variant="h6">Ayen.dev</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '70px',
                        }}
                    >
                        <Link href="#Home">Home</Link>
                        <Link href="#About">About</Link>
                        <Link href="#Projects">Projects</Link>
                        <Link href="#Contact">Contact</Link>
                    </Box>
                    <Button variant="contained">Resource</Button>
                </Toolbar>
            </StyleAppbar>
        </>
    )
}
