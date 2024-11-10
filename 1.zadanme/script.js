function processData() {
  const data = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
      { id: 5, value: 50 }
  ];

  let processedData = [];
  for (let i = 0; i < data.length; i++) {
      if (data[i].value > 20) {
          processedData.push({
              id: data[i].id,
              newValue: data[i].value * 2
          });
      }
  }

  return `Processed data: ${JSON.stringify(processedData)}`;
}

console.log(processData());