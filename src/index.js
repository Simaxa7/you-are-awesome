const createEnumerableProperty = (propertyName) => {return propertyName};

const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);

const createProtoMagicObject = ( ) => {
	let object = new Function;
	object.prototype = Object.getPrototypeOf(object);
	return object;
};

const incrementor = () => {};

var countForAsync = 0;
	const asyncIncrementor = () => {
		countForAsync++;
		return promise = new Promise((resolve, reject) => {
			resolve(countForAsync);
		})
};

const createIncrementer = (result) => {};
const returnBackInSecond = (countForAsync) => {
	return promise = new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve(countForAsync)}, 1000)
	})
};

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {return arr.sort()};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;