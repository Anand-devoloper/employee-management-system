// src/App.tsx
import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { Employee } from './types/Employee';
import './App.css';



const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]); // State to hold employee data
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null); // Employee being edited

  // Function to save a new or edited employee
  const handleSaveEmployee = (employee: Employee) => {
    if (editingEmployee) {
      // Update existing employee
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      // Add new employee
      setEmployees((prev) => [...prev, employee]);
    }
    setEditingEmployee(null); // Close the form after save
  };

  // Function to edit an employee
  const handleEditEmployee = (id: number) => {
    const employeeToEdit = employees.find((emp) => emp.id === id) || null;
    setEditingEmployee(employeeToEdit); // Set the employee for editing
  };

  // Function to delete an employee
  const handleDeleteEmployee = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id)); // Remove the employee from the list
  };

  return (
    <div>
      <h1>Employee Management</h1>
      {/* EmployeeForm to add/edit employees */}
      <EmployeeForm
        onSave={handleSaveEmployee}
        initialData={editingEmployee || undefined} // Pass the employee to be edited
      />
      {/* EmployeeTable to display all employees */}
      <EmployeeTable
        data={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default App;
