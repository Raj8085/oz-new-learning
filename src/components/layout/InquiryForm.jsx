import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom'; // Import for redirection

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required!');
      return;
    }

    setSubmitted(true);
    setError('');

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      navigate('/'); // Change '/' to the desired redirect path
    }, 3000);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      {!submitted ? (
        <div className='p-5 bg-white shadow-md rounded-md w-96'>
          <h1 className='text-2xl text-center font-bold'>Inquiry Form</h1>

          <Input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="mt-4" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="mt-4" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <Input 
            type="text" 
            name="phone" 
            placeholder="Phone" 
            className="mt-4" 
            value={formData.phone} 
            onChange={handleChange} 
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-5" 
            variant="primary" 
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      ) : (
        <p className="text-green-600 text-center text-xl font-semibold">
          Inquiry submitted successfully! ✅ Redirecting...
        </p>
      )}
    </div>
  );
};
export default InquiryForm;