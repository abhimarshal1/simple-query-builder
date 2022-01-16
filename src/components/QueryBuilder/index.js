import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import FilterGroup from "../FilterGroup";
import CombinatorToggle from "../CombinatorToggle";

// Utils
import { getUniqueId, getInitialState, buildQuery } from "./utils";

const QueryBuilder = ({ onFinish, config, returnAsString }) => {
  const { combinators } = config;

  const [selectedCombinator, setSelectedCombinator] = React.useState(
    combinators[0]
  );
  const [data, setData] = useState(() => getInitialState());

  const enableCombinator = data.length > 1;

  const addFilterGroup = () => {
    const newId = getUniqueId();
    const newData = [
      ...data,
      [
        {
          id: newId,
          field: null,
          condition: null,
          value: null,
        },
      ],
    ];
    setData(newData);
  };

  const handleDelete = (rule) => {
    const newData = data.filter((data) => data !== rule);
    setData(newData);
  };

  const handleFinish = () => {
    if (returnAsString) {
      const combinatorSH = combinators.find(
        (c) => c.name === selectedCombinator.name
      ).shorthand;
      onFinish(buildQuery(config.conditions, data, combinatorSH));
    } else {
      const obj = { ...data, combinator: selectedCombinator.name };
      onFinish(obj);
    }
  };

  const handleCombinatorToggle = (e) => {
    const newCombinator = combinators.find(
      (item) => item.name === e.target.value
    );
    setSelectedCombinator(newCombinator);
  };

  const handleFilterOnChange = (index, rule, name, value) => {
    setData((prev) => {
      const newData = [...prev];
      const toChange = newData[index].find((d) => d === rule);
      toChange[name] = value;
      return newData;
    });
  };

  const handleFilterAdd = (index) => {
    setData((prev) => {
      const newId = getUniqueId();
      const newData = [...prev];
      newData[index] = [
        ...newData[index],
        {
          id: newId,
          field: null,
          condition: null,
          value: null,
        },
      ];
      return newData;
    });
  };

  const handleFilterDelete = (index, id) => {
    setData((prev) => {
      const newData = [...prev];
      newData[index] = newData[index].filter((rule) => rule.id !== id);

      return newData;
    });
  };

  return (
    <div className="fixed bg-black bg-opacity-30 inset-0 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto w-256 h-5/6 shadow-lg rounded-md bg-gray-900">
        <div className="header h-24 bg-primary-100 p-5 rounded-t-md">
          <h3 className="text-lg leading-6 font-medium text-white-900">
            Create tag and query
          </h3>
          <p className="text-gray-400 mt-2">
            The query you build will be saved in your active view
          </p>
        </div>
        <div className="body h-5/6 overflow-y-auto pb-24">
          <div className="p-5">
            {enableCombinator && (
              <CombinatorToggle
                combinators={combinators}
                selectedCombinator={selectedCombinator}
                handleCombinatorToggle={handleCombinatorToggle}
              />
            )}
            <>
              {data.map((rules, index) => (
                <FilterGroup
                  key={JSON.stringify(rules)}
                  showDelete={index !== 0}
                  rules={rules}
                  config={config}
                  handleDelete={handleDelete}
                  onFilterChange={(rule, name, value) =>
                    handleFilterOnChange(index, rule, name, value)
                  }
                  onFilterAdd={() => handleFilterAdd(index)}
                  onFilterDelete={(id) => handleFilterDelete(index, id)}
                />
              ))}
            </>

            <button
              className="mt-4 px-4 py-2 bg-primary-100 text-white rounded-lg shadow-sm hover:bg-primary-200"
              onClick={addFilterGroup}
            >
              Add Filter Group
            </button>
          </div>
        </div>
        <div className="bg-gray-900 absolute bottom-0 footer w-full px-5 py-5 flex justify-between items-end">
          <button
            className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg shadow-sm hover:bg-primary-200"
            onClick={handleFinish}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary-100 text-white text-base font-medium rounded-lg shadow-sm hover:bg-primary-200"
            onClick={handleFinish}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

QueryBuilder.propTypes = {
  onFinish: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  returnAsString: PropTypes.bool,
};

export default QueryBuilder;
