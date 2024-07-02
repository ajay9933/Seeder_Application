import React from 'react';
import MuiTable from '../src/components/molecules/Typography_Icon/index';

const headings = ['Name', 'Age', 'Country'];
const rows = [
  { Name: 'John', Age: 28, Country: 'USA' },
  { Name: 'Sara', Age: 22, Country: 'UK' },
];

// Define the image source URL or path
const emptyImageSrc = '/assets/icons/Image.svg';

const App: React.FC = () => {
  const tableStyles = {
    width: '1000px',
    height: '1000px',
  };

  const imageStyle = {
    // Define your image styles here
    width: '100%', // Example: Adjust the width of the image
    borderRadius: '50%', // Example: Apply a circular border radius
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Example: Add a subtle box shadow
  };

  return (
    <div>
      <MuiTable
        headings={headings}
        rows={rows}
        noOfRows={0} // Dynamically set based on the number of rows
        emptyMessage="No data available"
        emptyImage={emptyImageSrc} // Pass the emptyImage prop with the source URL
        buttonText="Retry" // Provide the text for the button
        onButtonClick={() => {
          // Handle button click action here
          console.log('Button clicked');
        }}
        styles={tableStyles} // Pass the styles prop
        imageStyle={imageStyle} // Pass the imageStyle prop
      />
    </div>
  );
};

export default App;
