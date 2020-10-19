import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'

import Image from './image'


@Entity('orphanages')
export default class Orphanege{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    whatsapp: string;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    about: string;

    @Column()
    instructions:string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(()=>Image, image=> image.orphanage, {
        cascade:[ 'insert','update']
    })
    @JoinColumn({name: 'oephanages_id'})
    images: Image[]
}


