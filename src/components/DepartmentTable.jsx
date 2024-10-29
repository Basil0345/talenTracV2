import React, { useState } from "react";

const ResponsiveTable = () => {
  const [hoveredIndex,setHoveredIndex]=useState(null);

  const handleIndex = (index) =>{
    setHoveredIndex(index)
    console.log(index)
  }

  const dept = {
    DEPT: "TEST_FED",
    SCALE_1: 2,
    SCALE_2: 1,
    SCALE_3: 1,
    SCALE_4: 2,
    SCALE_5: 1,
  };

  const employees = [
    {
      siNo: 1,
      pfNo: 'PF1234',
      name: 'John Doe',
      grade: 'A',
      designation: 'Manager',
      domicileState: 'California',
      age: 45,
      service: 20,
      serviceLocation: 'New York',
      gender: 'Male',
      location: 'Office A',
      lastPromDate: '2022-03-10',
    },
    {
      siNo: 2,
      pfNo: 'PF5678',
      name: 'Jane Smith',
      grade: 'B',
      designation: 'Analyst',
      domicileState: 'Texas',
      age: 34,
      service: 10,
      serviceLocation: 'Dallas',
      gender: 'Female',
      location: 'Office B',
      lastPromDate: '2021-05-21',
    },
    {
      siNo: 3,
      pfNo: 'PF91011',
      name: 'Mike Johnson',
      grade: 'C',
      designation: 'Clerk',
      domicileState: 'Florida',
      age: 29,
      service: 5,
      serviceLocation: 'Miami',
      gender: 'Male',
      location: 'Office C',
      lastPromDate: '2020-07-11',
    },
  ];

  const headers = Object.keys(dept);
  const values = Object.values(dept);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <div className="w-full">
          <h1 className="mb-2 text-xl underline">Department Details</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  {headers.map((header, index) => (
                    <th key={index} className="py-2 px-4 border bg-blue-500 text-white text-sm text-center" onMouseEnter={()=>handleIndex(index)}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {values.map((value, index) => (
                    <td key={index} className={`py-2 px-4 border border-gray-300 text-center`} onMouseEnter={()=>handleIndex(index)}>
                      {value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full">
          <h1 className="mb-2 text-xl underline">Employee List</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">SI NO</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">PF NO</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">NAME</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">GRADE</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">DESIGNATION</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">DOMICILE_STATE</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">AGE</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">SERVICE</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">SERV_LOC</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">GENDER</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">LOCATION</th>
                  <th className="py-2 px-4 border bg-blue-500 text-white text-center text-sm">LAST_PROM_DATE</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.siNo}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.pfNo}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.name}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.grade}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.designation}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.domicileState}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.age}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.service}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.serviceLocation}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.gender}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.location}</td>
                    <td className="py-1 px-4 border border-gray-300 text-center cursor-pointer hover:underline decoration-blue-800">{employee.lastPromDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
