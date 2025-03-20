import models from '../models/index.js';
import db from '../config/connection.js';

// Define a type for the models object, assuming each model has a `db` property.
type ModelType = {
  db: {
    db: {
      listCollections: (filter: { name: string }) => {
        toArray: () => Promise<any[]>;
      };
    };
  };
};

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Ensure modelName exists in models and assert its type
    const model = models[modelName] as ModelType | undefined;

    // Check if the model exists before accessing db
    if (!model) {
      throw new Error(`Model ${modelName} does not exist`);
    }

    // Safely access listCollections using the model's db object
    const modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};