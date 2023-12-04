import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';


const navItems = [
    {
        route: "Home",
        path: "/"
    },
    {
        route: "Pages",
        path: "/pages"
    },
    {
        route: "Category",
        path: "/category"
    },
    {
        route: "News",
        path: "/news"
    },
    {
        route: "Contact",
        path: "/contact"
    },
    {
        route: "About",
        path: "/about"
    }
];

const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                {/*  */}

                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: "white"
                    }
                }}>
                    {/* <Stack > */}

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    {/* </Stack> */}
                </Box>
                <Box className="w-full text-center" >
                    {navItems.map((item) => (
                        <Link key={item} href={item.path}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                {/* for last part of footer */}
                <Typography color="gray" variant='body2' textAlign="center">
                    @2023 The Dragon NEWS. Design by ProbeshDeb Nath
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer