"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Advocate } from "./types";
import { getFilterAdvocates } from "./utils";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const hasFetchedRef = useRef(false);
  useEffect(() => {
    // prevent double fetching onload caused by strict mode
    // docs: https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    console.log("filtering advocates...");
    const filteredAdvocates = getFilterAdvocates(advocates, searchTerm);
    setFilteredAdvocates(filteredAdvocates);
  };

  const handleResetSearch = () => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <form
          role="search"
          aria-label="search for practictioner"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search-input">Searching for: </label>
          <input
            id="search-input"
            type="search"
            value={searchTerm}
            onChange={onChange}
            style={{ border: "1px solid black" }}
            placeholder="name, city, specialty, etc."
          />
        </form>
        <button onClick={handleResetSearch}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((specialty) => (
                    <div key={`${specialty}-${advocate.id}`}>{specialty}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
