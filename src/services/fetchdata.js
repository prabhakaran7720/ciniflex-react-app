/**
 * description: This function is used to retrive data from json file
 * @param {*} src
 * @returns
 */
export const getData = (src) => {
    const arr = []
  let data = fetch(src)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.log(error)
      return arr
    });
  return data;
};
