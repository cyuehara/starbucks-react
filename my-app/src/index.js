import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Icon, Image, Menu } from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import starbucksicon from './starbucksLogo.png';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Image src={starbucksicon}centered /></Menu.Item>
            <Menu.Item >Menus</Menu.Item>
            <Menu.Item >Rewards</Menu.Item>
            <Menu.Item >Gift Cards</Menu.Item>
            <Menu.Item  position="right"><Icon name="map marker alternate" size="small"> </Icon>Find a store</Menu.Item>
            <Menu.Item><Button basic color='black'>Sign In</Button></Menu.Item>
            <Menu.Item><Button color='black'>Join Now</Button></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class JoinUs extends React.Component {
  render() {
    const gridStyle = { height: "200px" };
    return (
        <div className="Join">
          <Grid container verticalAlign="center" style={gridStyle}>
            <Grid.Column>
              <Header as='h1' inverted>
                Let Us Treat You
              </Header>
              <br/>
              <h4>
                Drink coffee, earn Stars, get Rewards.
              </h4>
              <h4>
                Join Starbucks® Rewards today
              </h4>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div className="treat">
          <Grid container verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column>
                <h1>Oh Hello Again</h1>
                <h2>Cozy is a flavor and that flavor is Smoked Butterscotch. Snuggle up with the perfect treat.</h2>
                <Button basic color='green' content='Learn More' />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-58996.png" centered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <div className="Icons">
            <Icon name='spotify' size='large' />
            <Icon name='facebook official' size='large' />
            <Icon name='pinterest' size='large' />
            <Icon name='instagram' size='large' />
            <Icon name='youtube' size='large' />
            <Icon name='twitter square' size='large' />
          </div>
          <div>
            <List>
              <List.Item>Privacy Policy</List.Item>
              <List.Item>Terms of Use</List.Item>
              <List.Item>CA Supply Chain Act</List.Item>
              <List.Item>Submit Your Idea</List.Item>
            </List>
          </div>
        </div>
    )
  }
}

class Starbucks extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <JoinUs/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <Starbucks/>,
    document.getElementById('root')
);