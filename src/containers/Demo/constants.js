export const queryBuilderConfig = {
  fields: [
    { name: "theme", label: "Theme" },
    { name: "subTheme", label: "Sub-theme" },
    { name: "reason", label: "Reason" },
    { name: "language", label: "Language" },
    { name: "source", label: "Source" },
    { name: "rating", label: "Rating" },
    { name: "timePeriod", label: "Time Period" },
    { name: "customerId", label: "Customer ID" },
  ],
  conditions: [
    { name: "equals", label: "Equals", joinerTemplate: "_op1 == _op2" },
    {
      name: "doesnotequal",
      label: "Does not equal",
      joinerTemplate: "_op1 !== _op2",
    },
    { name: "like", label: "Like", joinerTemplate: "_op1 == %_op2%" },
    { name: "notlike", label: "Not Like", joinerTemplate: "_op1 != %_op2%" },
    { name: "isempty", label: "Is Empty", joinerTemplate: "_op1 == ''" },
    { name: "is", label: "Is", joinerTemplate: "_op1 = _op2" },
    { name: "isnot", label: "Is Not", joinerTemplate: "_op1 != _op2" },
  ],
  combinators: [
    { name: "and", label: "AND", shorthand: "&&" },
    { name: "or", label: "OR", shorthand: "||" },
  ],
  criterias: {
    theme: ["Offers", "Performance", "Platform", "Product Feedback"],
    subTheme: ["Sub Theme 1", "Sub Theme 2", "Sub Theme 3", "Sub Theme 4"],
    reason: ["Reason 1", "Reason 2", "Reason 3", "Reason 4"],
    language: ["English", "Spanish", "French", "Chinese"],
    source: ["Twitter", "Instagram", "Quora", "Facebook"],
    rating: ["2+", "3+", "4+", "5"],
    timePeriod: ["Today", "Last 7 days", "Last 15 days", "Last 30 days"],
    customerId: [
      "Customer ID 1",
      "Customer ID 2",
      "Customer ID 3",
      "Customer ID 4",
    ],
  },
};
