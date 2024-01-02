import { Entity, Column, ManyToOne } from 'typeorm';

import { Video } from '../../videos/entities/video.entity';

@Entity()
export class Traduccione {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ type: 'varchar', length: 9000 })
    contenido: string;

    @Column({ type: 'varchar', length: 9000 })
    contenido_original: string;

    @Column({ type: 'int', default: 0 })
    longitud: number;

    @Column({ type: 'varchar', length: 50 })
    fecha_creacion: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_origen: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_traducido: string;

    @ManyToOne(() => Video, (video) => video.url, { eager: true })
    video: Video;
}
