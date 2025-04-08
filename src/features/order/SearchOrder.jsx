import { useState, useNavigate } from "react";
import { useNavigation } from "react-router-dom";

const Searchorder = () => {
  const [query, setQuery] = useState(" ");
  const navigate = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white border border-stone-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent sm:w-64 focus:w-72   transition-all duration-300"
      />
    </form>
  );
};

export default Searchorder;
