// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName};

const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);

// не а не отправлять
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

// return same argument not earlier than in one second, and not later, than in two
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


// incrementor();
// incrementor();
// incrementor();

// createProtoMagicObject();
		// const propertyName = 'property';
  //   const propertyValue = 'value';

  //   const property = createEnumerableProperty(propertyName);
  //   const object = {};

  //   object[property] = propertyValue;

  //   console.log(createEnumerableProperty(Object.keys(object).length, 1));
  //   console.log(createEnumerableProperty(object[property], propertyValue));