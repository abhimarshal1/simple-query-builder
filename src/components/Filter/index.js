import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";

const Filter = ({ rule, config, showFilterDelete, onChange, onDelete }) => {
  const { fields, conditions, criterias } = config;
  const { id, field, condition, criteria } = rule;

  const criteriaList = criterias[field] || [];

  return (
    <div className="query-row flex items-center gap-4">
      <div className="w-64">
        <label className="block text-sm mb-2">Field</label>
        <TextField
          id="query-select"
          select
          className="bg-gray-700 rounded-md w-full p-0"
          value={field}
        >
          {fields.map(({ name, label }) => (
            <MenuItem
              key={name}
              value={name}
              onClick={() => onChange(rule, "field", name)}
            >
              {label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="w-64">
        <label className="block text-sm mb-2">Condition</label>
        <TextField
          id="query-select"
          select
          className="bg-gray-700 rounded-md w-full p-0"
          value={condition}
        >
          {conditions.map(({ name, label }) => (
            <MenuItem
              key={name}
              value={name}
              onClick={() => onChange(rule, "condition", name)}
            >
              {label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="w-60">
        <label className="block text-sm mb-2">Criteria</label>
        <TextField
          id="query-select"
          select
          className="bg-gray-700 rounded-md w-full"
          value={criteria}
        >
          {criteriaList.map((option) => (
            <MenuItem
              key={option}
              value={option}
              onClick={() => onChange(rule, "criteria", option)}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {showFilterDelete && (
        <button
          className="self-end text-base p-3 text-white rounded-full shadow-sm bg-rose-800 hover:bg-rose-900 hover:scale-110"
          onClick={() => onDelete(id)}
        >
          <MdDeleteOutline />
        </button>
      )}
    </div>
  );
};

export default Filter;
