import React from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const CombinatorToggle = ({
  combinators,
  selectedCombinator,
  handleCombinatorToggle,
}) => {
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

CombinatorToggle.propTypes = {
  combinators: PropTypes.array.isRequired,
  selectedCombinator: PropTypes.object.isRequired,
  handleCombinatorToggle: PropTypes.func.isRequired,
};

export default CombinatorToggle;
