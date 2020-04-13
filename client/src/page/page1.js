import React from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";

import "./page1.css";
import lung from "../image/lungtuu.jpg";


const page1 = () => {
    return (
        <div className="bg-page1">

            <Form className="white-crop">

                <img className="img-circle" src={lung} width="200" height="200" style={{ margin: "20px 20px 0px 70px" }}></img>

                <p style={{ margin: "10px 0px 15px 20px" }}> Registration Form </p>

                <Form.Row>
                    <Form.Group as={Col} controlId="formName" style={{ margin: "5px 0px 0px 20px" }}  >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Saran" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastname" style={{ margin: "5px 20px 0px 0px" }} >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Srisomphot" />
                    </Form.Group>
                </Form.Row>

                <Form.Row style={{ margin: "0px 5px 0px 5px" }}>
                    <Form.Group as={Col} controlId="formBirthday" style={{ margin: "5px 15px 0px 10px" }}  >
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control size="sm" type="date" />
                    </Form.Group>

                    <fieldset>
                        <Form.Group style={{ margin: "0px 10px 0px 0px" }}>
                            <Form.Label as="legend" column sm={2}  >
                                Gender
                            </Form.Label>
                            <Row>
                                <Form.Check className="font" style={{ margin: "0px 5px 0px 0px" }}
                                    type="Radio"

                                    label="Male"
                                    name="formHorizontalGender"
                                    id="formHorizontalGender1"
                                />
                                <Form.Check className="font" style={{ margin: "0px 30px 0px 0px" }}
                                    type="Radio"
                                    label="Female"
                                    name="formHorizontalGender"
                                    id="formHorizontalGender2"
                                />
                            </Row>
                        </Form.Group>
                    </fieldset>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formEmail" style={{ margin: "5px 0px 0px 20px" }}  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPhonenumber" style={{ margin: "5px 20px 0px 0px" }} >
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" />
                    </Form.Group>
                </Form.Row>

                <Form style={{ margin: "0px 20px 0px 20px" }}>
                    <Form.Group controlId="SubjectChoose">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control size="sm" as="select" custom>
                            <option>Choose option</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Button className="sub-button" type="submit">
                    Submit
                </Button>
                
                <Form.Row style={{margin:"0px 10px 0px 10px"}}>
                    <p style={{color:"red"}}>*</p> <p className="font" style={{margin:"0px 50px 0px 5px"}} >i'm sick</p>
                    <Button className="bro-button"  style={{height:"25px",width:"auto",backgroundColor:"#04ac12",borderColor: "initial",borderRadius:"30%"}} type="submit">
                    <p className="font" style={{margin:"0px 0px 5px 0px"}}>Bro</p>
                </Button>

                </Form.Row>
                

            </Form>
        </div>
    );
};

export default page1
