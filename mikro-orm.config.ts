import { defineConfig } from "@mikro-orm/postgresql";
import { Test } from "./entities/test.entity";
import { Migrator } from "@mikro-orm/migrations";

export default defineConfig({
  entities: [Test],
  extensions: [Migrator],
});
