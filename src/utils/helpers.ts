/**
 * Convert an array of object into an object of enitites.
 * Keyfield spesifies the object keys, e.g. keyfield = id:
 * { "123": { id: "123", someProp: "value" }}
 */

export const toEntities = (array: any[], keyField: string) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

export default {
  toEntities
};
