/**
 * 文档： https://github.com/chriso/validator.js
 */
export isEmail from 'validator/lib/isEmail'
export isURL from 'validator/lib/isURL'
export isNumeric from 'validator/lib/isNumeric'
import isNumeric from 'validator/lib/isNumeric'


export function isNotEmpty(value) {
	return value.trim().length !== 0
}

export function notEmptyArray(arr) {
	return arr.length !== 0
}

// 数字或空
export function numberOrEmpty(value) {
	return value ? isNumeric(value) : true
}

export function yyyymmdd(value) {
	let str = value.trim()
	return (str.length > 0 && /^\d{4}-\d{1,2}-\d{1,2}$/.test(str))
}

export function canBeEmpty(value) {
	return true
}

export function checkBrands(arr) {
	if(!Array.isArray(arr)){
		return false
	}
	// 只有一项，且为空
	if(arr.length === 1 && !arr[0].BrandName){
		return true
	}
	if(arr.length > 1){
		if(arr.filter(item => item.BrandName === undefined).length > 0 ){
			return false
		}
	}
	return arr.filter(item => item.isWarn === true).length > 0 ? false : true
}
