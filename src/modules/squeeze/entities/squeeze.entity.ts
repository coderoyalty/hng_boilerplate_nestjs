import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Squeeze {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: false })
  job_title: string;

  @Column({ nullable: false })
  company: string;

  @Column('simple-array')
  interest: string[];

  @Column({ nullable: false })
  referral_source: string;
}
