import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const SearchInput = () => (
  <InstantSearch searchClient={searchClient} indexName="Posts">
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default SearchInput;
