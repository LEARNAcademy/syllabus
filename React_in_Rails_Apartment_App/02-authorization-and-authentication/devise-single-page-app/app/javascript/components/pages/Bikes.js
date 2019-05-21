import React from "react"
import PropTypes from "prop-types"
class Bikes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bikes: []
    }
  }
  componentDidMount(){
      fetch('/bikes.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({bikes: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
  }
  render () {
    return (
      <div>
        <h1>Bikes</h1>
        <table>
          <tbody>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>year</th>
            </tr>

            {this.state.bikes.map((bike, index) =>
              <tr key={index}>
                <td>{bike.brand}</td>
                <td>{bike.model}</td>
                <td>{bike.model_year}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bikes
