import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller('auth')
export class CustomersController {
  @Post('/signup')
  async signup(@Body() body: CreateCustomerDto) {
    console.log(body);
  }
}
