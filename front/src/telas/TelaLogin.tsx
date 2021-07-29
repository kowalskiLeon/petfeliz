import { Card, Container, Grid } from '@material-ui/core';

const TelaLogin = () => {
    return (
        <div>
            <Container>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Card >
                        <h3>Boas vindas!</h3>
                    </Card>

                </Grid>
            </Container>
        </div>

    )
}

export default TelaLogin;