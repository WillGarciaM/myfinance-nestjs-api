import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoContasModule } from './plano-contas/plano-contas.module';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'myfinance_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsTableName: "migrations",
      synchronize: false,
    }),
    PlanoContasModule,
    TransacoesModule,
  ],
})
export class AppModule {}
