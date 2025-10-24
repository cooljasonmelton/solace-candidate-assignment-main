"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Advocate } from "./types";
import { formatPhoneNumber, getFilterAdvocates } from "./utils";

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
    <main className="bg-bg text-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 md:pt-20">
        <section className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">
            Find a practitioner
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Solace Advocates
          </h1>
          <p className="text-base text-muted md:text-lg">
            Find an advocate who will help untangle your healthcare by phone or
            video—no matter what you need—<b>covered by Medicare.</b>
          </p>
        </section>

        <section className="space-y-4 rounded-xl2 border border-border bg-accent-gradient text-text p-6 md:p-8">
          <h2 className="text-lg font-semibold text-text">Search Advocates</h2>
          <form
            role="search"
            aria-label="search for practitioner"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 justify-center"
          >
            <label
              htmlFor="search-input"
              className="text-sm font-medium text-muted whitespace-nowrap"
            >
              Searching for:
            </label>
            <div className="flex gap-2 align-end">
              <input
                id="search-input"
                type="search"
                value={searchTerm}
                onChange={onChange}
                placeholder="name, city, specialty, etc."
                className="w-full rounded-md border border-border bg-ghost px-4 py-3 text-base text-text shadow-inner outline-none transition focus:border-primary-border focus:ring-2 focus:ring-primary-border/40"
              />
              <button
                type="button"
                onClick={handleResetSearch}
                className="rounded-md border border-border bg-ghost-bg px-4 py-2 text-sm font-medium whitespace-nowrap text-muted transition hover:shadow-float hover:bg-ghost-hov"
              >
                Reset search
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-xl2 border border-border bg-card shadow-float">
          <table className="rounded-xl2 border-0 min-w-full overflow-hidden">
            <thead className="sticky top-0 z-10 bg-surface text-left text-sm font-semibold uppercase text-muted/80">
              <tr>
                <th className="px-5 py-4">First Name</th>
                <th className="px-5 py-4">Last Name</th>
                <th className="px-5 py-4">City</th>
                <th className="px-5 py-4">Degree</th>
                <th className="px-5 py-4">Specialties</th>
                <th className="px-5 py-4">Years of Experience</th>
                <th className="px-5 py-4">Phone Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card text-sm md:text-base">
              {filteredAdvocates.map((advocate) => (
                <tr
                  key={advocate.id}
                  className="transition hover:bg-surface/70"
                >
                  <td className="px-5 py-4 font-medium text-text">
                    {advocate.firstName}
                  </td>
                  <td className="px-5 py-4 text-text">{advocate.lastName}</td>
                  <td className="px-5 py-4 text-muted">{advocate.city}</td>
                  <td className="px-5 py-4 text-muted">{advocate.degree}</td>
                  <td className="px-5 py-4 text-muted">
                    <div className="flex flex-wrap gap-2">
                      {advocate.specialties.map((specialty) => (
                        <span
                          key={`${specialty}-${advocate.id}`}
                          className="rounded-md border border-border bg-ghost px-3 py-1 text-xs font-medium text-primary-bg"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted text-center">
                    {advocate.yearsOfExperience}
                  </td>
                  <td className="px-5 py-4 text-primary-bg whitespace-nowrap">
                    {formatPhoneNumber(advocate.phoneNumber)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredAdvocates.length === 0 && (
            <p className="px-5 py-6 text-center text-sm text-muted">
              No advocates match your search—try a different keyword.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
