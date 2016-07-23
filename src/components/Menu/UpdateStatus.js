import React, { Component, PropTypes } from 'react';

class UpdateStatus extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div id="menuWrapper">
      <h1>Welcome, how do you feel today?</h1>
      <div>
        {
          this.props.menuData.statuses.map(
            (status, id) => <button
              key={id}
              onClick={this.props.onUpdateStatus.bind(
                null,
                id,
                this.props.user.statusData ? this.props.user.statusData.status : null
              )}
              id={status + 'StatusButton'}
              style={{
                opacity: this.props.user.statusData.status === id ? 0.5 : 1,
              }}
            >
              {status}
            </button>
          )
        }
      </div>
      <div>
        <button
          style = {{
            backgroundColor: '#a50010',
            color: '#ffeeee',
          }}
          onClick = {this.props.onSignOut}
        >
          I dont't want to do this anymore.&nbsp;Sign me out.
        </button>
      </div>
    </div>;
  }
}

UpdateStatus.propTypes = {
  onUpdateStatus: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired,
};

export default UpdateStatus;
