export const stringify = (value) => {
	// Write your code here
	// converts it to string
	// if primitive  - string , number, boolean, null, undefined - str of this
	// if non-primitive - traverse obj arr and return

	if (typeof value === "undefined") return value;

	if (
		typeof value === "number" ||
		typeof value === "boolean"
	)
		return String(value);

	if (typeof value === "object" && value == null)
		return String(value);

	if (typeof value === "string")
		return `"${String(value)}"`;

	if (Array.isArray(value)) {
		return `[${value.join(",")}]`;
	}

	return value;
};

// TODO : handle for objects and traverse recursively if nested object
