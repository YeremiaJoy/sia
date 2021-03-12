import React, { Component } from 'react'
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import ModalStudent from '../component/ModalStudent';
import axios from "axios"
import { URL_API } from '../utils/constant';


export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            key:1,
            majors: [],
            students: [],
            datas: [],
            index: 1,
            name: "",
            nim: "",
            major: "",
        }
    }

    componentDidMount() {
        axios.get(URL_API + "major").then((res) => {
            this.setState({ majors: res.data })
        })

        axios.get(URL_API + "student").then((res) => {
            this.setState({ students: res.data })
        })
    }

    handleChange = (event) => {
        this.state({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.PreventDefault()

        let indexID = 0
        this.state.students.map(student => indexID++)

        this.setState({
            datas: [
                ...this.state.datas,
                {
                    nim: this.state.nim,
                    name: this.state.name,
                    major: this.this.state.major,
                },
            ],
        });

        const dataStudent = {
            id: indexID,
            nim: this.state.nim,
            name: this.state.name,
            major: this.state.major
        }

        axios.post(URL_API+"student", dataStudent).then((res) =>{
            console.log(res.data);
        })

        this.setState({
            nim: "",
            name:"",
            major:"",
        })
    }

    render() {
        const style = {
            button_update: {
                textAlign: "center"
            },
            container: {
                marginTop: "70px"
            },
            judul: {
                marginBottom: "20px"
            }
        }

        const handleClose = () => this.setState({ show: false })
        const handleShow = () => this.setState({ show: true })
        return (
            <Container style={style.container}>
                <Row style={style.judul}>
                    <Col xs={12} md={10}>
                        <h2>List Student</h2>
                        {/* {this.state.majors.map(major => <p>{major.code}</p> )}  */}
                    </Col>
                    <Col >
                        <Button variant="success" onClick={handleShow}>Add Student</Button>
                        <ModalStudent 
                            key={this.state.key}
                            show={this.state.show} 
                            onHide={handleClose} 
                            Major={this.state.majors} 
                            HandleSubmit={this.handleSubmit} 
                            HandleChange={(event) => this.handleChange}/>
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
                        {this.state.students.map(student =>
                            <tr>
                                <td>{this.state.index}</td>
                                <td>{student.nim}</td>
                                <td>{student.name}</td>
                                <td>{student.major}</td>
                                <td><Button variant="warning" style={style.button_update}>Update</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
