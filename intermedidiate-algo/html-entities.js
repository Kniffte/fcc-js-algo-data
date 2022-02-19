function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"}
    for (const [key, value] of Object.entries(htmlEntities)) {
        str = str.replace(key, value);
    }
    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));