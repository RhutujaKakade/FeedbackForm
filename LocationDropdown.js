import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';

const LocationDropdown = ({ formData, setFormData }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(c => c.isoCode === e.target.value);
    setFormData({ ...formData, country: selectedCountry.isoCode, state: '', city: '' });
    setStates(State.getStatesOfCountry(selectedCountry.isoCode));
    setCities([]);
  };

  const handleStateChange = (e) => {
    const selectedState = states.find(s => s.isoCode === e.target.value);
    setFormData({ ...formData, state: selectedState.isoCode, city: '' });
    setCities(City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode));
  };

  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  return (
    <div>
      <label>
        Country:<span style={{ color: 'red' }}>*</span>
        <select name="country" value={formData.country} onChange={handleCountryChange} required>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
          ))}
        </select>
      </label>
      <label>
        State:<span style={{ color: 'red' }}>*</span>
        <select name="state" value={formData.state} onChange={handleStateChange} required>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
          ))}
        </select>
      </label>
      <label>
        City:
        <select name="city" value={formData.city} onChange={handleCityChange}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>{city.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocationDropdown;
