import _uniqueId from "lodash/uniqueId";

// Constants
import { PREFIX } from "./constants";

export const getUniqueId = () => _uniqueId(PREFIX);

export const getInitialState = () => {
  const firstUniqueId = _uniqueId(PREFIX);
  return [
    [
      {
        id: firstUniqueId,
        field: "",
        condition: "",
        value: "",
      },
    ],
  ];
};

const buildFilterQuery = (rules, templateObj) => {
  const queryList = rules.map(({ field, condition, criteria }) =>
    templateObj[condition]
      .replace("_op1", `(field.${field})`)
      .replace("_op2", `\\"${criteria}\\"`)
  );

  return queryList.length > 1 ? queryList.join(` && `) : queryList[0];
};

export const buildQuery = (conditions, ruleObject, combinatorSH) => {
  const templateObj = conditions.reduce(
    (acc, { name, joinerTemplate }) => ({ ...acc, [name]: joinerTemplate }),
    {}
  );

  const queryList = ruleObject.map((rule) => {
    const filterQuery = buildFilterQuery(rule, templateObj);
    return `(${filterQuery})`;
  });

  return queryList.length > 1 ? queryList.join(` ${combinatorSH} `) : queryList[0];
};
