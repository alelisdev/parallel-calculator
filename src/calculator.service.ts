import { Injectable, BadRequestException } from '@nestjs/common';
import { parse } from 'mathjs'; // Use mathjs for parsing and evaluating expressions

@Injectable()
export class CalculatorService {
  evaluateExpression(expression: string): number {
    try {
      // Parse and evaluate the expression
      const node = parse(expression);
      const result = node.evaluate();
      return result;
    } catch (error) {
      throw new BadRequestException('Invalid mathematical expression');
    }
  }
}
