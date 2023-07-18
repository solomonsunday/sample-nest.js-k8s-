import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item: string;

  @Column()
  userId: string;

  @Column()
  price: number;

  @Column()
  duration: string;

  @Column()
  pickupType: string;

  @Column()
  paymentStatus: string;

  @Column()
  stubbornStain: boolean;
}
