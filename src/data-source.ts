import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],


})
