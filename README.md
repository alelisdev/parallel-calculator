# Parallel Calculator (NestJS)

This project is a REST API-based calculator built with NestJS and TypeScript. It accepts mathematical expressions via HTTP requests, evaluates them, and returns the result. The calculator supports addition, subtraction, multiplication, division, and parentheses.

## Features

- Evaluate mathematical expressions (e.g., (1-1) _ 2 + 3 _ (1 - 3 + 4) + 10 / 2)
- Supported operations: +, -, \*, /, ()
- Input validation to ensure that only valid mathematical expressions are processed
- API-based architecture built using NestJS
- Unit, integration, and end-to-end tests included

## Technologies

- NestJS (Node.js framework)
- TypeScript
- Jest (for testing)
- MathJS (for expression parsing and evaluation)

## Requirements

- Node.js >= 14.x
- npm >= 6.x

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd parallel-calculator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

The application will run on http://localhost:8080.

## Usage

You can evaluate mathematical expressions by making a POST request to the /evaluate endpoint. Here's an example using curl:

```bash
curl -H "Content-Type: application/json" \
-X POST \
-d '{"expression": "(1-1) _ 2 + 3 _ (1 - 3 + 4) + 10 / 2"}' \
http://localhost:3000/evaluate
```

The response will look like:

```json
{
  "result": 11
}
```

## Postman Example

1. Open Postman and create a new POST request.

2. Set the URL to http://localhost:8080/evaluate.

3. Go to the Body tab, choose raw, and select JSON format.

4. Add the following JSON:

   ```json
   {
     "expression": "(1-1) _ 2 + 3 _ (1 - 3 + 4) + 10 / 2"
   }
   ```

5. Click Send to evaluate the expression.

## Validation

The input is validated to ensure it only contains valid mathematical characters (digits, operators, and parentheses). If the expression contains invalid characters, you'll receive a 400 Bad Request error with a message like:

```json
{
  "statusCode": 400,
  "message": "Invalid characters in expression",
  "error": "Bad Request"
}
```

## Running Tests

This project includes unit, integration, and end-to-end tests using Jest.

### Unit and Integration Tests

To run the unit and integration tests, use the following command:

```bash
npm run test
```

### End-to-End (E2E) Tests

To run the end-to-end tests, use:

```bash
npm run test:e2e
```

This will run E2E tests to check how the application handles actual HTTP requests.

## Folder Structure

```bash
src
├── calculator.controller.ts # Handles HTTP requests
├── calculator.service.ts # Contains the logic for evaluating expressions
├── evaluate.dto.ts # Defines the data transfer object for the expression
├── app.module.ts # Main module of the application
test
├── app.e2e-spec.ts # End-to-end tests
```

## License

This project is licensed under the MIT License.
