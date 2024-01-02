import { Entity, Column, ManyToOne } from 'typeorm';

import { Video } from '../../videos/entities/video.entity';

@Entity('transcripciones')
export class Transcripcione {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ type: 'varchar', length: 10000 })
    contenido: string;

    @Column({ type: 'int', default: 0 })
    longitud: number;

    @Column({ type: 'varchar' })
    fecha_creacion: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_origen: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_transcripcion: string;

    @ManyToOne(() => Video, video => video.url, { eager: true })
    video: Video;
}
