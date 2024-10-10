import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { EvaluateDto } from './evaluate.dto';

@Controller('evaluate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  evaluate(@Body() evaluateDto: EvaluateDto) {
    const { expression } = evaluateDto;
    const result = this.calculatorService.evaluateExpression(expression);
    return { result };
  }
}
