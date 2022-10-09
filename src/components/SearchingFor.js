const SearchingFor = (props) => {
  const { everyone } = props;

  return (
    <div className="searching-for-container">
      <div className="searching-for-title">
        <p>You are seaching for:</p>
      </div>
      <div className="searching-for-content">
        {Object.keys(everyone).map((label, index) => (
          <div key={index}>
            {everyone[label].isFound ? (
              <p style={{ textDecoration: 'line-through', color: 'red' }}>
                {label}
              </p>
            ) : (
              <p>{label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchingFor;
