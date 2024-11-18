import {DataTypes, Model, Optional} from "sequelize";
import sequelize from "../../dbconfig/dbconfig";

interface TagAttributes {
  id: number;
  Tag_Name: string;
}

interface CreateTagAttributes extends Optional<TagAttributes, "id"> {}

class Tag
  extends Model<TagAttributes, CreateTagAttributes>
  implements TagAttributes
{
  public id!: number;
  public Tag_Name!: string;
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Tag_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Tag",
    sequelize,
    timestamps: true,
  }
);

export default Tag;
