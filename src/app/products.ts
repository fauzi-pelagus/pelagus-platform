export interface Product {
  id: number;
  title: string;
  productNumber: string;
  description: string;
  image: string;
  threads: any[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: '1st impeller for fresh water pump',
    productNumber: '0001',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor',
    image: 'assets/img/impeller-1.png',
    threads: [
      {
        title: 'Clarification topic 1',
        summary:
          'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
        isResolved: false,
        comments: [
          {
            firstName: 'User',
            lastName: '1',
            entry:
              'Lorem ipsum dolor sit amet consectetur. A in leo pellentesque felis amet eu. Pharetra eget tellus arcu posuere feugiat. Amet ligula venenatis neque a sit id pellentesque. Vel libero cursus at faucibus ac a. Faucibus sit ultrices maecenas nibh. Odio at sollicitudin turpis pharetra. Platea enim viverra aliquet sodales morbi accumsan. Non nisi aliquet in sem vulputate venenatis eget quis. Sit rhoncus nisl fusce imperdiet.',
            timestamp: 'now',
          },
          {
            firstName: 'User',
            lastName: '2',
            entry:
              'Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
            timestamp: '12/05',
          },
          {
            firstName: 'User',
            lastName: '2',
            entry: 'created this thread.',
            timestamp: '11/05',
          },
        ],
      },
      {
        title: 'Clarification topic 2',
        summary:
          'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
        isResolved: true,
      },
      {
        title: 'Clarification topic 3',
        summary:
          'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
        isResolved: true,
      },
    ],
  },
  {
    id: 2,
    title: '2nd impeller for fresh water pump',
    productNumber: '0002',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor',
    image: 'assets/img/impeller-2.png',
    threads: [
      {
        title: 'Clarification topic 4',
        summary:
          'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
        isResolved: false,
        comments: [
          {
            firstName: 'User',
            lastName: '1',
            entry:
              'Lorem ipsum dolor sit amet consectetur. A in leo pellentesque felis amet eu. Pharetra eget tellus arcu posuere feugiat. Amet ligula venenatis neque a sit id pellentesque. Vel libero cursus at faucibus ac a. Faucibus sit ultrices maecenas nibh. Odio at sollicitudin turpis pharetra. Platea enim viverra aliquet sodales morbi accumsan. Non nisi aliquet in sem vulputate venenatis eget quis. Sit rhoncus nisl fusce imperdiet.',
            timestamp: 'now',
          },
          {
            firstName: 'User',
            lastName: '2',
            entry:
              'Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
            timestamp: '12/05',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '3rd impeller for fresh water pump',
    productNumber: '0003',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor',
    image: 'assets/img/impeller-3.png',
    threads: [],
  },
  {
    id: 4,
    title: '4th impeller for fresh water pump',
    productNumber: '0004',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor',
    image: 'assets/img/impeller-4.png',
    threads: [],
  },
];
