import { Drop, Select } from './Filter.styled';

export const Dropdown = ({ setFilter, def }) => {
  const onChange = e => {
    e.preventDefault();
    setFilter(e.currentTarget.elements.sort.value);
  };

  return (
    <Drop>
      <form onChange={onChange}>
        <Select name="sort" defaultValue={def} required>
          <option value="all">Show All</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </Select>
      </form>
    </Drop>
  );
};
