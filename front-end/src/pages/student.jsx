import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"

export default class student extends Component {
    render() {
        const style = {
            button_update: {
                textAlign: "center"
            },
            container: {
                marginTop: "70px"
            },
            judul :{
                marginBottom: "20px"
            }
        }
        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Student</h2>
                    </Col>
                    <Col >
                        <Button variant="success">Add Student</Button>
                    </Col>
                </Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nim</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>666666</td>
                            <td>Otto</td>
                            <td>Desain Komunikasi</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>333333</td>
                            <td>Thornton</td>
                            <td>Informartika</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>222222</td>
                            <td>Larry the Bird</td>
                            <td>Menegement</td>
                            <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}