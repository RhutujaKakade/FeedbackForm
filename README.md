The feedback form is a comprehensive user interface designed to gather detailed service feedback from clients. Below are the key features and components of the form:

### Form Features:

1. **Company Information**:
   - **Company Name**: A mandatory text input field where the user enters the name of their company.
   - **Location Details**: Integrated `LocationDropdown` component that allows users to select their country, state, and city from dropdown menus.
   - **Address**: A mandatory textarea for entering the full address of the company.

2. **Contact Information**:
   - **Contact Person Name**: A mandatory text input field for the name of the contact person at the company.
   - **Contact Number**: A mandatory telephone input field for the contact person's phone number.

3. **Service Details**:
   - **Visit Type**: A mandatory dropdown menu where users can select the type of visit (Commissioning or Service).
   - **Service Engineer Name**: A mandatory text input field for the name of the service engineer who conducted the visit.
   - **Machine Type/Capacity**: A mandatory text input field for the type or capacity of the machine serviced.
   - **Machine Model No.**: A mandatory text input field for the model number of the machine.

4. **Visit Period**:
   - **Visit Date From and To**: Two mandatory date picker components (`CustomDatePicker`) that allow users to select the start and end dates of the service visit.

5. **Rating Section**:
   - The form includes a `RatingStars` component that allows users to provide star ratings (1-5) for various aspects of the service. The ratings include:
     - Resolution of issues by the service engineer.
     - Behavior of the service engineer.
     - Knowledge of the service engineer.
     - Timeliness of service/response.
     - Effectiveness of the service engineer in training the staff.
   - Each rating uses the `ReactStars` component for intuitive star-based input.

6. **Additional Comments**:
   - **Comments and Suggestions**: A mandatory textarea for users to provide any additional comments or suggestions to improve the service.

7. **Form Submission**:
   - **Submit Button**: A button to submit the form. Upon submission:
     - The form data, including formatted dates and ratings, are sent via email using the EmailJS service.
     - The form data is also stored in a Firestore database.
     - Success and error messages are displayed using the `react-toastify` library.
     - The form fields and ratings are reset to their initial values.
     - The page refreshes automatically after a short delay to allow users to see the success message.

### Additional Features:

- **Form Validation**: Several fields are marked as mandatory, ensuring essential information is provided.
- **Email Integration**: Uses EmailJS to send the form data via email to a specified address.
- **Database Integration**: Uses Firebase Firestore to store the submitted feedback data.
- **Responsive Design**: The form layout adjusts to different screen sizes for better usability on mobile devices.
- **User Feedback**: Toast notifications are used to provide immediate feedback to users on the success or failure of their submission.
- **Date Formatting**: Dates are formatted to a consistent and readable format before being sent in the email and stored in the database.

This form is designed to capture comprehensive feedback from clients in an organized and user-friendly manner, facilitating better service evaluation and improvements.

The form uses several libraries to enhance its functionality and user experience. Below is a description of each library used in the form:

1. **React**:
   - **Library**: `react`
   - **Purpose**: Provides the core functionality for building user interfaces in a component-based architecture. It manages the state and lifecycle of components and renders the UI based on the state.

2. **Firebase**:
   - **Library**: `firebase`
   - **Purpose**: Provides backend services for authentication, database, and cloud storage. Specifically, the `firebase/firestore` module is used to add form data to a Firestore database.

3. **EmailJS**:
   - **Library**: `emailjs-com`
   - **Purpose**: Allows sending emails directly from the client-side application. It's used to send the form data via email using a predefined email template.

4. **React Toastify**:
   - **Library**: `react-toastify`
   - **Purpose**: Provides a way to display notifications (toasts) to users. It's used to show success and error messages when the form is submitted.

5. **Date-Fns**:
   - **Library**: `date-fns`
   - **Purpose**: A modern JavaScript date utility library. It is used to format the dates in the form submission before sending them via email and storing them in the database.

6. **React-Rating-Stars-Component**:
   - **Library**: `react-rating-stars-component`
   - **Purpose**: Provides a star rating component that is easy to use and customize. It is used in the `Rating` component to allow users to rate different aspects of the service.

7. **CSS for Styling**:
   - **Library**: Custom CSS files (`FeedbackForm.css`, `RatingStars.css`)
   - **Purpose**: Custom styles are defined in CSS files to style the form and its components, ensuring a consistent and visually appealing layout.

8. **Custom Components**:
   - **Components**: `LocationDropdown`, `RatingStars`, `CustomDatePicker`
   - **Purpose**: These custom components are used to encapsulate specific functionality and UI elements. For example:
     - `LocationDropdown` handles the selection of country, state, and city.
     - `RatingStars` manages the collection of star ratings for different service aspects.
     - `CustomDatePicker` provides a date picker interface for selecting the visit period.

### Summary of Libraries and Their Usage

- **React**: Core library for building the UI.
- **Firebase**: Backend services for data storage.
- **EmailJS**: Sending form data via email.
- **React Toastify**: Displaying notifications.
- **Date-Fns**: Formatting dates.
- **React-Rating-Stars-Component**: Implementing star ratings.
- **Custom CSS**: Styling the form and components.
- **Custom Components**: Encapsulating specific functionalities like location selection, star ratings, and date picking.

These libraries collectively enable the form to provide a rich, interactive, and user-friendly experience while handling data storage and communication effectively.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
