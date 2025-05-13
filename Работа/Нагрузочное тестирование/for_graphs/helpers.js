function smoothData(array) {

  return array.map((_, i) => {
    let numOfRealIndexs = 1;
    if (array[i - 1]) numOfRealIndexs++;
    if (array[i + 1]) numOfRealIndexs++;

    return (
      (1 / numOfRealIndexs) *
      ((array[i - 1] ?? 0) + array[i] + (array[i + 1] ?? 0))
    );
  });
}
