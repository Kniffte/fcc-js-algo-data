function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"}
    for (const [key, value] of Object.entries(htmlEntities)) {
        const regex = new RegExp(`${key}`, "g")
        str = str.replace(regex, value);
    }
    return str;
  }
  
  // console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
