function Filter({ onInputChange, filter }) {
  return (
    <div>
      <h3>Find</h3>
      <label>
        <input
          value={filter}
          onChange={onInputChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}

export default Filter;
