import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import topNews from '@/assets/Rectangle 8.png'
import topNews1 from '@/assets/Rectangle 10.png'
import topNews2 from '@/assets/Rectangle 11.png'
import topNews3 from '@/assets/Rectangle 12.png'
import topNews4 from '@/assets/Rectangle 9.png'
import Image from 'next/image'
import { getAllNews } from '@/utils/getAllNews'

const LatestNews = async () => {
    const { data } = await getAllNews();
    console.log("mmmm", data)

    return (
        <>
            <Box className="my-5">
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[0].thumbnail_url} alt='topNews' height={500} width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className='w-fit my-5 rounded-md bg-red-500 text-white py-1 px-3'>{data[0].category}</p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className='my-3' >
                                By {data[0].author.name}- {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.length > 200 ? data[0].details.slice(0, 200) : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/*  */}
                <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data.slice(0, 4).map((news) => (
                        <Grid key={news.id} item xs={6}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <Image
                                            src={news.thumbnail_url}
                                            width={800}
                                            height={300}
                                            alt="top news"
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <p
                                            className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                                        >
                                            {news.category}
                                        </p>
                                        <Typography gutterBottom>{news.title}</Typography>
                                        <Typography gutterBottom className="my-3">
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at
                                            its layout........
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    )
}

export default LatestNews