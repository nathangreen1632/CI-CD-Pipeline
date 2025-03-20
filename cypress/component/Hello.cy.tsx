

const Hello = () => <h1>Hello, Cypress!</h1>;

describe('Hello Component', () => {
  it('renders correctly', () => {
    cy.mount(<Hello />);
    cy.contains('Hello, Cypress!');
  });
});
