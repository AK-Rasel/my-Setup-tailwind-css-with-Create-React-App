import PriceOption from "../PriceOption/PriceOption";


const PriceOpsions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio and weightlifting equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Unlimited gym access during operating hours",
        "Discounts on personal training sessions"
      ]
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all gym facilities, including pool and sauna",
        "Personal trainer consultation",
        "Group fitness classes",
        "Towel service",
        "Monthly body composition analysis",
        "Nutrition consultation"
      ]
    },
    {
      id: 4,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Access for two adults and up to two children",
        "Access to all gym facilities",
        "Family-friendly fitness classes",
        "Childcare services during workouts",
        "Discounts on family group training sessions"
      ]
    }
  ];

  // You can access and manipulate this data as needed in your JavaScript application.

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 text-center">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOpsions;