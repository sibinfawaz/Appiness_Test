const validate = (data: any): any => {
  let error = {};
  Object.entries(data).map((item: any): void => {
    if (item[1].type === 'required') {
      if (item[1].value === '' || item[1].value === undefined) {
        error = {
          ...error,
          [item[0]]: 'This field is mandatory',
        };
      } else if (item[1].value !== item[1].checkValue) {
        error = {
          ...error,
          [item[0]]: item[1].error
            ? item[1].error
            : 'Please enter correct input',
        };
      }
    }
  });
  return error;
};

export {validate};
