import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base.entity";

@Entity()
export class Test extends BaseEntity {
  @Property()
  value!: string;

  constructor(value: string) {
    super();
    this.value = value;
  }
}
