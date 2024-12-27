// src/components/EmployeeTable.tsx
import React from 'react';
import { Employee } from '../types/Employee';

interface EmployeeTableProps {
  data: Employee[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.position}</td>
            <td>
              <button onClick={() => onEdit(employee.id)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
