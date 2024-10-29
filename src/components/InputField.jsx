import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import { useNavigate } from 'react-router-dom';


const InputField = ({ placeholder, searchType }) => {
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timerRef = useRef(null);
  const suggestionRef = useRef(null);

  const navigate = useNavigate()

  // Example suggestions for autocomplete
  const suggestions = ["Finance Department", "HR Department", "Marketing Department", "Sales Department", "IT Department"];
  const employeeData = [
    {
      id: 1,
      name: 'Michael Johnson',
      age: 35,
      gender: 'Male',
      branch: 'Finance',
      officeType: 'Head Office',
      totalService: 12,
      serviceInCurrentBranch: 5,
      serviceInPresentCadre: 3,
      designation: 'Senior Manager',
      domicile: 'Urban',
      state: 'California',
      zone: 'West',
      region: 'West Coast',
      lastPromotionDate: '2021-04-15',
      maritalStatus: 'Married',
      jobVertical: 'Finance & Accounting',
      location: 'Los Angeles'
    },
    {
      id: 2,
      name: 'Emily Davis',
      age: 29,
      gender: 'Female',
      branch: 'Human Resources',
      officeType: 'Regional Office',
      totalService: 6,
      serviceInCurrentBranch: 2,
      serviceInPresentCadre: 2,
      designation: 'HR Officer',
      domicile: 'Rural',
      state: 'Texas',
      zone: 'South',
      region: 'Southern Plains',
      lastPromotionDate: '2022-06-20',
      maritalStatus: 'Single',
      jobVertical: 'Human Resources',
      location: 'Dallas'
    },
    {
      id: 3,
      name: 'David Martinez',
      age: 42,
      gender: 'Male',
      branch: 'IT',
      officeType: 'Branch Office',
      totalService: 18,
      serviceInCurrentBranch: 7,
      serviceInPresentCadre: 4,
      designation: 'IT Manager',
      domicile: 'Suburban',
      state: 'New York',
      zone: 'East',
      region: 'Northeast',
      lastPromotionDate: '2020-11-05',
      maritalStatus: 'Divorced',
      jobVertical: 'Information Technology',
      location: 'New York City'
    },
    {
      id: 4,
      name: 'Sophia Thompson',
      age: 37,
      gender: 'Female',
      branch: 'Marketing',
      officeType: 'Branch Office',
      totalService: 10,
      serviceInCurrentBranch: 3,
      serviceInPresentCadre: 2,
      designation: 'Marketing Executive',
      domicile: 'Urban',
      state: 'Illinois',
      zone: 'Midwest',
      region: 'Great Lakes',
      lastPromotionDate: '2019-03-12',
      maritalStatus: 'Married',
      jobVertical: 'Marketing & Sales',
      location: 'Chicago'
    },
    {
      id: 5,
      name: 'James Wilson',
      age: 50,
      gender: 'Male',
      branch: 'Operations',
      officeType: 'Head Office',
      totalService: 25,
      serviceInCurrentBranch: 10,
      serviceInPresentCadre: 6,
      designation: 'Operations Director',
      domicile: 'Rural',
      state: 'Georgia',
      zone: 'South',
      region: 'Southeast',
      lastPromotionDate: '2018-09-30',
      maritalStatus: 'Widowed',
      jobVertical: 'Operations & Logistics',
      location: 'Atlanta'
    }
  ];
  
  

  // Function to be called when searchType is "department"
  const searchAPI = () => {
    console.log(`Searching for ${searchType} with input:`, input);
    // Add your actual search API logic here
  };

  const debounce = (func, delay) => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        func();
      }, delay);
    };
  };

  const debouncedSearch = debounce(() => {
    if (searchType === "department") {
      searchAPI();
    }
  }, 1000);

  useEffect(() => {
    if (input && searchType === "department") {
      debouncedSearch();
    }
    return () => clearTimeout(timerRef.current);
  }, [input, searchType]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

   if(searchType === "department"){
     // Filter the suggestions based on input
     const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
   }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion); // Update input value to the selected suggestion
    setShowSuggestions(false); // Hide suggestions after selection
  };

  //Btn click
  const handleBtnClick = ()=>{
    if(searchType === "employee"){
      navigate("/employeeSearch",{state:employeeData.filter((data)=>data.id == input)[0]})
    }else{
      navigate("/")
    }
  }


  // Effect to detect clicks outside the menu or roles modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu or roles
      if( 
        (suggestionRef.current && !suggestionRef.current.contains(event.target))){
          setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside,true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside,true);  // Cleanup listener
    };
  }, []);

  return (
    <div className="relative w-full" ref={suggestionRef} >
      <div className="flex items-center space-x-2">
        <input
          type="text" 
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition-all w-full" 
          placeholder={placeholder} 
          aria-label="input-field"
          value={input}
          onChange={handleInputChange}
        />
        <button 
          className="bg-blue-500 text-white px-4 py-3 rounded-lg transition-all hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="search-button"
          onClick={handleBtnClick}
        >
          <FaSearch/>
        </button>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full border border-gray-300 bg-white rounded-lg mt-1 shadow-lg max-h-48 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputField;
