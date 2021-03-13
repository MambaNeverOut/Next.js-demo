import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  content: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(type => User, user => user.comment)
  user: User;
  @ManyToOne(type => Comment, comment => comment.post)
  post: Post;
  c1: import("d:/Jirengu/nextjs-blog-1/src/entity/Post").Post;
}
