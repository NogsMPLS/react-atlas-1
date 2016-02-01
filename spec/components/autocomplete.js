import React from 'react';
import Autocomplete from '../../components/autocomplete';

const countriesArray = ['Spain', 'England', 'USA', 'Thailand', 'Tongo', 'Slovenia'];
const countriesObject = {'ES-es': 'Spain', 'EN-gb': 'England', 'EN-en': 'USA', 'TH-th': 'Thailand', 'To-to': 'Tongo', 'SL-sl': 'Slovenia'};

class AutocompleteTest extends React.Component {
  state = {
    simple: 'Spain',
    multiple: ['ES-es', 'TH-th']
  };

  handleMultipleChange = (value) => {
    this.setState({multiple: value});
  };

  handleSimpleChange = (value) => {
    this.setState({simple: value});
  };

  render () {
    return (
      <section>
        <h5>Autocomplete</h5>
        <p>You can have a multiple or simple autocomplete.</p>

        <Autocomplete source={countriesArray} />
        <Autocomplete source={countriesObject} />

      </section>
    );
  }
}

export default AutocompleteTest;
