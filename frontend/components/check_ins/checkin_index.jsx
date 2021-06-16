import React from 'react';
import CheckInIndexItem from './check_in_item';
import CheckInFormContainer from './check_in_form_container';

class CheckInIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckIns();
  }

  render() {
    const {checkIns, deleteCheckIn} = this.props;
    const checkIns_arr = Object.values(checkIns);
    return (
      <div>
        <section>
        <ul>
          {
            checkIns_arr.map(checkIn => (<CheckInIndexItem
                                      checkIn={checkIn}
                                      deleteCheckIn={deleteCheckIn}
                                      key={checkIn.id}
            />))

          }
        </ul>
        {/* <CheckInFormContainer /> */}

        </section>
      </div>
    );
  }
}

export default CheckInIndex;