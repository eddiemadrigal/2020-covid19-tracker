import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import coronaImage from './images/image.png';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    // console.log(country); // console.log the name of the country on select country change - good
    const fetchedData = await fetchData(country);
    // console.log(fetchedData); // good
    this.setState({ data: fetchedData, country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={ coronaImage } className={styles.image} alt="Covid 19" />
        <Cards data={ data } />
        <CountryPicker handleCountryChange = {this.handleCountryChange} />
        <Chart data={ data } country={ country } /> 
      </div>
    );
  }
}

export default App;