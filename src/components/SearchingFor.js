const SearchingFor = (props) => {
  const { everyone } = props;

  return (
    <div className="searching-for-container">
      <div className="searching-for-title">
        <p>You are seaching for:</p>
      </div>
      <div className="searching-for-content">
        {everyone &&
          everyone.map((character, index) => {
            return (
              <div key={index}>
                {character.found ? (
                  <p style={{ textDecoration: 'line-through', color: 'red' }}>
                    {character.name}
                  </p>
                ) : (
                  <p>{character.name}</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchingFor;
