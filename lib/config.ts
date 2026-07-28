// ---------------------------------------------------------------------------
// Capacity — update these numbers as clients come on board.
// Model: a small number of new clients taken on each month, not a hard cap.
// ---------------------------------------------------------------------------
export const capacity = {
  newClientsPerMonth: 2,
  spotsOpenThisMonth: 2,
  month: "this month",
};

export const site = {
  name: "Road2Resolve",
  url: "https://road2resolve.digital",
  email: "info@road2resolve.digital",
  location: "Folkestone, Kent",
  linkedin: "https://www.linkedin.com/company/road2resolve-ltd",
  tagline: "Business Automation & AI Consultancy",
};

export const pricing = {
  audit: "Free",
  projectsFrom: "£2,500",
  retainers: [
    {
      name: "Essential",
      price: "£495",
      per: "/month",
      for: "Businesses with a system in place that needs keeping current.",
      includes: [
        "Maintenance and monitoring of existing automations",
        "Small changes and fixes as your process shifts",
        "One new automation per month",
        "Email support, two working day response",
      ],
    },
    {
      name: "Growth",
      price: "£995",
      per: "/month",
      recommended: true,
      for: "Growing businesses adding new workflows regularly.",
      includes: [
        "Everything in Essential",
        "Ongoing build work and new integrations",
        "AI workflows added as opportunities appear",
        "Monthly review call and reporting",
        "Priority response, one working day",
      ],
    },
    {
      name: "Scale",
      price: "£1,995",
      per: "/month",
      for: "Multi-team businesses where operations are genuinely complex.",
      includes: [
        "Everything in Growth",
        "Multi-department and multi-site systems",
        "Strategic input on how your operations should evolve",
        "Dedicated planning sessions",
        "Same day response on critical issues",
      ],
    },
  ],
};
