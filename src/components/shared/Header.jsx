import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import img from '@/assets/News.png'
import { getCurrentDate } from "@/utils/getCurrentDate"

const Header = () => {
    const curentDate = getCurrentDate()
    return (
        <Box className="w-full my-5" >
            <Container>
                <Image src={img} width={500} height={500} alt="header logo" className="mx-auto" />
                <Typography color="gray" variant='body2' textAlign="center" className="my-2">
                   Jurnalism without Fear or Favicon
                </Typography>
                <Typography textAlign="center">
                {curentDate}
                </Typography>
            </Container>
        </Box>
    )
}

export default Header