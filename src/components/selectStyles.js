export const customStyles = {
    dropdownIndicator: (provided) => ({
        ...provided,
        padding:'0px'
      }),
      container: (provided) => ({
        ...provided,
        padding:'0px',
      }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#e3f2fd' : '#ffffff',
      borderColor: state.isFocused ? '#90caf9' : '#cfd8dc',
      padding: '0px',
      minHeight :'25px',
      width:'200px'

    }),
    option: (provided, state) => ({
      ...provided,
      
    }),
    
  };
  