import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }),
);

function App() {
  const routes = useRoutes(true)
  const classes = useStyles();
  return (
    <Router>
      <Container>
        <header>
          <Button variant="outlined" color="primary">
            sign in
          </Button>
          <div className="logo">

          </div>
          <div>
            <div className="search">

            </div>
            <div className="basket">

            </div>
          </div>
        </header>
        <main>
          {routes}
        </main>
      </Container>
    </Router>
  );
}

export default App;
