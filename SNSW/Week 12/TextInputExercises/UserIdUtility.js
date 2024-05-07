export function constructId(fullName, streetAddress) {
  const nameAcronym = generateAcronym(fullName);

  if (nameAcronym === 'INVALID TEXT!') {
    return 'INVALID FULL NAME!';
  }

  const normalisedAddress = streetAddress.trim();
  const firstSpaceIndex = normalisedAddress.indexOf(' ');

  if (firstSpaceIndex === -1) {
    return 'INVALID ADDRESS!';
  }

  const streetNumText = normalisedAddress.substring(0, firstSpaceIndex);
  // Check to make sure each character is a digit
  for (const c in streetNumText) {
    if (isNumeric(c) !== true) {
      return 'ADDRESS MUST HAVE A STREET NUMBER!';
    }
  }

  return nameAcronym + streetNumText;
}

function generateAcronym(acronymText) {
  const normalisedText = acronymText.trim();

  // Check if the normalisedText is null, empty, or undefined
  if (!normalisedText) {
    return 'INVALID TEXT!';
  }

  let acronym = '';
  acronym += normalisedText.charAt(0);

  let spaceIndex = normalisedText.indexOf(' ');

  while (spaceIndex !== -1) {
    const indexAfterSpace = spaceIndex + 1;

    if (normalisedText.charAt(indexAfterSpace) !== ' ') {
      acronym += normalisedText.charAt(indexAfterSpace);
    }

    spaceIndex = normalisedText.indexOf(' ', indexAfterSpace);
  }

  return acronym.toUpperCase();
}


function isNumeric(c) {
  return !isNaN(parseInt(c, 10));
}