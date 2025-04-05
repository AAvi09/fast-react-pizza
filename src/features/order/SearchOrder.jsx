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
      />
    </form>
  );
};

export default Searchorder;
