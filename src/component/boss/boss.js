import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chat.redux';

import UserCards from '../user-cards/user-cards';

@connect(
  state => state.chat,
  {getUserList}
)
class Boss extends React.Component {
  componentDidMount() {
    this.props.getUserList('genius');
  }
  render() {
    return <UserCards userList={this.props.userList}></UserCards>
  }
}

export default Boss;
