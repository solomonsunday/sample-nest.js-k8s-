import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './core/users/users.module';
import { TransactionsModule } from './core/transactions/transactions.module';
import { CustomersModule } from './core/customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './core/customers/entities/customer.entity';
import { Transaction } from './core/transactions/entities/transaction.entity';
import { User } from './core/users/entities/user.entity';
import { Item, ItemsModule } from './core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Customer, Item, Transaction, User],
      synchronize: true,
    }),
    UsersModule,
    TransactionsModule,
    ItemsModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
