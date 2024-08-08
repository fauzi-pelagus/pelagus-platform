export interface Orders {
  id: number;
  orderNumber: string;
  items: any[];
  qty: number;
  price: number;
  leadTime: number;
  customer: string;
  suppliers: string[];
  status: string;
  action: string;
}

export const ORDERS: Orders[] = [
  {
    id: 1,
    orderNumber: 'S24-2189',
    items: [
      {
        title: 'Close impeller for fresh water pump 1',
        image: 'assets/img/impeller-1.png',
        partNumber: '123456',
        productNumber: '0001',
        tech: 'Binder jetting',
        applicationDetails:
          'Lorem ipsum dolor sit amet consectetur. Egestas tincidunt risus et condimentum eu molestie ipsum pharetra. Eu placerat ut rutrum tristique vulputate mattis ipsum. Pellentesque est viverra purus nulla praesent quam eget.',
      },
      {
        title: 'Close impeller for fresh water pump 2',
        image: 'assets/img/impeller-2.png',
        partNumber: '345678',
        productNumber: '0002',
        tech: 'Binder jetting',
        applicationDetails:
          'Lorem ipsum dolor sit amet consectetur. Egestas tincidunt risus et condimentum eu molestie ipsum pharetra. Eu placerat ut rutrum tristique vulputate mattis ipsum. Pellentesque est viverra purus nulla praesent quam eget.',
      },
    ],
    qty: 1,
    price: 12000,
    leadTime: 30,
    customer: 'John Doe',
    suppliers: ['Supplier 1', 'Supplier 2', 'Supplier 3'],
    status: 'In production',
    action: 'View order',
  },
];
