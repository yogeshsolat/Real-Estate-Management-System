import React, { useState } from 'react';

const AddProperty = () => {
  const [property, setProperty] = useState({
    image: null,
    title: '',
    category: '',
    price: '',
    flatType: '',
    furnishing: '',
    bathroom: '',
    balcony: '',
    description: '',
    city: '',
    area: '',
    address: '',
    parking: '',
    deposit: '',
    pincode:'',
    contact:'',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProperty({ ...property, image: files[0] });
    } else {
      setProperty({ ...property, [name]: value });
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(property);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 sm:flex justify-center">ADD PROPERTY</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                name="Title"
                value={property.Title}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Category</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="Category"
                    value="Sell"
                    checked={property.Category === 'Sell'}
                    onChange={handleRadioChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Sell</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="Category"
                    value="Rent"
                    checked={property.Category === 'Rent'}
                    onChange={handleRadioChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Rent</span>
                </label>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={property.price}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Flat Type</label>
              <input
                type="text"
                name="FlatType"
                value={property.FlatType}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Furnishing</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="Furnishing"
                    value="Yes"
                    checked={property.Furnishing === 'Yes'}
                    onChange={handleRadioChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="Furnishing"
                    value="No"
                    checked={property.Furnishing === 'No'}
                    onChange={handleRadioChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-800">No</span>
                </label>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Bathroom</label>
              <input
                type="number"
                name="Bathroom"
                value={property.Bathroom}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Balcony</label>
              <input
                type="number"
                name="Balcony"
                value={property.Balcony}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Contact No</label>
              <input
                type="number"
                name="contact"
                value={property.Contact}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                name="Description"
                value={property.Description}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="City"
                value={property.City}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Area</label>
              <input
                type="text"
                name="Area"
                value={property.Area}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="Address"
                value={property.Address}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Parking</label>
              <input
                type="text"
                name="Parking"
                value={property.Parking}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Deposit</label>
              <input
                type="number"
                name="Deposit"
                value={property.Deposit}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Pincode</label>
              <input
                type="number"
                name="pincode"
                value={property.pincode}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm  hover: focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
