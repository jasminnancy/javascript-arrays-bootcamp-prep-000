var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, a) {
  chocolateBars.unshift(a)
}
function destructivelyAddElementToBeginingOfArray(chocolateBars, a) {
  return [a, ...chococlateBars]
}