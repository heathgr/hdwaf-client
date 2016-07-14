import React, { Component, PropTypes } from 'react';

class UpdateStatus extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div>
      <h2>{this.props.user.profile.displayName}, how do you feel today?</h2>
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
                width: 15 + '%',
              }}
            >
              {status}
            </button>
          )
        }
      </div>
      <button
        style = {{
          backgroundColor: '#a50010',
          color: '#ffeeee',
        }}
        onClick = {this.props.onSignOut}
      >
        I dont't want to do this anymore.&nbsp;Sign me out.
      </button>
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
