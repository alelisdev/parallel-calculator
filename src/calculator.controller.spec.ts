import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should evaluate a simple addition expression', () => {
    expect(service.evaluateExpression('1+1')).toEqual(2);
  });

  it('should evaluate a complex expression', () => {
    const expression = '(1-1) * 2 + 3 * (1 - 3 + 4) + 10 / 2';
    expect(service.evaluateExpression(expression)).toEqual(11);
  });

  it('should throw an error for invalid expression', () => {
    expect(() => service.evaluateExpression('1 + a')).toThrow();
  });
});
