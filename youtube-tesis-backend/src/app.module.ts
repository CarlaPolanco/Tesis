import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResumenesModule } from './resumenes/resumenes.module';
import { TraduccionesModule } from './traducciones/traducciones.module';
import { TranscripcionesModule } from './transcripciones/transcripciones.module';
import { VideosModule } from './videos/videos.module';
import { ConfigModule } from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'carla',
      password: 'postgres',
      database: 'youtubetesisdb',
      autoLoadEntities: true,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    VideosModule,
    ResumenesModule,
    TraduccionesModule,
    TranscripcionesModule,
  ],

  controllers: [],
  providers: [],
})

export class AppModule { }
