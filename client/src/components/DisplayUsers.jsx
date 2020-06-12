import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



class DisplayUser extends Component {
    state = {
        users: []
      }

    async componentDidMount() {
        await this.fetchUsers();
      };
    
    async fetchUsers() {
        axios.get('/users')
            .then((response) => {
            const { users } = response.data;
            console.log(users)
            this.setState({ users: [...this.state.users, ...users] })
            })
            .catch(() => alert('Error fetching new users'));
    };

    render() {
        const allUsers = this.props.users;
        const users = !isEmpty(allUsers) ? allUsers : [];
        console.log(isEmpty)

        return (
            <div className="users">
                {!isEmpty(users) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Card ID</TableCell>
                            <TableCell align="right">Bio</TableCell>
                            <TableCell align="right">Snapchat</TableCell>
                            <TableCell align="right">Facebook</TableCell>
                            <TableCell align="right">TikTok</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({ name, cardID, bio, snapchat, facebook, tikTok, email }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {name ? name : 'No Name Found'} </TableCell>
                                <TableCell align="right">{cardID ? cardID : 'No Card ID Found'}</TableCell>
                                <TableCell align="right">{bio ? bio : 'No Bio Found'}</TableCell>
                                <TableCell align="right">{snapchat ? snapchat : 'No Snapchat Found'}</TableCell>
                                <TableCell align="right">{facebook ? facebook : 'No Facebook Found'}</TableCell>
                                <TableCell align="right">{tikTok ? tikTok : 'No TikTok Found'}</TableCell>
                                <TableCell align="right">{email ? email : 'No Email Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayUser;
