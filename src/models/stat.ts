import {AutoIncrement, Column, DataType, PrimaryKey, Table} from "sequelize-typescript";
import {Model} from "sequelize-typescript";

@Table({timestamps: false, tableName: "stats", underscored: true})
export default class StatModel extends Model<StatModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Column({type: DataType.DATEONLY, field: "stat_date"})
  public statDate: Date;

  @Column({type: DataType.STRING(32), field: "stat_name"})
  public statName: string;

  @Column({type: DataType.DOUBLE, field: "stat_value"})
  public statValue: string;
}
