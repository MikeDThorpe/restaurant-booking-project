import React from 'react'
import { Link } from "react-router-dom";
import {Row, Col, Table, Form, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: undefined
        }
    }
    render() {
        return (
            <div>
            <Row>
            <Col xs={12} lg={4}>
                <article>
                    <div className="bg-primary p-3 rounded text-center text-white">
                        <h3>Morning</h3>
                        <p>Served 5:30am - 11:30am</p>
                    </div>
                    <Table>
                            <tbody>
                            <tr><td>American Pancakes</td><td>£5.95</td></tr>  
                            <tr><td>Eggs Benedict</td><td>£8.95</td></tr>  
                            <tr><td>Toast with Jams & Butter</td><td>£3.95</td></tr>  
                            <tr><td>Bacon & Egg Sandwhich</td><td>£4.95</td></tr>  
                            <tr><td>Full English Breakfast</td><td>£7.95</td></tr>  
                            <tr><td>Continental Breakfast</td><td>£7.95</td></tr>  
                            <tr><td>Steak & Eggs</td><td>£11.95</td></tr>  
                            <tr><td>Avocado & Sourdough</td><td>£8.95</td></tr>  
                            </tbody>
                    </Table>
                </article>
            </Col>
            <Col xs={12} lg={4}>
                <article>
                    <div className="bg-primary p-3 rounded text-center text-white">
                        <h3>Lunchtime</h3>
                        <p>Served 11:30am - 4:30pm</p>
                    </div>
                    <Table>
                            <tbody>
                            <tr><td>Halloumi Wrap</td><td>£5.95</td></tr>  
                            <tr><td>BBQ Chicken Sandwhich</td><td>£8.95</td></tr>  
                            <tr><td>Mac 'n' Cheese</td><td>£8.95</td></tr>  
                            <tr><td>Falafel Salad</td><td>£4.95</td></tr>  
                            <tr><td>Cinamon Waffles</td><td>£7.95</td></tr>  
                            <tr><td>Fried Chicken Burger</td><td>£9.95</td></tr>  
                            <tr><td>Hot Wings</td><td>£1.50 per wing</td></tr>  
                            <tr><td>Pesto Pasta Salad</td><td>£6.95</td></tr>  
                            </tbody>
                    </Table>
                </article>
            </Col>
            <Col xs={12} lg={4}>
                <article>
                <div className="bg-primary p-3 rounded text-center text-white">
                    <h3>Evening</h3>
                    <p>Served 5:00pm - 11:00pm (1:00am Saturday)</p>
                </div>
                <Table>
                    <tbody>
                        <tr><td>Lasange</td><td>£9.95</td></tr>  
                        <tr><td>Aurbegine Parma</td><td>£7.35</td></tr>  
                        <tr><td>Seafood Pie</td><td>£9.95</td></tr>  
                        <tr><td>Pasta Carbonara</td><td>£8.95</td></tr>  
                        <tr><td>Texas Sharing Platter (2 person)</td><td>£14.50</td></tr>  
                        <tr><td>The Matt Cotton Special</td><td>£12.95</td></tr>
                        <tr><td>The Levi Udeh Special</td><td>£12.95</td></tr>
                        <tr><td>The Mike Thorpe Special</td><td>£12.95</td></tr>
                    </tbody>
                </Table>
                </article>
            </Col>
            </Row>
            <div className="bg-primary my-5 py-3 px-5 rounded d-flex justify-content-between align-items-center">
                <Form onChange={(e) => this.setState({restaurant: e.currentTarget.location.value})}>
                    <select className="custom-select" name="location">
                        <option value="">--Please choose a restaurant--</option>
                        <option value="antarctic">Antarctic</option>
                        <option value="arctic">Arctic</option>
                        <option value="amazon">Amazon</option>
                        <option value="sahara">Sahara</option>
                        <option value="arabian">Arabian</option>
                    </select>
                </Form>
                <Link to={`/restaurants/${this.state.restaurant}`}>
                    <button className="btn book-btn text-white" disabled={this.state.restaurant ? false : true}>Book Table</button>
                </Link>
            </div>
        </div>
    )
    }
}



export default Menus;