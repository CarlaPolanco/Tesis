import { Column, Entity, OneToMany } from 'typeorm';
import { Resumene } from '../../resumenes/entities/resumene.entity';
import { Traduccione } from '../../traducciones/entities/traduccione.entity';
import { Transcripcione } from '../../transcripciones/entities/Transcripcione.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('videos')
@Entity('videos')
export class Video {

    @Column({ primary: true, type: 'varchar', length: 100 })
    url: string;

    @Column({ type: 'varchar', length: 1000 })
    titulo: string;

    @Column({ type: 'varchar', length: 10000 })
    descripcion: string;

    @Column({ type: 'int', default: 0 })
    duracion: number;

    @Column({ type: 'varchar' })
    fecha_publicacion: Date;

    @Column({ type: 'varchar', length: 1000 })
    canal: string;

    @OneToMany(() => Resumene, resumen => resumen.video)
    resumenes: Resumene[];

    @OneToMany(() => Traduccione, traduccion => traduccion.video)
    traducciones: Traduccione[];

    @OneToMany(() => Transcripcione, transcripcion => transcripcion.video)
    transcripciones: Transcripcione[];
}
