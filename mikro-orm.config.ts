import { defineConfig } from "@mikro-orm/postgresql";
import { Test } from "./entities/test.entity";

export default defineConfig({
  entities: [Test],
});
