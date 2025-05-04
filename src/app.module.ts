import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsablesModule } from './responsables/responsables.module';
import { DataSource } from 'typeorm';
//import { RazasdegatosModule } from './razasdegatos/razasdegatos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '194.140.199.108',
    port: 4546,
    username: 'root',
    password: 'Mendocita*',
    database: 'pruebas',
    autoLoadEntities: true,
    synchronize: true,
  }), ResponsablesModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({

    'entities': [join(__dirname,'**', '*.entidad.{ts,js}')],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

autoLoadEntities: true,
type: 'mysql',
    host: '194.140.199.108',
    port: 4545,
    username: 'root',
    password: 'Mendocita*',
    database: 'moodle',
    autoLoadEntities: true,
    synchronize: true,

*/