import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const index = ({combinators, selectedCombinator, handleCombinatorToggle}) => {
  return (
    <ToggleButtonGroup
      id="combinator-toggle"
      className="mb-2"
      value={selectedCombinator.name}
      exclusive
      onChange={handleCombinatorToggle}
    >
      {combinators.map(({ name, label }) => (
        <ToggleButton
          key={name}
          value={name}
          className={`${selectedCombinator.name === name ? "selected" : ""}`}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default index;
