"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/Group.png'

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { Stack } from '@mui/material';
import Header from './Header';

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

function Navbar() {

    return (
       <>
       <Header />
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} width={100} height={100} alt='logo' />

                    <Box className="w-full text-center" >
                        {navItems.map((item) => (
                            <Link key={item} href={item.path}>
                                <Button className="text-white">{item.route}</Button>
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <Stack direction="row" sx={{"& svg": {
                            color: "white"
                        } }}>

                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Stack>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>
       </>
    );
}
export default Navbar;