import { EntityManager, EntityRepository, MikroORM, Options } from "@mikro-orm/postgresql";
import config from "../mikro-orm.config";
import { Test } from "@/entities/test.entity";

export interface Services {
  orm: MikroORM;
  em: EntityManager;
  test: EntityRepository<Test>;
}

let orm: MikroORM | null = null;

export async function initORM(options?: Options): Promise<Services> {
  if (!orm) {
    // allow overriding config options for testing
    orm = await MikroORM.init({
      ...config,
      ...options,
    });
  }

  // Fork a new EntityManager for each request
  const em = orm.em.fork();

  return { orm, em, test: em.getRepository(Test) };
}
