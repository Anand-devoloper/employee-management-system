// src/components/EmployeeForm.tsx
import React, { useState, useEffect } from 'react';
import { Employee } from '../types/Employee';

interface EmployeeFormProps {
  onSave: (employee: Employee) => void;
  initialData?: Employee;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSave, initialData }) => {
  // State to hold input values
  const [name, setName] = useState(initialData?.name || '');
  const [department, setDepartment] = useState(initialData?.department || '');
  const [position, setPosition] = useState(initialData?.position || '');

  // Handle form submission to save or update employee details
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && department && position) {
      const newEmployee = {
        id: initialData?.id || Date.now(), // If editing, preserve the ID; else, generate a new ID
        name,
        department,
        position,
      };
      onSave(newEmployee); // Save employee (either add or update)
      
      // Clear form after submission (reset form fields)
      setName('');
      setDepartment('');
      setPosition('');
    }
  };

  // Reset form when initialData changes (for editing)
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDepartment(initialData.department);
      setPosition(initialData.position);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Department</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialData ? 'Update Employee' : 'Add Employee'}</button>
    </form>
  );
};

export default EmployeeForm;
