/**
 * Convert an array of object into an object of enitites.
 * Keyfield spesifies the object keys, e.g. keyfield = id:
 *
 *  [{ id: "123", someProp: "value" }]
 * becomes
 * { "123": { id: "123", someProp: "value" }}
 */
export const toEntities = (array: any[], keyField: string) => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};

/**
 * Convert an object of entities into an object array.
 *
 * { "123": { id: "123", someProp: "value" }}
 * becomes
 * [{ id: "123", someProp: "value" }]
 */
export const toArray = (obj: any): any[] => {
  return Object.values(obj);
};

/**
 * Check if an object is empty or not. Return true if empty.
 */
export const isEmpty = (obj: any): boolean => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

export default {
  toEntities,
  toArray
};
