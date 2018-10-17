
var convertJSONtoCSV = function(jsonData) {
  var obj = JSON.parse(jsonData);
  var csv = '';

  // first level (write keys to first line)
  for (key in obj) {
    if (key !== 'children') {
      csv += key + ',';
    }
  }
  csv = csv.slice(0, csv.length - 1);

  var recurse = function(object) {
    csv += '\n';
    // next level (write values to next line)
    for (key in object) {
      if (key !== 'children') {
        csv += object[key] + ',';
      }
    }
    csv = csv.slice(0, csv.length - 1);
    csv += '\n';

    // deal with children (if any)
    if (object.children.length) {
      object.children.forEach(c => {
        recurse(c);
      });
    }
  };
  recurse(obj);
  return csv;
};

module.exports.convertJSONtoCSV = convertJSONtoCSV;