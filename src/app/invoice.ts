export class Invoice {
	date: number;
	name: string;
	address: string;
	email: string;
	phone: string;
	agent: number;

	adultBikesQty: number;
	adultBikesHrs: number;
	adultBikesTimeOut: number;
	adultBikesTimeIn: number;

	kidsBikesQty: number;
	kidsBikesHrs: number;
	kidsBikesTimeOut: number;
	kidsBikesTimeIn: number;

	tandemBikesQty: number;
	tandemBikesHrs: number;
	tandemBikesTimeOut: number;
	tandemBikesTimeIn: number;

	helmetQty: number;
	lockQty: number;
	basketQty: number;
	babySeatQty: number;

	brakesChecked: boolean;
	gearsChecked: boolean;
	wheelsChecked: boolean;
	tiresChecked: boolean;
	handleBarAndSeatChecked: boolean;

	// 0: cash, 1: credit
	paymentMethod: number;

	subTotal: number;
	// 8.875%
	tax: number;
	total: number;
}
