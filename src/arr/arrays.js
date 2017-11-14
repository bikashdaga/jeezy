// math
import average from "./math/average"
import extent from "./math/extent"
import max from "./math/max"
import median from "./math/median"
import min from "./math/min"
import sum from "./math/sum"

// queries
import isArray from "./queries/isArray"

// transformations
import flatten from "./transformations/flatten"
import pivot from "./transformations/pivot"
import pluck from "./transformations/pluck"
import removeItem from "./transformations/removeItem"
import removeProperty from "./transformations/removeProperty"
import shuffle from "./transformations/shuffle"
import sortBy from "./transformations/sortBy"
import sortNumbers from "./transformations/sortNumbers"
import unique from "./transformations/unique"
import uniqueBy from "./transformations/uniqueBy"

// other
import random from "./other/random"
import shallowCopy from "./other/shallowCopy"

export default {
	average: average,
	extent: extent,
	flatten: flatten,
	is: isArray,
	max: max,
	median: median,
	min: min,
	pivot: pivot,
	pluck: pluck,
	removeItem: removeItem,
	removeProperty: removeProperty,
	random: random,
	shallowCopy: shallowCopy,
	shuffle: shuffle,
	sortBy: sortBy,
	sortNumbers: sortNumbers,
	sum: sum,
	unique: unique,
	uniqueBy: uniqueBy
}