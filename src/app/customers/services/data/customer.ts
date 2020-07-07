export interface Customer {
  id?: any;
  firstName: string;
  lastName: string;
  created?: Date;
  lastUpdated?: Date;
}

export function compareCustomer(customer1: Customer, customer2: Customer) {
  if (customer1.lastName < customer2.lastName) return -1;
  if (customer1.lastName > customer2.lastName) return 1;
  if (customer1.firstName < customer2.firstName) return -1;
  if (customer1.firstName > customer2.firstName) return 1;
  return 0;
}
