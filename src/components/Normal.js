import React, { useMemo, useState } from "react";
// import { lorem ,faker} from 'faker';


const getMockBicycleName = () => {
  return Array(1000)
    .fill(0)
    .map((v, i) => faker.vehicle.bicycle());
};

export default function Normal() {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const bicycleNames = useMemo(() => getMockBicycleName(), []);
  const onChangeText = (e) => {
    setSearchText(e.target.value);
    setFilterText(e.target.value);
  };
  const getFilteredBicycleNames = () => {
    return isEmpty(filterText)
      ? bicycleNames
      : filter(bicycleNames, (b) =>
          includes(lowercase(b), lowercase(filterText))
        );
  };
  const filteredNames=getFilteredBicycleNames()
  return (
    <>
      <div>
        Bicycle name:
        <input value={searchText} onChange={onChangeText} />
      </div>
      <ul>
        {map(filteredNames, (b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </>
  );
}
