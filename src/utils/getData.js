export default function getData(data, subCategory) {
  const getSubCatIdArr = (num) => {
    const subCatIdArr = [num];
    for (let i = num; i < data.length; i++) {
      subCatIdArr.push(i + 3);
      i = i + 2;
    }
    return subCatIdArr;
  };

  const Subcat_1_1 = data.filter((data, i) => {
    return getSubCatIdArr(1).includes(data.id);
  });
  const Subcat_2_1 = data.filter((data, i) =>
    getSubCatIdArr(2).includes(data.id)
  );
  const Subcat_2_2 = data.filter((data, i) =>
    getSubCatIdArr(3).includes(data.id)
  );
  if (subCategory === "Music") {
    return Subcat_1_1;
  }
  if (subCategory === "Cricket") {
    return Subcat_2_1;
  }
  if (subCategory === "Football") {
    return Subcat_2_2;
  }
}
