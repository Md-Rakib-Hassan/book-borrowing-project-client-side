import { useState } from "react";
// import Sidebar from "../components/Sidebar";

const UploadBooks = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="w-full sm:w-3/4 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold mb-8">Upload Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Form */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Book Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter book name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Author Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter author name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">About the Author</label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="About the author"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">About the Book</label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="About the book"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Sponsor Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter sponsor name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Stock</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter stock"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <select className="w-full p-2 border rounded">
                <option>Select Category</option>
                <option>Fiction</option>
                <option>Non-fiction</option>
                <option>Science</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>

          {/* Right side: Image Upload */}
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 mb-2">Sponsor Logo</label>
            <div className="w-64 h-64 border-dashed border-2 border-gray-300 flex items-center justify-center">
              {image ? (
                <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">Add Image</span>
              )}
            </div>
            <input type="file" className="mt-4" onChange={handleImageUpload} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UploadBooks;
