import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
    <div>
      RESULLTTTTTTTTTT
      {this.props.userResturants.map((resturant) => (<div>{resturant.name}</div>))}
      <div> FINAL CHOICE: {this.props.final.name}</div>
    </div>
    ) 
  }
}
export default Result;