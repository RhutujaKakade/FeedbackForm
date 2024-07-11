import React, { useState } from 'react';
import './FeedbackForm.css';
import LocationDropdown from './LocationDropdown';
import RatingStars from './RatingStars';
import CustomDatePicker from './CustomDatePicker';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { format } from 'date-fns';

// Initialize EmailJS with your public key
emailjs.init('xxxxxxxxx');

const FeedbackForm = () => {
  const initialFormData = {
    companyName: '',
    country: '',
    state: '',
    city: '',
    address: '',
    contactPersonName: '',
    contactNumber: '',
    visitType: '',
    serviceEngineerName: '',
    machineType: '',
    machineModelNo: '',
    visitDateFrom: '',
    visitDateTo: '',
    comments: ''
  };

  const initialRatings = {
    star_one: '',
    star_two: '',
    star_three: '',
    star_four: '',
    star_five: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [ratings, setRatings] = useState(initialRatings);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (newValue, name) => {
    setRatings({ ...ratings, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure ratings are not empty
    const formattedRatings = {
      star_one: ratings.star_one || 'N/A',
      star_two: ratings.star_two || 'N/A',
      star_three: ratings.star_three || 'N/A',
      star_four: ratings.star_four || 'N/A',
      star_five: ratings.star_five || 'N/A',
    };

    // Format the dates
    const formattedVisitDateFrom = formData.visitDateFrom ? format(new Date(formData.visitDateFrom), 'dd/MM/yyyy') : 'N/A';
    const formattedVisitDateTo = formData.visitDateTo ? format(new Date(formData.visitDateTo), 'dd/MM/yyyy') : 'N/A';

    // Send email
    const templateParams = {
      contactPersonName: formData.contactPersonName,
      companyName: formData.companyName,
      contactNumber: formData.contactNumber,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      address: formData.address,
      serviceEngineerName: formData.serviceEngineerName,
      visitType: formData.visitType,
      visitDateFrom: formattedVisitDateFrom,
      visitDateTo: formattedVisitDateTo,
      machineModelNo: formData.machineModelNo,
      machineType: formData.machineType,
      ...formattedRatings,
      comments: formData.comments,
    };

    const subject = `Feedback from ${formData.companyName} - Visit Date To: ${formattedVisitDateTo}`;

    emailjs.send('xxxxxxxx', 'xxxxxx', { ...templateParams, subject }, 'xxxxxxxxxxxx')
      .then(async (response) => {
        console.log('Email sent successfully!', response.status, response.text);

        // Submit form data to Firestore
        try {
          await addDoc(collection(db, 'feedbacks'), {
            ...formData,
            ...formattedRatings,
            visitDateFrom: formData.visitDateFrom,
            visitDateTo: formData.visitDateTo
          });
          toast.success('Form submitted successfully!');
          setFormData(initialFormData);
          setRatings(initialRatings); // Reset ratings to initial values

          // Reload the page
          setTimeout(() => {
            window.location.reload();
          }, 2000); // Wait for 2 seconds before reloading
        } catch (e) {
          console.error('Error adding document: ', e);
          toast.error('Error submitting form');
        }
      }, (error) => {
        console.error('Failed to send email', error);
        toast.error('Failed to send email');
      });
  };

  return (
    <div className="form-wrapper">
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Micron Industries Logo" className="logo" />
        <h1>Micron Industries Pvt. Ltd.</h1>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Service Feedback Form</legend>
          <label>
            Company Name:<span style={{ color: 'red' }}>*</span>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required />
          </label>
          <LocationDropdown formData={formData} setFormData={setFormData} />
          <label>
            Address:<span style={{ color: 'red' }}>*</span>
            <textarea name="address" value={formData.address} onChange={handleInputChange} required />
          </label>
          <div className="two-columns">
            <label>
              Contact Person Name:<span style={{ color: 'red' }}>*</span>
              <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleInputChange} required />
            </label>
            <label>
              Contact Number:<span style={{ color: 'red' }}>*</span>
              <input type="tel" name="contactNumber" className="ContactNo" value={formData.contactNumber} onChange={handleInputChange} required />
            </label>
          </div>
          <div className="two-columns">
            <label className="DropDown">
              Visit Type:<span style={{ color: 'red' }}>*</span>
              <select name="visitType" value={formData.visitType} onChange={handleInputChange} required>
                <option value="" disabled> </option>
                <option value="Commissioning">Commissioning</option>
                <option value="service">Service</option>
              </select>
            </label>
            <label>
              Service Engineer Name:<span style={{ color: 'red' }}>*</span>
              <input type="text" name="serviceEngineerName" value={formData.serviceEngineerName} onChange={handleInputChange} required />
            </label>
          </div>
          <div className="two-columns">
            <label>
              Machine Type/Capacity:<span style={{ color: 'red' }}>*</span>
              <input type="text" name="machineType" value={formData.machineType} onChange={handleInputChange} required />
            </label>
            <label>
              Machine Model No.:<span style={{ color: 'red' }}>*</span>
              <input type="text" name="machineModelNo" value={formData.machineModelNo} onChange={handleInputChange} required />
            </label>
          </div>
          <div className="two-columns">
            <label>
              Visit Period:<span style={{ color: 'red' }}>*</span>
              <div className="two-columns">
                <span>
                  From:<span style={{ color: 'red' }}>*</span>
                  <CustomDatePicker name="visitDateFrom" value={formData.visitDateFrom} onChange={handleInputChange} required />
                </span>
                <span>
                  To:<span style={{ color: 'red' }}>*</span>
                  <CustomDatePicker name="visitDateTo" value={formData.visitDateTo} onChange={handleInputChange} required />
                </span>
              </div>
            </label>
          </div>
          <RatingStars ratings={ratings} handleRatingChange={handleRatingChange} />
          <label>
            Any comments and suggestions to improve our service further:<span style={{ color: 'red' }}>*</span>
            <textarea name="comments" value={formData.comments} onChange={handleInputChange} required />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FeedbackForm;
