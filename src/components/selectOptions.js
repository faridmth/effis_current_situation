import { data } from "./selectData";

export const ecmwfOptions = [
    {
      label: 'IFM',
      options: []
    },
    {
      label: 'KBDI',
      options: []
    },
    {
      label: 'MARK-5',
      options: []
    },
    {
      label: 'NFDRS',
      options: []
    }
  ];

  export const frForcastOptions = []
  
  for (let i = 0; i < data.length; i++) {
    const { group, title } = data[i];
    if (group === 'IFM') {
      ecmwfOptions[0].options.push({ value: i, label: title });
    } else if (group === 'KBDI') {
      ecmwfOptions[1].options.push({ value: i, label: title });
    }else if (group === 'MARK-5') {
      ecmwfOptions[2].options.push({ value: i, label: title });
    }
    else if (group === 'NFDRS') {
      ecmwfOptions[3].options.push({ value: i, label: title });
    }
    else if (group === 'frForcast') {
      frForcastOptions.push({ value: i, label: title });
    }

  }
  