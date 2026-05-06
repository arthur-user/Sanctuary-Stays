import { getCountries } from '@/app/_lib/data-service';

/**
 * Server Component (no "use client").
 *
 * 1. Data fetching: Runs on the server and can await data during render,
 *    avoiding client-side fetching with useEffect.
 * 2. Simplicity: Uses async/await directly instead of useState/useEffect.
 * 3. Smaller bundle: Data-fetching logic (getCountries) stays on the server
 *    and is not included in client-side JavaScript.
 */

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
