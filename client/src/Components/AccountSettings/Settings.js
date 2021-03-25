import React, { useContext } from 'react'
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Settings = () => {

    const { userData } = useContext(UserContext);

    const handleUsernameUpdate = async (e) => {
        let newUsername = document.getElementById("userInput").value;
        try {
            await axios.put(`/api/users/${userData.userId}`, 
            {
                displayName: newUsername
            });
        } catch (err) {
            console.log(err)
        }
    }

    const handlePasswordUpdate = async (e) => {
        let newPassword = document.getElementById("userPassInput").value;
        try {
            await axios.put(`/api/users/${userData.userId}`, 
            {
                password: newPassword
            });
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <Card style={{ width: '50rem', height: '20%' }}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Card.Title>Account Settings</Card.Title>
                        </ListGroup.Item>
                        <Card.Body>
                            <ListGroup.Item>
                                <Form>
                                    <Form.Label> 
                                        Change Display Name:
                            </Form.Label>
                                    <Form.Control type="username" placeholder="Enter New Display Name"  id="userInput"/>
                                    <Button variant="dark" onClick={(e) => handleUsernameUpdate(e)}>Submit</Button>
                                </Form>
                                <Form>
                                    <Form.Label>
                                        Change Password:
                            </Form.Label>
                                    <Form.Control type="password" placeholder="Enter New Password" id="userPassInput" />
                                    <Button variant="dark" onClick={(e) => handlePasswordUpdate(e)}>Submit</Button>
                                </Form>

                            </ListGroup.Item>

                        </Card.Body>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default Settings
