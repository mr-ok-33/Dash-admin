import {Card, CardContent, Typography, Box} from '@mui/material';


const homePage =()=>{
    return (
        <>
        <Box
            sx={
                {
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '110vh'
                }
               
            }
        >
            <Card
                sx={{maxWidth:400, padding:2, textAling:'center'}}
            >
                <CardContent>
                    <Typography variant='h4' component='div' gutterBottom>
                            Welcome to the Dashboard
                    </Typography>
                    <Typography variant='body1' color='text.secondary' gutterBottom>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil in nostrum reiciendis.
                         Welcome to the Dashboard
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default homePage;