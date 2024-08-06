import Ajv from 'ajv';
import AjvErrors from 'ajv-errors';
import mongoose from 'mongoose';

const addCustomValidators = (ajv) => {
  // /*
  //   Date Validator
  //   USAGE: startDate: { type: 'string', dateFormat: 'YYYY-MM-DD' } 
  // */
  // ajv.addKeyword({
  //   keyword: 'dateFormat',
  //   type: 'string',
  //   schemaType: 'string',
  //   compile: (format) => (data) => moment(data, format || 'YYYY-MM-DD', true).isValid(),
  // });

  /*
    Mongo ID Validator
    USAGE: id: { type: 'string/array', mongoId: true } 
  */
  ajv.addKeyword({
    keyword: 'mongoId',
    schemaType: 'boolean',
    compile: () => (data) => {
      if (Array.isArray(data)) {
        const isInvalidPresent = data.find((key) => !mongoose.Types.ObjectId.isValid(key));
        return !isInvalidPresent;
      }

      return mongoose.Types.ObjectId.isValid(data);
    },
  });

  /*
    Date comparator
    USAGE: id: { type: 'string', moreThanDate: 'keyToCompareWith' } 
  */
  // ajv.addKeyword({
  //   keyword: 'moreThanOrEqualDate',
  //   type: 'string',
  //   compile: (compareWith) => (data, root) => {
  //     if (!data) return true;
  //     const compareWithValue = root.parentData[compareWith];
  //     if (!compareWithValue) return false;

  //     const sDate = moment(compareWithValue, 'YYYY-MM-DD', true);
  //     const eDate = moment(data, 'YYYY-MM-DD', true);

  //     return sDate.isValid() && eDate.isValid() && eDate.isSameOrAfter(sDate);
  //   },
  // });
};
// allErrors: true (validation will not stop at one point it will validate all error)
// coerceTypes - to change data type, when possible, to match the type(s) in the schema.
export default (options = { allErrors: true, coerceTypes: true }) => {
  const ajv = new Ajv(options);
  AjvErrors(ajv);
  addCustomValidators(ajv);
  return ajv;
};
