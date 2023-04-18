class CustomError {
	message: string;
	errorCode: number;
	constructor(message: string, errorCode: number) {
		this.message = message;
		this.errorCode = errorCode;
	}
}

export default CustomError;
