var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, a) {
  chocolateBars.unshift(a)
  return chocolateBars
}
function destructivelyAddElementToBeginingOfArray(chocolateBars, a) {
  return [a, ...chococlateBars]
}