module.exports = (list, callback) => {
  let msg = "";
  list.map(
    (item, index) =>
      (msg += `${index + 1}. ${item.name} - Points: ${item.points} DKP\n`)
  );
  callback(msg);
};
