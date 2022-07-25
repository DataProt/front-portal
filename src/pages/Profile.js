import React, { Component } from 'react';
import Navbartop from '../components/Navbartop';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account-profile';
import { AccountProfileDetails } from '../components/account-profile-details';
import Myprojects from '../components/account_profile-projects';


class Profile extends Component {
    render() {
        return (
            <div>
                <Navbartop></Navbartop>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            sx={{ mb: 3 }}
                            variant="h4"
                        >
                            Account
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <AccountProfile />
                            </Grid>
                            <Grid
                                item
                                lg={8}
                                md={6}
                                xs={12}
                            >
                                <AccountProfileDetails />
                            </Grid>
                        </Grid>
                        
                    </Container>
                </Box>
                <Box
                    component="projects"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            sx={{ mb: 3 }}
                            variant="h4"
                        >
                            Projects
                        </Typography>
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={12}
                            xs={12}
                        >
                            <Myprojects />
                        </Grid>
                     
                         
                        
                    </Container>
                </Box>
            </div>
        );
    }
}

export default Profile;