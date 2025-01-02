import { useState, FC } from 'react';
import axios from 'axios';
import type { TestimonialData } from '@/Types/type';

const UploadTestimonial: FC = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<TestimonialData | null>(
    null
  );

  // Handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      setUploadStatus('Please select an image.');
      return;
    }

    setUploadStatus('Uploading...');
    try {
      // Set up FormData
      const formData = new FormData();
      formData.append('name', name);
      formData.append('content', content);
      formData.append('rating', rating.toString());
      formData.append('image', image);

      // Send POST request to backend
      const response = await axios.post<TestimonialData>(
        'http://localhost:3000/api/testimonials',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setNewTestimonial(response.data);
      setUploadStatus('Upload successful!');
    } catch (error) {
      console.error('Error uploading testimonial:', error);
      setUploadStatus('Failed to upload testimonial.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Testimonial</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Content Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Rating Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border rounded"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload Testimonial
        </button>
      </form>

      {/* Upload Status */}
      {uploadStatus && (
        <p className="mt-4 text-center text-gray-600">{uploadStatus}</p>
      )}

      {/* Display Uploaded Testimonial */}
      {newTestimonial && (
        <div className="mt-6 p-4 border rounded shadow">
          <h3 className="font-bold text-lg">{newTestimonial.name}</h3>
          <p className="italic">{newTestimonial.content}</p>
          <p>Rating: {newTestimonial.rating} / 5</p>
          <img
            src={newTestimonial.imageUrl}
            alt="Uploaded"
            className="w-32 h-32 object-cover rounded mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default UploadTestimonial;
