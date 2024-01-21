import React, {Component} from 'react'
import {
    Button, 
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Form,
    FormGroup, 
    Input, 
    Label
} from "reactstrap"

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem:this.props.activeItem
        }
    };
    // to check whether check box is checked
    handleChange = e => {

        let{name, value} = e.target;
        if (e.target.type){
            value = e.target.checked
        }
        const activeItem = {...this.state.activeItem, [name]: value}
        this.setState({activeItem: activeItem})
    }
    render() {
        const {toggle, onSave} = this.props
        return (
            <Modal isOpen = {true} toggle={toggle}>
                <ModalHeader  toggle={toggle}>
                    Task Item

                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='title'>
                                Title
                            </Label>
                            <Input 
                                type = 'text'
                                name='title'
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder='Enter Task  Title'
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'>
                                Description
                            </Label>
                            <Input 
                                type = 'text'
                                name='description'
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder='Enter Task  Description'
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for='completed'>
                                Completed
                            </Label>
                            <Input 
                                type = 'checkbox'
                                name='completed'
                                value={this.state.activeItem.completed}
                                onChange={this.handleChange}
                                />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='success' onClick={() => onSave(this.state.activeItem)}>Save</Button>
                </ModalFooter>
                

            </Modal>
        )
    }

}

export default CustomModal