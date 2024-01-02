import { Entity, Column, ManyToOne } from 'typeorm';

import { Video } from '../../videos/entities/video.entity';

@Entity('resumenes')
export class Resumene {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ type: 'varchar', length: 9000 })
    contenido: string;

    @Column({ type: 'int', default: 0 })
    longitud: number;

    @Column({ type: 'varchar' })
    fecha_creacion: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_origen: string;

    @Column({ type: 'varchar', length: 100 })
    idioma_resumen: string;

    @Column({ type: 'varchar', length: 100 })
    palabras_clave: string;

    @ManyToOne(() => Video, (video) => video.url, { eager: true })
    video: Video;

}
