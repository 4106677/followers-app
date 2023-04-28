export const Dropdown = () => {
  return (
    <>
      <div>
        <p>Sort to</p>
        <form
        //   onChange={onSorted}
        >
          <select name="sort" required>
            <option value="all">Show All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </form>
      </div>
    </>
  );
};
