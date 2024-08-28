import {Container, Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import Link from "next/link";
import {SignIn} from "@clerk/nextjs";

export default function SignInPage() {
    return <Container maxWidth="100vw">
        <AppBar position="static" sx ={{backgroundColor: "#3f51b5"}}>
            <Toolbar>
                <Typography 
                    variant="h6" 
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    Flashcard SaaS
                </Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passHref>
                    Login
                </Link>
                </Button>
                <Button color="inherit">
                    <Link href="/sign-up" passHref>
                    Sign Up
                </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display = "flex"
            flexDirection = "column"
            alignItems = "center"
            justifyContent = "center"
            minHeight = "100vh"
        >
            <Typography variant="h4" gutterBottom> Sign In </Typography>
            <SignIn />
        </Box>
    </Container>
}