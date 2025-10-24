import { Advocate } from "./types";

function normalize(term: unknown) {
  if (term === null || term === undefined) return "";
  return String(term)
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .trim();
}

function normalizeSpecialties(specialties: string[]) {
  return Array.isArray(specialties) ? specialties.join(" ") : specialties;
}

export function getFilterAdvocates(advocates: Advocate[], searchTerm: string) {
  const needle = normalize(searchTerm);
  if (!needle) {
    return advocates;
  }

  return advocates.filter(function (a) {
    const specialties = normalizeSpecialties(a.specialties);
    const fields = [
      a.firstName,
      a.lastName,
      a.city,
      a.degree,
      specialties,
      a.yearsOfExperience,
    ];

    const haystack = fields.map(normalize).join(" ");
    return haystack.includes(needle);
  });
}

export function formatPhoneNumber(value: string | number) {
  const digits = String(value).replace(/\D/g, "");
  if (digits.length !== 10) {
    return String(value);
  }

  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6);

  return `(${area}) ${prefix}-${line}`;
}
