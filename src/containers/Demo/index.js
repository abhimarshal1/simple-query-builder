import React, { useState } from "react";

// Components
import QueryBuilder from "../../components/QueryBuilder";

// Constants
import { queryBuilderConfig as config} from "./constants";

const Playground = () => {
  const [isOpen, setIsOpen] = useState(true);

  const setOpen = () => setIsOpen(true);

  const setClose = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-full font-mono">
      <button
        className="px-4 py-2 bg-primary-100 rounded-lg hover:bg-primary-200"
        onClick={setOpen}
      >
        Create Query
      </button>
      {isOpen && <QueryBuilder config={config} onFinish={setClose} returnAs="string" />}
    </div>
  );
};

export default Playground;
