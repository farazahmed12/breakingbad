import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterGrid from "./CharacterGrid";
import Search from "./Search";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <React.Fragment>
      <Search getQuery={(q) => setQuery(q)} />
      <div className="container">
        <CharacterGrid items={items} />
      </div>
    </React.Fragment>
  );
};

export default App;
