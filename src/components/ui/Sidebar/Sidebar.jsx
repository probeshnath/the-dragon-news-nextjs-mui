import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import topNews from '@/assets/Rectangle 9.png'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <Box className="my-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} alt='topNews' width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className='w-fit my-5 rounded-md bg-red-500 text-white py-1 px-3'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-3' >
                            By Probesh Deb Nath- Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default Sidebar