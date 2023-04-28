export const Dropdown = ({ setFilter, def }) => {
  const onChange = e => {
    e.preventDefault();
    setFilter(e.currentTarget.elements.sort.value);
  };

  return (
    <>
      <div>
        <p>Sort to</p>
        <form onChange={onChange}>
          <select name="sort" defaultValue={def} required>
            <option value="all">Show All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </form>
      </div>
    </>
  );
};
