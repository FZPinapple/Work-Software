const input = document.getElementById("input");
const resultOutput = document.getElementById("result-output"); 

const parts = {
  staging: ["11127065", "11587949", "1133813", "37183", "41228", "1592700041", "94050", "1592700040"],
  packaging: ["15011", "11104710", "11123242", "29815", "93164", "37176", "0154706", "1592700076", "0165973", "0297639", "0297640", "922403728", "11253491", "53011"],
  carpentry: ["31558", "94055", "0143928", "1592700080", "1592700081", "94049", "0148199", "31556", "0165960", "11127066", "921197710", "0203761", "99874788", "924239489"],
  controlfab: ["0145216", "0145215", "0145347", "0145217", "28795", "0145219", "0172782", "37010", "33610", "1137703", "0145233", "37012", "1592700085", "1592700086", "37004", "29357", "0145214", "37006", "33066", "33606", "28626",]
};

function findCategoryForPart(partNumber) {
    for (const categoryName in parts) {
        if (parts[categoryName].includes(partNumber)) {
            return categoryName.toUpperCase();
        }
    }
    return "NOT FOUND";
}

function clearTextArea() {
  input.value = "";
}

function calcCategory() {
  const rawInputText = input.value.trim();
  
  if (!rawInputText) {
    resultOutput.textContent = "Please enter part numbers in the text area.";
    return;
  }

  const partNumbers = rawInputText
    .split(/,|\n/)
    .map(part => part.trim())
    .filter(part => part.length > 0);

  let resultsSummary = "--- Search Results ---\n";

  partNumbers.forEach(partNumber => {
    const category = findCategoryForPart(partNumber);
    resultsSummary += `Part: ${partNumber.padEnd(15)} | Category: ${category}\n`;
  });

  resultOutput.textContent = resultsSummary;
}
