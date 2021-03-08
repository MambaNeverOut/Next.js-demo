import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')   // 主键+被创建的键
  id: number;
  @Column('varchar')
  title: string;
  @Column('text')
  content: string;
  constructor(attributes: Partial<Post>) { // 只传递 Post 类型中的部分属性
    Object.assign(this, attributes);
  }
}
