/*
 * Takes in 3 parameters:
 * articlels: array of articles
 * insertIndices: an array of indices where the placeholders should be inserted
 * colors: an array of colors that the placeholders should be, in order
 */
export function insertPlaceholders(articles, insertIndices, colors) {
  // The lengths of insertIndices and colors should be the same
  if (insertIndices.length !== colors.length) {
    throw new Error("insertPlaceholders() : insertIndices and colors must have the same length");
  }

  let result = [];
  let lastIndex = 0;  // points to position in array insertIndices

  for (var i=0; i<articles.length; i++) {
    if (i === insertIndices[lastIndex]) {
        result.push({ isPlaceholder: true, placeholderColor: colors[lastIndex] });
        i--;
        lastIndex++;
        continue;
    }
    
    result.push(articles[i]);
  }

  // In case the last insert index is beyond the articles length
  while (lastIndex < insertIndices.length) {
    result.push({ isPlaceholder: true, placeholderColor: colors[lastIndex++] });
  }

  return result;
}
