import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

class Pages extends Model {
  static get tableName() {
    return "pages";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "slug"],
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        slug: { type: "string", minLength: 1, maxLength: 255 },
        content: { type: "string", minLength: 1 },
        content: { type: "boolean"},
      },
    };
  }
}

export default Pages;
