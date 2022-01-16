import React, { useState } from "react";

// Components
import QueryBuilder from "../../lib/components/QueryBuilder";

// Constants
import { queryBuilderConfig as config } from "./constants";

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => setIsOpen(true);

  const setClose = () => setIsOpen(false);

  const onFinish = (query) => {
    console.log(query);
    setClose();
  };

  return (
    <div className="flex justify-center items-center h-full font-mono">
      <button
        className="px-4 py-2 bg-primary-100 rounded-lg hover:bg-primary-200"
        onClick={setOpen}
      >
        Create Query
      </button>
      {isOpen && (
        <QueryBuilder
          config={config}
          onFinish={onFinish}
          onCancel={setClose}
          returnAsString
        />
      )}
    </div>
  );
};

export default Demo;
