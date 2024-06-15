import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: '0d6ff4ff-d6dd-4632-a312-201658fff39d',
    description: 'Product ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-shirt Teslo',
    description: 'Product Title',
    uniqueItems: true
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    example: 22,
    description: 'Product price',
    default: 0
  })
  @Column('float',{
    default: 0
  })
  price: number;

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Product description',
    nullable: true
  })
  @Column({
    type: 'text',
    nullable: true
  })
  description: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product slug - for SEO',
    uniqueItems: true
  })
  @Column('text', {
    unique: true
  })
  slug: string;

  @ApiProperty({
    example: 2,
    description: 'Product stock',
    default: 0
  })
  @Column('int', {
    default: 0
  })
  stock: number;

  @ApiProperty({
    example: ['M', 'XL', 'XXL'],
    description: 'Product sizes'
  })
  @Column('text',{
    array: true
  })
  sizes: string[];

  @ApiProperty({
    example: 'men',
    description: 'Product gender'
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ['t-shirt'],
    description: 'Product tags',
    default: []
  })
  @Column('text',{
    array: true,
    default: []
  })
  tags: string[];

  @ApiProperty({
    example: ['http://image1.jpg', 'http://image2.jpg'],
    description: 'Product images'
  })
  @OneToMany(
    () => ProductImage,
    (productImage) => productImage.product,
    { cascade: true, eager: true }
  )
  images?: ProductImage[];

  @ManyToOne(
    () => User,
    ( user ) => user.product,
    { eager: true }
  )
  user: User;

  @BeforeInsert()
  checkSlugInsert() {
    if ( !this.slug ) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ','_')
      .replaceAll("'",'')
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ','_')
      .replaceAll("'",'')
  }
}
