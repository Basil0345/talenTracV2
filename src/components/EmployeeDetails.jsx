import React from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeDetails = () => {
  const location = useLocation();
  const data = location.state;

  // Check if data exists
  if (!data) {
    return (
      <div className="text-center mt-10">
        <h1 className='text-4xl text-center mb-4'>Employee Not Found</h1>
        <p className='text-gray-600'>The employee details you're looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-4xl text-center mb-5 cursor-none'>Employee Details</h1>
      <div className='border-2 shadow-md p-6 rounded-lg max-w-4xl mx-auto bg-white cursor-pointer'>
        {/* Grid layout that adjusts based on screen size */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Column 1 - Profile Image and Basic Info */}
          <div className='flex flex-col items-center md:col-span-2 lg:col-span-1'>
            <div className='h-40 w-40 mb-4'>
              <img
                className='object-cover w-full h-full rounded-full shadow-md'
                src={data.profileImage || "https://picsum.photos/200"} 
                alt='Profile'
                draggable="false"
              />
            </div>
            <p className='text-lg font-semibold'>{data.name || "John Doe"}</p>
            <p className='text-gray-500'>Age: {data.age || 0}</p>
            <p className='text-gray-500'>Gender: {data.gender || "Not Specified"}</p>
          </div>

          {/* Column 2 - Work Details */}
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-gray-700'>Branch/Dept/Office:</p>
            <p className='text-gray-600'>{data.branch || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Office Type:</p>
            <p className='text-gray-600'>{data.officeType || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Total Service:</p>
            <p className='text-gray-600'>{data.totalService || "0 years"}</p>
            <p className='font-medium text-gray-700'>Service in Current Branch:</p>
            <p className='text-gray-600'>{data.serviceInCurrentBranch || "0 years"}</p>
            <p className='font-medium text-gray-700'>Service in Present Cadre:</p>
            <p className='text-gray-600'>{data.serviceInPresentCadre || "0 years"}</p>
          </div>

          {/* Column 3 - Additional Info */}
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-gray-700'>Designation:</p>
            <p className='text-gray-600'>{data.designation || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Domicile:</p>
            <p className='text-gray-600'>{data.domicile || "Unknown"}</p>
            <p className='font-medium text-gray-700'>State:</p>
            <p className='text-gray-600'>{data.state || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Zone:</p>
            <p className='text-gray-600'>{data.zone || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Region:</p>
            <p className='text-gray-600'>{data.region || "Unknown"}</p>
          </div>

          {/* Column 4 - Miscellaneous Details */}
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-gray-700'>Last Promotion Date:</p>
            <p className='text-gray-600'>{data.lastPromotionDate || "N/A"}</p>
            <p className='font-medium text-gray-700'>Marital Status:</p>
            <p className='text-gray-600'>{data.maritalStatus || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Job Vertical:</p>
            <p className='text-gray-600'>{data.jobVertical || "Unknown"}</p>
            <p className='font-medium text-gray-700'>Location:</p>
            <p className='text-gray-600'>{data.location || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
