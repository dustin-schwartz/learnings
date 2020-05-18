/**
 * IIFE - Immediately Invoked Function Expression
 * 
 * The main reason why you would want to use an IIFE is to not pollute the global scope, and keep the content of your choosing inside your function private.
 * https://dev.to/damcosset/iife-588a
 */

(function () {
	const text = "This is IIFE."
	
	console.log(text) // Outputs = "This is IIFE."
})()

console.log(text) // Outputs = undefined