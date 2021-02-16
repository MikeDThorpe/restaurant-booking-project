import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, CardDeck, Button, Table} from 'react-bootstrap'
import Arctic from '../assets/restaurant-thumbnails/arctic.jpg'
import Antarctic from '../assets/restaurant-thumbnails/antarctic.jpg'
import Sahara from '../assets/restaurant-thumbnails/sahara.jpg'
import Everest from '../assets/restaurant-thumbnails/everest.jpg'
import Amazon from '../assets/restaurant-thumbnails/amazon.jpg'

function RestaurantCards(props) {
  return (
    <div className="container">
      <h1 className="my-5">Restaurants</h1>
      <CardDeck className="mb-4">
        <Card>
          <Card.Img variant="top" src={Arctic} />
          <Card.Body>
            <Card.Title>Arctic Restaurant</Card.Title>
            <Card.Text>
              <Table striped>
                <tr className="pr-3">
                    <td><strong>Weekday</strong></td>
                    <td>5:30 - 23:00</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>5:30 - 1:00</td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Closed</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="mr-3">Book table</Button>
            <Button variant="outline-primary">Book table</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Antarctic} />
          <Card.Body>
            <Card.Title>Antarctic Restaurant</Card.Title>
            <Card.Text>
            <Table>
                <tr className="pr-3">
                    <td><strong>Weekday</strong></td>
                    <td>5:30 - 23:00</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>5:30 - 1:00</td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Closed</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="mr-3">Book table</Button>
            <Button variant="outline-primary">Book table</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck className="mb-4">
        <Card>
          <Card.Img variant="top" src={Sahara} />
          <Card.Body>
            <Card.Title>Sahara Restaurant</Card.Title>
            <Card.Text>
              <Table>
                <tr className="pr-3">
                    <td><strong>Weekday</strong></td>
                    <td>5:30 - 23:00</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>5:30 - 1:00</td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Closed</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="mr-3">Book table</Button>
            <Button variant="outline-primary">Book table</Button>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src={Everest} />
          <Card.Body>
            <Card.Title>Everest Restaurant</Card.Title>
            <Card.Text>
            <Table>
                <tr className="pr-3">
                    <td><strong>Weekday</strong></td>
                    <td>5:30 - 23:00</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>5:30 - 1:00</td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Closed</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="mr-3">Book table</Button>
            <Button variant="outline-primary">Book table</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck className="mb-4">
      <Card>
        <Card.Img variant="top" src={Amazon} />
          <Card.Body>
            <Card.Title>Amazon  Restaurant</Card.Title>
            <Card.Text>
            <Table>
                <tr className="pr-3">
                    <td><strong>Weekday</strong></td>
                    <td>5:30 - 23:00</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>5:30 - 1:00</td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Closed</td>
                </tr>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button className="mr-3">Book table</Button>
            <Button variant="outline-primary">Book table</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default RestaurantCards;