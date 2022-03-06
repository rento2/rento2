import { PhotoFactory } from "./../factories/Photo";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class PhotoSeeder extends BaseSeeder {
  public static developmentOnly = true;

  public async run(): Promise<void> {
    await PhotoFactory.createMany(6);
  }
}
